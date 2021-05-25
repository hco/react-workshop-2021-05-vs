import React from "react";
import Message from "../domain/Message";

const MessageView: React.FunctionComponent<Message> = ({ message, author }) => {
  return (
    <article>
      {message}
      <footer>{author.toUpperCase()}</footer>
    </article>
  );
};

export default MessageView;
