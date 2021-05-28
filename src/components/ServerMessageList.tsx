import Message from "../domain/Message";
import MessageList from "./MessageList";

const ServerMessageList = () => {
  // Server-URL:
  fetch("http://localhost:4712/messages")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

  const serverMessages: Message[] = [];
  return <MessageList messages={serverMessages} />;
};

export default ServerMessageList;
