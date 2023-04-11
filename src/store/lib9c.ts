import { Lib9cType } from 'types/lib9c';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Lib9cState = {
  module: Lib9cType | null;
  mutations: {
    setModule: (module: Lib9cType) => void;
  };
};

const store = devtools<Lib9cState>((set) => ({
  module: null,
  mutations: {
    setModule: (module) => set((state) => ({ ...state, module })),
  },
}));

const useLib9cStore = create<Lib9cState>()(store);

export const useLib9cRaw = () => useLib9cStore((state) => state.module);
export const useLib9cMutations = () =>
  useLib9cStore((state) => state.mutations);
