import { useEffect, useRef } from 'react';
import { useLib9cMutations, useLib9cRaw } from 'store/lib9c';

export function useLib9c() {
  const once = useRef<boolean>(false);
  const module = useLib9cRaw();
  const { setModule } = useLib9cMutations();

  useEffect(() => {
    if (once.current) {
      return;
    }

    (async () => {
      if (!module) {
        const lib9c = await import('lib9c-wasm');

        console.log('Booting lib9c-wasm...');
        await lib9c.boot();

        setModule(lib9c);

        console.log('Loaded lib9c-wasm');
      }
    })();

    once.current = true;
  }, []);

  return module;
}
