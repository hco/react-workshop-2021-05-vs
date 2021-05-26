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
    <>
      <Counter />
      <MessageCompose />
      <MessageCompose />
      <MessageCompose />
      <MessageCompose />
      <MessageView message={message} />
    </>
  );
}

export const answer = 42;

export default App;
