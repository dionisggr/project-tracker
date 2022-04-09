import { format as formatDate } from 'date-fns';
import 'styles/Message.css';

export default function Message({ messageData = {} }) {
  const { date = '', author = '', message = '' } = messageData;
  const className = 'message ' + author;
  const formattedDate = formatDate(date, 'MM/dd/yyyy hh:mmaaa');

  return (
    <div className={className}>
      <div className='message-header'>
        <label>{formattedDate}</label>
        <label>{author}</label>
      </div>
      <span className='message-content'>{message}</span>
    </div>
  );
};
