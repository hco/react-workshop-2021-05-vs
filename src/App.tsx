import { useState } from "react";
import Counter from "./components/Counter";
import MessageCompose from "./components/MessageCompose";
import MessageList from "./components/MessageList";
import Toggle from "./components/Toggle";
import Message from "./domain/Message";

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleNewMessage = (text: string) => {
    setMessages([
      ...messages,
      {
        author: "Luise",
        id: Date.now().toString(),
        date: Date.now(),
        message: text,
      },
    ]);
  };

  return (
    <div style={{ border: "1px solid pink" }}>
      <div style={{ border: "1px solid green" }}>
        <Counter />
        <Counter />
      </div>
      <MessageList messages={messages} />
      <MessageCompose onNewMessage={handleNewMessage} />
      <Toggle />
    </div>
  );
}

export const answer = 42;

export default App;
