import Phase from './Phase';
import ProgressBar from './ProgressBar';
import 'styles/Phases.css';

export default function Phases({ currentPhase }) {
  const phases = [
    {
      name: 'Planning',
      tasks: [
        'Gathering of user stories from client for project or features of interest',
        'Documentation of all requests, notes and UX potential edge cases considered',
      ],
    },
    {
      name: 'Invoicing',
      tasks: [
        'Design and Development teams consult for time estimation',
      ],
    },
    {
      name: 'Design',
      tasks: [
        'Design mock-up / prototype'
      ],
    },
    {
      name: 'Development',
      tasks: [
        'Working the magic'
      ],
    },
    {
      name: 'QA / Testing',
      tasks: [
        '"Bug Bash"',
        'Confirmation of matching functionality with UX expectations and defined user stories',
        'Iterative navigation to identify potential errors in edge cases'
      ],
    },
    {
      name: 'Release / Monitoring',
      tasks: [
        '2 weeks duration',
        'Client-based bug identification process'
      ],
    },
    {
      name: 'Complete',
      tasks: [
        'All steps completed successfully'
      ],
    },
  ];
  const currentPhaseIndex = phases.map(({ name }) => name).indexOf(currentPhase);
  const progress = `${currentPhaseIndex}/${phases.length}`;

  return (
    <section className='phases'>
      <label className='progress-title'>Progress:</label>
      
      <ProgressBar progress={progress} />
      
      {
        phases.map(({ name, tasks }, idx) => {
          const isCompleted = idx < currentPhaseIndex;

          return (
            <Phase
              key={name}
              phase={name}
              currentPhase={currentPhase}
              tasks={tasks}
              isCompleted={isCompleted}
            />
          );
        })
      }
    </section>
  );
};
