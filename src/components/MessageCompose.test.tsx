import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MessageCompose from "./MessageCompose";

describe("<MessageCompose />", () => {
  test("it renders without crashing", () => {
    render(<MessageCompose onNewMessage={() => {}} />);
  });

  test("when typing a message, it should be in the input field", () => {
    // Arrange
    const { getByPlaceholderText } = render(
      <MessageCompose onNewMessage={() => {}} />
    );
    const input = getByPlaceholderText("Neue Nachricht...");

    // Act
    userEvent.type(input, "Hallo Janek!");

    // Assert
    expect(input).toHaveValue("Hallo Janek!");
  });
});
