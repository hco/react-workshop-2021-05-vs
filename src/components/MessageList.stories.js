import Counter from "../components/Counter";
import MessageList from "../components/MessageList";

export const ListWithOneMessage = () => (
  <MessageList
    messages={[
      {
        id: "1",
        author: "Hannah",
        message: "Hello World",
        date: Date.now(),
      },
    ]}
  />
);

export default {
  title: "Messages / View",
  component: MessageList,
};
