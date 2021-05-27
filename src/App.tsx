import Counter from "./components/Counter";
import MessageCompose from "./components/MessageCompose";
import MessageView from "./components/MessageView";
import Message from "./domain/Message";

export function App() {
  const message: Message = {
    author: "Team Grün",
    message: "Hallo",
    id: "huasdadsoj",
    date: Date.now(),
  };

  return (
    <div style={{ border: "1px solid pink" }}>
      <div style={{ border: "1px solid green" }}>
        <Counter />
        <Counter />
      </div>
      <MessageCompose />
      <MessageView message={message} />
    </div>
  );
}

export const answer = 42;

export default App;
