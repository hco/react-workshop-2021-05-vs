import React, { ChangeEventHandler, useState } from "react";
import Counter from "./Counter";

//const handleSubmit = handleSubmitFunction;
const MessageCompose: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Hallo Team Grün!");
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputValue}
      <Counter />
      <input type="text" onChange={handleChange} />
      <input type="submit" value="Klick mich" />
    </form>
  );
};

export default MessageCompose;
