import {
  BencodexDictionary,
  decode,
  encode,
  isDictionary,
} from '@planetarium/bencodex';
import { Account } from 'types/account';
import { Uint8ArrayEquals, Uint8ArrayToHex } from './Uint8Array';

export const ACCOUNT_VERSION = 0;

export async function signTransaction(tx: Uint8Array, account: Account) {
  if (account.VERSION !== ACCOUNT_VERSION)
    throw new Error("The Account interface version doesn't match.");

  const decodedTx = decode(tx);
  const publicKey = await account.getPublicKey(false);

  const hash = new Uint8Array(await crypto.subtle.digest('SHA-256', tx));

  const signature = await account.sign(hash);

  console.log(Uint8ArrayToHex(signature));

  if (!decodedTx || !isDictionary(decodedTx)) {
    throw new Error('Invalid transaction.');
  }

  if (Array.from(decodedTx.entries()).some(([key]) => key[0] === 0x53)) {
    throw new Error('Already signed.');
  }

  if (
    Array.from(decodedTx.entries()).some(
      ([key, value]) =>
        key[0] === 0x70 && !Uint8ArrayEquals(value as Uint8Array, publicKey)
    )
  ) {
    throw new Error(
      'Public key from unsigned Tx mismatches with public key derived from signing private key'
    );
  }

  const signedTx = new BencodexDictionary([
    ...decodedTx,
    [new Uint8Array([0x53]), signature],
  ]);

  return Uint8ArrayToHex(encode(signedTx));
}
