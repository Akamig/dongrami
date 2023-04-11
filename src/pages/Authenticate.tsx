import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { getAccountFromV3 } from 'utils/account';
import { useKeystore, useMainMutations, useMessage } from '../store/main';
import { useWorker } from '../store/worker';
import { readKeyFile } from '../worker/handlers';

export function AuthenticatePage() {
  const worker = useWorker();
  const message = useMessage();
  const keystore = useKeystore();

  const { setKeystore, setAccount } = useMainMutations();

  const [keyFile, setKeyFile] = useState<File | null>(null);
  const [passphrase, setPassphrase] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const toast = useToast();

  // Read Key File on Key File Change
  useEffect(() => readKeyFile(worker, keyFile), [keyFile]);

  // Set Keystore on Worker Message
  useEffect(() => {
    if (message?.key === 'KEY_FILE_READ') {
      setKeystore(message.data.content);
    }

    if (message?.key === 'ERROR_KEY_FILE_READ') {
      toast({
        title: 'Error',
        description: 'Failed to read key file. Please try again.',
        status: 'error',
      });
    }
  }, [message]);

  const authenticate = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (!keystore) {
      setLoading(false);
      setKeyFile(null);
      toast({
        title: 'Error',
        description: 'Failed to read key file. Please try again.',
        status: 'error',
      });
      return;
    }

    if (!passphrase) {
      setLoading(false);
      toast({
        title: 'Error',
        description: 'Please enter your passphrase.',
        status: 'error',
      });
      return;
    }

    try {
      const account = getAccountFromV3(keystore, passphrase);
      setAccount(account, await account.getPublicKey(false));
    } catch (e: unknown) {
      setLoading(false);

      if (!(e instanceof Error)) {
        toast({
          title: 'Error',
          description:
            'Unknown error occured while getting account from key file. Please try again.',
          status: 'error',
        });
        return;
      }

      toast({
        title: 'Error',
        description: e.message,
        status: 'error',
      });
    }

    setLoading(false);
  };

  return (
    <Flex as="form" gap="3" flexDir="column" onSubmit={authenticate}>
      <FormControl isRequired>
        <FormLabel>Web3 Secret Storage File</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FontAwesomeIcon} icon={faFile} textColor="gray.500" />
          </InputLeftElement>
          <Input
            type="text"
            readOnly
            value={keyFile ? keyFile.name : ''}
            placeholder="Select a key file..."
            onClick={() => inputFileRef.current?.click()}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Passphrase</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FontAwesomeIcon} icon={faKey} textColor="gray.500" />
          </InputLeftElement>
          <Input
            type="password"
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            placeholder="Passphrase"
            disabled={!keystore}
          />
        </InputGroup>
      </FormControl>
      <Input
        type="file"
        display="none"
        ref={inputFileRef}
        onChange={(e) => {
          if (e.target.files && e.target.files.length === 1) {
            setKeyFile(e.target.files[0]);
          }
        }}
      />
      <Button
        w="full"
        type="submit"
        isDisabled={!keystore || !passphrase}
        isLoading={isLoading}
      >
        Authenticate
      </Button>
    </Flex>
  );
}
