import Flat from '@maxswjeon/flattype';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import Actions from '~/../actions.json';

type IndexableActionType = (typeof Actions)[keyof typeof Actions] & {
  [key: string]: string | object;
};

type ActionState = {
  data: Flat;
  action?: keyof typeof Actions;
  mutations: {
    setValue: (key: string, value: string | object) => void;
    appendValue: (key: string) => void;
    clear: () => void;
  };
};

const store = devtools<ActionState>((set) => ({
  data: Flat.from({}),
  mutations: {
    setAction: (action: keyof typeof Actions) => set({ action }),
    setValue: (key, value) =>
      set((state) => ({ data: state.data.set(key, value) })),
    appendValue: (key) =>
      set((state) => {
        if (!state.action) {
          return state;
        }

        const action: IndexableActionType = Actions[state.action];

        if (!(key in action)) {
          return state;
        }

        const param = action[key];
        const paramIsArray =
          (typeof param === 'string' && param.endsWith('[]')) ||
          (typeof param === 'object' && '__array' in param && param.__array);

        if (!paramIsArray) {
          return state;
        }

        return state;
      }),
    clear: () => set(() => ({ data: Flat.from({}) })),
  },
}));

const useActionStore = create<ActionState>()(store);
export const useActionMutations = () =>
  useActionStore((state) => state.mutations);
export const useActionState = (key: string) => {
  const { setValue } = useActionMutations();
  const state = useActionStore((state) => state.data);
  return [
    state.get(key) as string,
    (value: string) => setValue(key, value),
  ] as [string, (value: string) => void];
};
export const useActionFull = <T>() => {
  const state = useActionStore((state) => state.data);
  return state.getData() as T;
};
