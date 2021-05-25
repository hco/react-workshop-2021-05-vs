interface Props {
  opinion: string;
  name: string;
}

const MessageView = ({ opinion, name }: Props): JSX.Element => {
  return (
    <article>
      {opinion}
      <footer>{name}</footer>
    </article>
  );
};

export default MessageView;
