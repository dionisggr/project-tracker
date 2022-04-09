import { useState, useContext, useEffect } from 'react';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import Messages from './Messages';
import { MessageContext } from 'context';
import 'styles/Phase.css';

export default function Phase({ phase, currentPhase, isCompleted }) {
  const isCurrentPhase = phase === currentPhase;

  const [shouldOpen, setOpenStatus] = useState(isCurrentPhase);
  const { messages = [] } = useContext(MessageContext);

  const phaseName = phase[0].toUpperCase() + phase.slice(1);
  const filteredMessages = messages.filter(message => message.phase === phase);

  let className = 'phase';

  if (shouldOpen) {
    className += ' open';
  }

  if (isCompleted) {
    className += ' completed';
  }

  const Icon = (shouldOpen) ? ExpandLess : ExpandMore;

  useEffect(() => {
    setOpenStatus(phase === currentPhase);
  }, [phase, currentPhase]);

  return (
    <div className={className}>
      <label>{phaseName}</label>
      
      <Icon
        className='expand-icon'
        onClick={() => setOpenStatus(!shouldOpen)}
      />

      {shouldOpen && <Messages messages={filteredMessages} />}
    </div>
  );
};
