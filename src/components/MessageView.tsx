import React from "react"
import Message from "../domain/Message"

interface Props {
  message: Message
}

const MessageView: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <article>
      {message.message}
      <footer>{message.author.toLowerCase()}</footer>
    </article>
  )
}

export default MessageView
