import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { format as formatDate } from 'date-fns';
import Label from 'common/Label';
import Spinner from 'common/Spinner';
import ApiService from 'services/api-service';
import 'styles/Projects.css';

export default function Projects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchAllProjects() {
      try {
        const projectList = await ApiService.getRequest('/projects');

        projectList.sort((project1, project2) => {
          const date1 = new Date(project1.dateRequested);
          const date2 = new Date(project2.dateRequested);

          return date1 < date2 ? -1 : 1;
        });

        setProjects(projectList);
      } catch (error) {
        console.log({ error });

        navigate('/404');
      }
    };

    fetchAllProjects();
  }, [navigate]);

  if (!projects.length) {
    return <Spinner />
  }

  return (
    <article className='projects page'>
      <h3>All Projects</h3>
      <ul className='project-list'>
        {
          projects.map(project => {
            const formattedDate = formatDate(new Date(project.dateRequested), 'MM/dd/yyyy');

            return (
              <Link to={`/projects/${project.id}`} className='project-summary' key={project.id}>
                <Label value={project.client}>Client</Label>
                <Label value={project.name}>Project</Label>
                <Label value={project.phase}>Phase</Label>
                <Label value={formattedDate}>Date Started</Label>
              </Link>
            )
          })
        }
      </ul>
    </article>
  );
};
