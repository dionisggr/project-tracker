import { Navigate } from 'react-router-dom';
import ProjectInfo from './Project/ProjectInfo';
import 'styles/AddProject.css';

export default function AddProject() {
  const host = window.location.hostname;

  if (host !== 'localhost') return <Navigate to='/404' />

  return (
    <article className='add-project'>
      <h3>Add a Project</h3>
      <label className='you-are-awesome'>...you awesome individual</label>
      <ProjectInfo project={{}} />
    </article>
  );
};
