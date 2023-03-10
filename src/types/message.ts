type ErrorMessage<T> = {
  key: T;
  data: Record<string, never>;
};

export type WorkerMessage = {
  key: 'KEY_FILE_READ';
  data: {
    file: File;
  };
};

export type WorkerResultMessage =
  | {
      key: 'KEY_FILE_READ';
      data: {
        content: string;
      };
    }
  | ErrorMessage<'ERROR_KEY_FILE_READ'>;

export type WorkerHandler = (message: WorkerMessage) => void;
export type WorkerResultHandler = (
  message: WorkerResultMessage
) => Promise<(() => void) | undefined>;
