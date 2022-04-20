import { useState, useContext } from 'react';
import { Message } from '@material-ui/icons';
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

    const authToken = window.localStorage.getItem('projectTrackerAuthToken');
    const isLocalHost = window.location.hostname === 'localhost';
    const allowedUsers = ['lili', 'doug', 'dio'];

    const isAdmin = isLocalHost || allowedUsers.includes(authToken);

    if (!phase) return;

    const date = new Date();
    const message = evt.target.message.value;
    const author = isAdmin ? 'admin' : 'client';
    const messageData = { date, message, author, phase };

    await addMessage(messageData);

    setInputValue('');
  };

  return (
    <form className='message-input' onSubmit={sendMessage}>
      <div className='input-container'>
        <span className='icon'>{<Message />}</span>
        <input type='text' name='message' value={inputValue} onChange={handleInput} />
      </div>
      <button type='submit' className='button'>Send</button>
    </form>
  );
};
