import { useState, useContext, useEffect } from 'react';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { MessageContext } from 'context';
import Messages from './Messages';
import 'styles/Phase.css';

export default function Phase(props) {
  const { phase, currentPhase, isCompleted, tasks = [] } = props;

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
            <label className='phase-details-label' htmlFor='phase-tasks'>Steps:</label>
            <ul className='phase-tasks' >
              {tasks.map(task => <li key={task}>{task}</li>)}
            </ul>

            <Messages messages={filteredMessages} phase={phase} />
          </div>
      }
    </div>
  );
};
