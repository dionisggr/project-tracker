import { useState } from 'react';
import { useContext } from 'react';
import { MessageContext } from 'context';
import 'styles/MessageInput.css';

export default function MessageInput({ phase }) {
  const [inputValue, setInputValue] = useState('');
  const { addMessage } = useContext(MessageContext);

  function handleInput(evt) {
    setInputValue(evt.target.value);
  };

  async function sendMessage(evt) {
    evt.preventDefault();

    if (!phase) return;

    const date = new Date();
    const message = evt.target.message.value;
    const author = 'admin';
    const messageData = { date, message, author, phase };

    await addMessage(messageData);

    setInputValue('');
  };

  return (
    <form className='message-input' onSubmit={sendMessage}>
      <span>icon</span>
      <input type='text' name='message' value={inputValue} onChange={handleInput} />
      <button type='submit'>Send</button>
    </form>
  );
};
