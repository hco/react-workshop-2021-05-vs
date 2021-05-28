import { render } from "@testing-library/react";
import Message from "../domain/Message";
import MessageView from "./MessageView";

const testMessage: Message = {
  author: "Hannah",
  date: 1622185877229,
  id: "huodfasiojadsjiodas",
  message: "Bald ist Wochenende!",
};
describe("<MessageView />", () => {
  test("it renders without crashing", () => {
    render(<MessageView message={testMessage} />);
  });
});
