import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { WorkerResultMessage } from '../types/message';
import { Uint8ArrayToHex } from '../utils/Uint8Array';
import { Account } from 'types/account';

type MainState = {
  message: WorkerResultMessage | null;
  keystore: string | null;
  publicKey: string | null;
  account: Account | null;
  setMessage: (message: WorkerResultMessage) => void;
  setKeystore: (keystore: string | null) => void;
  setAccount: (account: Account, publicKey: Uint8Array) => void;
  clear: () => void;
};

const store = devtools<MainState>((set) => ({
  message: null,
  keystore: null,
  account: null,
  publicKey: null,
  setMessage: (message) => set((state) => ({ ...state, message })),
  setKeystore: (keystore) => set((state) => ({ ...state, keystore })),
  setAccount: (account, publicKey) =>
    set((state) => ({
      ...state,
      account,
      publicKey: Uint8ArrayToHex(publicKey),
    })),
  clear: () =>
    set({
      message: null,
      keystore: null,
      account: null,
      publicKey: null,
    }),
}));

const useMainStore =
  import.meta.env.VITE_PUBLIC_PERSIST_KEY === 'true'
    ? create<MainState>()(persist(store, { name: 'main' }))
    : create<MainState>()(store);

export const useMessage = () => useMainStore((state) => state.message);
export const useKeystore = () => useMainStore((state) => state.keystore);
export const useAccount = () => useMainStore((state) => state.account);
export const useAccountState = () =>
  useMainStore((state) => !!state.account && 'getPublicKey' in state.account);
export const usePublicKey = () => useMainStore((state) => state.publicKey);

export const useMainMutations = () =>
  useMainStore((state) => ({
    setAccount: state.setAccount,
    setKeystore: state.setKeystore,
    setMessage: state.setMessage,
    clear: state.clear,
  }));
