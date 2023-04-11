import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type WorkerState = {
  worker: Worker | null;
  mutations: {
    setWorker: (worker: Worker) => void;
  };
};

const store = devtools<WorkerState>((set) => ({
  worker: null,
  mutations: {
    setWorker: (worker) => set((state) => ({ ...state, worker })),
  },
}));

const useWorkerStore = create<WorkerState>()(store);

export const useWorker = () => useWorkerStore((state) => state.worker);
export const useWorkerMutations = () =>
  useWorkerStore((state) => state.mutations);
