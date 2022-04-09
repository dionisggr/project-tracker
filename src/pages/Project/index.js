import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import Phases from './Phases';
import { MessageContext } from 'context';
import 'styles/Project.css';

import mocks from 'mocks';

export default function Project() {
  const { projectId } = useParams();
  
  const [project, setProject] = useState({});
  const { messages } = project;

  function addMessage(message) {
    messages.push(message);

    const updateProjectState = { ...project, messages };

    setProject(updateProjectState);
  };

  useEffect(() => {
    function getProject() {
      const project = mocks.projects.filter(project => {
        return project.id.toString() === projectId;
      })[0];

      setProject(project);
    };

    getProject();
  }, [projectId]);

  return (
    <article className='project'>
      <ProjectInfo project={project} />

      <MessageContext.Provider value={{ addMessage, messages }}>
        <Phases currentPhase={project.status} />
      </MessageContext.Provider>
    </article>
  );
};
