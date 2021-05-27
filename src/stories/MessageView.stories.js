import Counter from "../components/Counter";
import MessageView from "../components/MessageView";

export const ExampleStory = () => (
  <MessageView
    message={{
      id: "1",
      author: "Hannah",
      message: "Hello World",
      date: Date.now(),
    }}
  />
);

export const LongMessage = () => (
  <MessageView
    message={{
      id: "1",
      author: "Hannah",
      message: "Hello World".repeat(1000),
      date: Date.now(),
    }}
  />
);

export default {
  title: "MessageView",
  component: MessageView,
};
