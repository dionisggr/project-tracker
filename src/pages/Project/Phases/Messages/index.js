import Message from './Message';
import MessageInput from './MessageInput';
import 'styles/Messages.css';

export default function Messages({ messages = [], phase = '' }) {
  return (
    <section className='messages'>
      {
        !messages.length &&
          <label className='no-messages'>No messages yet.</label>
      }

      {
        messages.map(message => {
          const key = message.id || Math.floor(Math.random() * 100);
          
          return<Message messageData={message} key={key} />
        })
      }

      <MessageInput phase={phase} />
    </section>
  );
};
