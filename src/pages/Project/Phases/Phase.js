import { useState, useContext, useEffect } from 'react';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { MessageContext } from 'context';
import Label from 'common/Label';
import Messages from './Messages';
import 'styles/Phase.css';

export default function Phase({ phase, currentPhase, isCompleted }) {
  const isCurrentPhase = phase === currentPhase;

  const [shouldOpen, setOpenStatus] = useState(isCurrentPhase);
  const { messages = [] } = useContext(MessageContext);

  const phaseName = phase[0].toUpperCase() + phase.slice(1);
  const filteredMessages = messages.filter(message => message.phase === phase);
  const goal = '';
  const dateStarted = '';

  let className = 'phase';

  if (shouldOpen) {
    className += ' open';
  }

  if (isCompleted) {
    className += ' completed';
  }

  const Icon = (shouldOpen) ? ExpandLess : ExpandMore;

  function togglePhase(evt) {
    const classList = [...evt.target.classList];
    const reactiveClasses = ['phase', 'phase-name', 'expand-icon'];

    const shouldToggle = reactiveClasses.some(val => classList.includes(val));
    
    if (!shouldToggle) return;

    setOpenStatus(!shouldOpen);
  };

  useEffect(() => {
    setOpenStatus(phase === currentPhase);
  }, [phase, currentPhase]);

  return (
    <div className={className} onClick={togglePhase}>
      <label className='phase-name'>
        {phaseName}
      </label>
      
      <Icon className='expand-icon' onClick={() => setOpenStatus(!shouldOpen)} />

      {
        (shouldOpen) &&
          <div className='phase-details'>
            <Label className='phase-goal' value={goal}>
              Goal
            </Label>
            <Label className='phase-date-started' value={dateStarted}>
              Date Started
            </Label>

            <Messages messages={filteredMessages} phase={phase} />
          </div>
      }
    </div>
  );
};
