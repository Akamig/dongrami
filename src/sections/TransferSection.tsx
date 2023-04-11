import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import { decode, encode } from '@planetarium/bencodex';
import { encodeUnsignedTxWithCustomActions } from '@planetarium/tx';
import { ethers } from 'ethers';
import { computeAddress } from 'ethers/lib/utils';
import { useLib9c } from 'hooks/useLib9c';
import { FormEvent, useState } from 'react';
import { useAccount } from 'store/main';
import { HexToUint8Array, Uint8ArrayToHex } from 'utils/Uint8Array';
import { getNextTxNonce, stageTransaction } from 'utils/endpoint';
import { signTransaction } from 'utils/sign';

export function TransferSection() {
  const toast = useToast();

  const account = useAccount();

  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const lib9c = useLib9c();

  if (!lib9c) {
    return (
      <Box>
        <Heading as="h2" size="lg">
          Transfer Asset (Ver. 3)
        </Heading>
        <Text my="6" textAlign="center">
          Loading lib9c-wasm...
        </Text>
      </Box>
    );
  }

  const recipientValid =
    recipient.trim().length === 0 || ethers.utils.isAddress(recipient);
  const amountValid = !isNaN(Number(amount));
  const formValid =
    lib9c &&
    recipient.trim().length !== 0 &&
    recipientValid &&
    amount.trim().length !== 0 &&
    amountValid;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValid) {
      return;
    }

    if (!account) {
      return;
    }

    const publicKey = await account.getPublicKey(false);
    const sender = computeAddress(publicKey);

    const Address = lib9c.Address;
    const Currency = lib9c.Currency;

    const customAction = lib9c.transfer_asset3({
      sender: new Address(sender),
      recipient: new Address(recipient),
      amount: {
        currency: new Currency({
          ticker: 'NCG',
          decimalPlaces: 2,
          minters: [new Address('47d082a115c63e7b58b1532d20e631538eafadde')],
        }),
        sign: 1,
        majorUnit: amount,
        minorUnit: '0',
      },
      memo: 'Hello, world from lib9c-wasm w/ dongrami!',
    });

    console.log('customAction', Uint8ArrayToHex(customAction));

    const nonce = await getNextTxNonce(sender);

    console.log('nonce', nonce);

    const unsignedTx = encodeUnsignedTxWithCustomActions({
      nonce: BigInt(nonce),
      publicKey,
      signer: HexToUint8Array(sender),
      timestamp: new Date(Date.now()),
      updatedAddresses: new Set([
        // HexToUint8Array(sender),
        // HexToUint8Array(recipient),
      ]),
      genesisHash: HexToUint8Array(
        '4582250d0da33b06779a8475d283d5dd210c683b9b999d74d03fac4f58fa6bce'
      ),
      customActions: [decode(customAction)],
    });

    const encodedUnsignedTx = encode(unsignedTx);

    console.log('unsignedTx', Uint8ArrayToHex(encodedUnsignedTx));

    const signedTx = await signTransaction(encodedUnsignedTx, account);

    console.log('signedTx', signedTx);

    const txId = await stageTransaction(signedTx);

    console.log('Tx ID: ', txId);
    toast({
      title: 'Transaction sent',
      description: `Tx ID: ${txId}`,
      status: 'success',
    });
  };

  return (
    <Box>
      <Heading as="h2" size="lg">
        Transfer Asset (Ver. 3)
      </Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl mt="3" isRequired isInvalid={!recipientValid}>
          <FormLabel>Recipient</FormLabel>
          <Input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.currentTarget.value)}
          />
        </FormControl>
        <FormControl mt="3" isRequired isInvalid={!amountValid}>
          <FormLabel>Amount (NCG)</FormLabel>
          <Input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
          />
        </FormControl>
        <Button mt="3" type="submit" w="full" isDisabled={!formValid}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
