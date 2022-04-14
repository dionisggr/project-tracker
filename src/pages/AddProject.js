import { Navigate } from 'react-router-dom';
import ProjectInfo from './Project/ProjectInfo';

export default function AddProject() {
  const host = window.location.hostname;

  if (host !== 'localhost') return <Navigate to='/404' />

  return (
    <article className='add-project'>
      <ProjectInfo project={{}} />
    </article>
  );
};
