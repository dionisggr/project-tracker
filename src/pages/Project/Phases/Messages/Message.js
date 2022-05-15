import { format as formatDate } from 'date-fns';
import 'styles/Message.css';

export default function Message({ messageData = {} }) {
  const { date = '', author = '', message = '' } = messageData;
  const className = ['message', author].join(' ').trim();
  
  const formattedDate = formatDate(new Date(date), 'MM/dd - hh:mmaaa');
  const capitalizedAuthor = author[0].toUpperCase() + author.slice(1);

  const isAdmin = author === 'admin';

  return (
    <div className={className}>
      <label className='author'>{capitalizedAuthor}</label>
      <div className='content'>
        <span className='text'>{message}</span>
        <label className={`date-time ${author}`}>{formattedDate}</label>
      </div>
    </div>
  );
};
