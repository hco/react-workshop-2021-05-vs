//const handleSubmit = handleSubmitFunction;
const MessageCompose: React.FunctionComponent = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Hallo Team Grün!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <input type="submit" value="Klick mich" />
    </form>
  );
};

export default MessageCompose;
