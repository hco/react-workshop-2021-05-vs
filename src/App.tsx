import MessageView from "./components/MessageView";
import Message from "./domain/Message";

export function App() {
  const message: Message = {
    author: "Team Grün",
    message: "Hallo",
    id: "huasdadsoj",
    date: Date.now(),
  };

  return <MessageView message={message} />;
}

export const answer = 42;

export default App;
