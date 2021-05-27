import { useState } from "react";
import Counter from "./components/Counter";
import MessageCompose from "./components/MessageCompose";
import MessageList from "./components/MessageList";
import MessageView from "./components/MessageView";
import Toggle from "./components/Toggle";
import Message from "./domain/Message";

export function App() {
  const message: Message = {
    author: "Team Grün",
    message: "Hallo",
    id: "huasdadsoj",
    date: Date.now(),
  };

  const [messages, setMessages] = useState([
    { id: "1", author: "Hannah", message: "Hello World", date: Date.now() },
    { id: "2", author: "Rene", message: "Hallo Team Grün", date: Date.now() },
    { id: "3", author: "Erdal", message: "Hallo Team Pink", date: Date.now() },
    { id: "4", author: "Laura", message: "Hallo Bochum", date: Date.now() },
  ]);

  const handleNewMessage = (text: string) => {
    console.log(text);
  };

  return (
    <div style={{ border: "1px solid pink" }}>
      <div style={{ border: "1px solid green" }}>
        <Counter />
        <Counter />
      </div>
      <MessageList messages={messages} />
      <MessageCompose onNewMessage={handleNewMessage} />
      <MessageView message={message} />
      <Toggle />
    </div>
  );
}

export const answer = 42;

export default App;
