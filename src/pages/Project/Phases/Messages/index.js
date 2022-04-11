import Message from './Message';
import MessageInput from './MessageInput';
import 'styles/Messages.css';

export default function Messages({ messages = [], phase = '' }) {
  const randomId = Date.now().toString();

  return (
    <section className='messages'>
      {
        !messages.length &&
          <label className='no-messages'>No messages yet.</label>
      }

      {
        messages.map(message => 
          <Message messageData={message} key={message.id || randomId} />
        )
      }

      <MessageInput phase={phase} />
    </section>
  );
};
