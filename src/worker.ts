/* eslint-disable @typescript-eslint/no-var-requires */
import type {
  WorkerHandler,
  WorkerMessage,
  WorkerResultMessage,
} from './types/message';

const KEY_FILE_READ: WorkerHandler = async (message) => {
  if (message.key !== 'KEY_FILE_READ') {
    return;
  }

  const reader = new FileReader();
  reader.readAsArrayBuffer(message.data.file);

  let data: WorkerResultMessage;
  try {
    const content = await message.data.file.text();
    data = {
      key: 'KEY_FILE_READ',
      data: { content },
    };
  } catch (e) {
    data = {
      key: 'ERROR_KEY_FILE_READ',
      data: {},
    };
  }

  self.postMessage(data);
};

const WorkerHandler: Record<WorkerMessage['key'], WorkerHandler> = {
  KEY_FILE_READ,
};

self.onmessage = (e: MessageEvent<WorkerMessage>) => {
  WorkerHandler[e.data.key](e.data);
};
