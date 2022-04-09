import Message from './Message';
import MessageInput from './MessageInput';
import 'styles/Messages.css';

export default function Messages({ messages = [] }) {
  if (!messages.length) return null;

  return (
    <section className='messages'>
      {
        messages.map(message => 
          <Message messageData={message} key={message.id} />
        )
      }

      <MessageInput />
    </section>
  );
};
