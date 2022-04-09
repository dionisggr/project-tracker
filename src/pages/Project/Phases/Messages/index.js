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
        messages.map(message => 
          <Message messageData={message} key={message.id} />
        )
      }

      <MessageInput phase={phase} />
    </section>
  );
};
