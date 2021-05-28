import React, { ChangeEventHandler, useState } from "react";
import Counter from "./Counter";

//const handleSubmit = handleSubmitFunction;
interface Props {
  onNewMessage: (text: string) => void;
}

const MessageCompose: React.FunctionComponent<Props> = ({ onNewMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Hallo Team Grün!");
    onNewMessage(inputValue);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputValue}
      <Counter />
      <input
        placeholder="Neue Nachricht..."
        type="text"
        onChange={handleChange}
      />
      <input type="submit" value="Klick mich" />
    </form>
  );
};

export default MessageCompose;
