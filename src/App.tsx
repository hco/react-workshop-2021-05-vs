import MessageView from "./components/MessageView";

export function App() {
  return (
    <MessageView
      message="React ist cool"
      author="Team Grün"
      id={answer.toString()}
      date={Date.now()}
    />
  );
}

export const answer = 42;

export default App;
