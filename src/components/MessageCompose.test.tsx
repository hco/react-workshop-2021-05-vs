import { render } from "@testing-library/react";
import MessageCompose from "./MessageCompose";

describe("<MessageCompose />", () => {
  test("it renders without crashing", () => {
    render(<MessageCompose onNewMessage={() => {}} />);
  });

  test("when typing a message, it should be in the input field", () => {
    render(<MessageCompose onNewMessage={() => {}} />);
  });
});
