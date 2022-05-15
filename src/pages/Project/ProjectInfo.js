import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format as formatDate } from 'date-fns';
import ApiService from 'services/api-service';
import Label from 'common/Label';
import TextInput from 'common/TextInput';
import Select from 'common/Select';
import Modal from 'common/Modal';
import utils from 'services/utils';
import 'styles/ProjectInfo.css';

export default function ProjectInfo(props) {
  const navigate = useNavigate();
  
  const [isEditing, setEditStatus] = useState(false);
  const [error, setError] = useState('');

  const { project = {}, setProject = () => { } } = props;
  const {
    name = '',
    client = '',
    contact = '',
    emailOrPhone = '',
    phase = 'Planning',
    dateRequested = new Date(),
  } = project;
  const isDemo = project.id === 'demo';

  const [currentPhase, setPhase] = useState(phase);

  let labelFormattedDateRequested;
  let inputFormattedDateRequested;

  if (new Date(dateRequested).getTime()) {
    const date = new Date(dateRequested);

    labelFormattedDateRequested = formatDate(date, 'M/d/yyyy');
    inputFormattedDateRequested = formatDate(date, 'yyyy-MM-dd');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const { id } = project;
    const body = { project };

    let path = '/projects';
    let newId;

    Object.assign(project, { phase: currentPhase || 'Planning' });

    if (!project.dateRequested) {
      Object.assign(project, { dateRequested: new Date() });
    };

    const isMissingRequiredValues = Object.values(project).length < 6;

    if (isMissingRequiredValues) {
      setError('Please make sure to fill out all fields.');

      return;
    }

    try {
      if (id) {
        if (!isDemo) {
          path += `/${id}`;

          await ApiService.patchRequest(path, body);
        }

        setProject(project);
      } else {
        if (isDemo) {
          newId = Date.now().toString();
        } else {
          newId = await ApiService.postRequest(path, body);
        }
  
        if (newId) {
          Object.assign(project, { id: newId });
  
          setProject(project);
  
          navigate('/projects/' + newId);
        }
      }
    } catch (error) {
      console.log({ error });
    }

    setEditStatus(false);
  };

  function editProject(evt) {
    const fields = [
      'client',
      'name',
      'date-requested',
      'phase',
      'contact',
      'email-or-phone'
    ];
    let { name, value } = evt.target;

    if (fields.includes(name)) {
      const camelCasedName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

      setProject({ ...project, [camelCasedName]: value });
    }
  };

  useEffect(() => {
    setProject(project);
    setPhase(project.phase);

    return () => { };
  }, [project, setProject]);

  if (error) {
    return (
      <Modal
        className='error'
        title='ERROR!'
        message={error}
        show={error}
        options={{ 'BACK': () => setError('')}}
      />
    );
  };

  if (project.id && !isEditing) return (
    <section className='project-info'>
      <Label value={client}>Client</Label>
      <Label value={labelFormattedDateRequested}>
        Date Requested
      </Label>
      <Label value={currentPhase}>Status</Label>
      <Label value={contact}>Contact</Label>
      <Label value={emailOrPhone}>Email/Phone</Label>

      {
        utils.isAdmin &&
          <button type='button' className='edit button' onClick={() => setEditStatus(true)}>
            Edit
          </button>
      }
    </section>
  );

  if (!project.id || isEditing) return (
    <section className='project-info editing'>
      <TextInput name='client' label='Client' onChange={editProject} required >
        {client}
      </TextInput>
      <TextInput name='name' label='Project' onChange={editProject} required >
        {name}
      </TextInput>
      <TextInput
        type='date'
        name='date-requested'
        label='Date Requested'
        onChange={editProject}
        required 
      >
        {inputFormattedDateRequested}
      </TextInput>
      <Select
        label='Status:'
        name='status'
        value={currentPhase}
        onChange={({ target }) => setPhase(target.value)}
      >
        <option value='Planning'>Planning</option>
        <option value='Invoicing'>Invoicing</option>
        <option value='Design'>Design</option>
        <option value='Development'>Development</option>
        <option value='QA / Testing'>QA / Testing</option>
        <option value='Release / Monitoring'>Release / Monitoring</option>
        <option value='Complete'>Complete</option>
      </Select>
      <TextInput name='contact' label='Contact' onChange={editProject} required >
        {contact}
      </TextInput>
      <TextInput name='email-or-phone' label='Email/Phone' onChange={editProject} required >
        {emailOrPhone}
      </TextInput>

      <button type='button' className='cancel button' onClick={() => setEditStatus(false)} required >
        Cancel
      </button>
      <button type='button' className='submit button' onClick={handleSubmit} required >
        Submit
      </button>
    </section>
  );
};
