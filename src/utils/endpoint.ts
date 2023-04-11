import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../graphql/sdk.main';

export async function getNextTxNonce(address: string) {
  if (!import.meta.env.VITE_PUBLIC_MAIN_RPC)
    throw new Error('No main RPC endpoint');

  const sdks = getSdk(new GraphQLClient(import.meta.env.VITE_PUBLIC_MAIN_RPC));

  const { transaction } = await sdks.getNextTxNonce({ address });

  return transaction.nextTxNonce;
}

export async function stageTransaction(tx: string) {
  if (!import.meta.env.VITE_PUBLIC_MAIN_RPC)
    throw new Error('No main RPC endpoint');

  const sdks = getSdk(new GraphQLClient(import.meta.env.VITE_PUBLIC_MAIN_RPC));

  const { stageTransaction: txId } = await sdks.stageTransaction({
    payload: tx,
  });

  return txId;
}
