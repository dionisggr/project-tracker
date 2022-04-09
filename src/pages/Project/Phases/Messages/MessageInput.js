import { useState } from 'react';
import { useContext } from 'react';
import { MessageContext } from 'context';
import 'styles/MessageInput.css';

export default function MessageInput() {
  const [inputValue, setInputValue] = useState('');
  const { addMessage } = useContext(MessageContext);

  function handleInput(evt) {
    setInputValue(evt.target.value);
  };

  function sendMessage(evt) {
    evt.preventDefault();

    const id = Date.now().toString();
    const date = new Date().toString().split(' ').slice(0, 4).join(' ');
    const message = evt.target.message.value;
    const author = 'admin';
    const phase = 'Planning';
    const messageData = { id, date, message, author, phase };

    addMessage(messageData);
  };

  return (
    <form className='message-input' onSubmit={sendMessage}>
      icon
      <input type='text' name='message' value={inputValue} onChange={handleInput} />
      <button type='submit'>Send</button>
    </form>
  );
};
