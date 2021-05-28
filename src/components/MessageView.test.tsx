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

  test("it renders the message text", () => {
    const { queryByText } = render(<MessageView message={testMessage} />);
    expect(queryByText("Bald ist Wochenende!")).not.toBeNull();
  });

  test("it renders the author name in upper case", () => {
    const { queryByText } = render(<MessageView message={testMessage} />);
    expect(queryByText("hannah")).not.toBeNull();
  });

  test("it renders according to snapshot", () => {
    const { container } = render(<MessageView message={testMessage} />);

    expect(container).toMatchSnapshot();
  });
});
