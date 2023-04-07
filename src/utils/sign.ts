import { decode, encode } from '@planetarium/bencodex';
import { Account } from 'types/account';
import {
  HexToUint8Array,
  Uint8ArrayEquals,
  Uint8ArrayToHex,
} from './Uint8Array';

export const ACCOUNT_VERSION = 0;

export async function signTransaction(tx: string, account: Account) {
  if (account.VERSION !== ACCOUNT_VERSION)
    throw new Error("The Account interface version doesn't match.");

  const txBinary = HexToUint8Array(tx);
  const decodedTx = decode(txBinary, {
    dictionaryConstructor: Map,
  });
  const publicKey = await account.getPublicKey();
  const hash = await crypto.subtle.digest('SHA-256', txBinary);
  const signature = await account.sign(new Uint8Array(hash));

  if (!decodedTx || !(decodedTx instanceof Map)) {
    throw new Error('Invalid transaction.');
  }

  if (Array.from(decodedTx.entries()).some(([key]) => key[0] === 0x53)) {
    throw new Error('Already signed.');
  }

  if (
    Array.from(decodedTx.entries()).some(
      ([key, value]) => key[0] === 0x70 && !Uint8ArrayEquals(value, publicKey)
    )
  ) {
    throw new Error(
      'Public key from unsigned TX mismatches with public key derived from signing private key'
    );
  }

  decodedTx.set(new Uint8Array([0x53]), signature);

  return Uint8ArrayToHex(encode(decodedTx));
}