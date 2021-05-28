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

  test("when clicking the submit button, the event handler should be called", () => {
    const handleNewMessage = jest.fn();

    // Arrange
    const { getByPlaceholderText, getByText } = render(
      <MessageCompose onNewMessage={handleNewMessage} />
    );
    const input = getByPlaceholderText("Neue Nachricht...");
    const button = getByText("Nachricht absenden");

    // Act
    userEvent.type(input, "Hallo Janek!");
    userEvent.click(button);

    // Assert
    expect(handleNewMessage).toHaveBeenCalled();
    expect(handleNewMessage).toHaveBeenCalledWith("Hallo Janek!");
    expect(handleNewMessage).toHaveBeenCalledTimes(1);
  });

  test("when hitting enter, the event handler should be called", () => {
    const handleNewMessage = jest.fn();

    // Arrange
    const { getByPlaceholderText } = render(
      <MessageCompose onNewMessage={handleNewMessage} />
    );
    const input = getByPlaceholderText("Neue Nachricht...");

    // Act
    userEvent.type(input, "Hallo Janek!{enter}");

    // Assert
    expect(handleNewMessage).toHaveBeenCalled();
    expect(handleNewMessage).toHaveBeenCalledWith("Hallo Janek!");
    expect(handleNewMessage).toHaveBeenCalledTimes(1);
  });
});
