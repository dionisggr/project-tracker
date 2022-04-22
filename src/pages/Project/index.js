import { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { MessageContext } from 'context';
import ApiService from 'services/api-service';
import ProjectInfo from './ProjectInfo';
import Phases from './Phases';
import Spinner from 'common/Spinner';
import 'styles/Project.css';

import mocks from 'mocks';

export default function Project() {
  const navigate = useNavigate();

  const { projectId } = useParams();
  
  const [project, setProject] = useState({});
  const { messages = [] } = project;

  async function addMessage(message) {
    try {
      if (projectId !== 'demo') {
        Object.assign(message, { projectId });

        const id = await ApiService.postRequest('/messages', { message });
  
        if (!id) return;
  
        Object.assign(message, { id });
      }

      messages.push(message);

      const newProjectState = { ...project, messages };

      setProject(newProjectState);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    async function getProject() {
      try {
        let projectData;

        if (projectId === 'demo') {
          projectData = mocks.project;
        } else if (projectId) {
          projectData = await ApiService.getRequest(`/projects/${projectId}`);
        }

        if (!projectData) return <Navigate to='/404' />;

        setProject({ ...projectData });
      } catch (error) {
        console.log({ error });
      }
    };

    getProject();
  }, [projectId, navigate]);

  if (!Object.keys(project).length) {
    return <Spinner />;
  }

  return (
    <article className='project'>
      <ProjectInfo project={project} setProject={setProject} />

      <MessageContext.Provider value={{ addMessage, messages }}>
        <Phases currentPhase={project.phase} />
      </MessageContext.Provider>
    </article>
  );
};
