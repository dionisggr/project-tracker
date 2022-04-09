import Phase from './Phase';
import ProgressBar from './ProgressBar';
import 'styles/Phases.css';

export default function Phases({ currentPhase }) {
  const phases = [
    'Planning',
    'Invoicing',
    'Design',
    'Development',
    'QA / Testing',
    'Release / Monitoring',
    'Complete',
  ];
  const currentPhaseIndex = phases.indexOf(currentPhase);
  const progressPercentage = (currentPhaseIndex + 1) / phases.length * 100;

  <ProgressBar percent={progressPercentage} />

  return (
    <section className='phases'>
      {
        phases.map(phase => {
          const isCompleted = phases.indexOf(phase) < currentPhaseIndex;

          return (
            <Phase
              key={phase}
              phase={phase}
              currentPhase={currentPhase}
              isCompleted={isCompleted}
            />
          );
        })
      }
    </section>
  );
};
