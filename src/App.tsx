import { useEffect } from 'react';
import { Page, getLayout } from './layouts/DefaultLayout';
import { AuthenticatePage, ErrorPage, MainPage, UnlockPage } from './pages';
import { useAccount, useAccountState, useMainMutations } from './store/main';
import { useWorker, useWorkerMutations } from './store/worker';
import { WorkerResultMessage } from './types/message';

import './styles/index.css';
import Worker from './worker?worker';

function createWorker(
  worker: Worker | null,
  setWorker: (worker: Worker) => void,
  setMessage: (message: WorkerResultMessage) => void
) {
  if (!worker && window.Worker) {
    const _worker = new Worker();

    _worker.onmessage = async (e: MessageEvent<WorkerResultMessage>) => {
      setMessage(e.data);
    };

    setWorker(_worker);
  }
}

function App() {
  const worker = useWorker();
  const account = useAccount();
  const authenticated = useAccountState();

  const { setMessage } = useMainMutations();
  const { setWorker } = useWorkerMutations();

  useEffect(
    () => createWorker(worker, setWorker, setMessage),
    [worker, setWorker, setMessage]
  );

  let Page: Page = () => <></>;
  if (!window.Worker) {
    Page = ErrorPage;
  } else if (!authenticated) {
    Page = account ? UnlockPage : AuthenticatePage;
  } else {
    Page = MainPage;
  }

  const Layout = getLayout(Page);

  return (
    <Layout>
      <Page />
    </Layout>
  );
}

export default App;
