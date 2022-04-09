import 'styles/Message.css';

export default function Message({ messageData = {} }) {
  const { date = '', author = '', message = '' } = messageData;
  const className = 'message ' + author;

  return (
    <div className={className}>
      <label>{date}</label>
      <label>{author}</label>
      <label>{message}</label>
    </div>
  );
};
