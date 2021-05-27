import Message from "../domain/Message";
import MessageView from "./MessageView";

interface Props {
  messages: Message[];
}

const MessageList: React.FunctionComponent<Props> = ({ messages }) => {
  return (
    <>
      {messages.map((message) => (
        <MessageView key={message.id} message={message} />
      ))}
    </>
  );
};

export default MessageList;
