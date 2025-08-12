const sendMessage = (
  recipient: string,
  messageData?: {
    messageType?: string;
    authors?: {
      [key: string]: string;
    };
    content?: string;
  }
) => {
  // Function logic...
};

type SendMessageParameters = typeof sendMessage extends (...params: infer P) => any ? P : never;
