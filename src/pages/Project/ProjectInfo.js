import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format as formatDate } from 'date-fns';
import ApiService from 'services/api-service';
import Label from 'common/Label';
import TextInput from 'common/TextInput';
import Select from 'common/Select';
import 'styles/ProjectInfo.css';

export default function ProjectInfo({ project = {} }) {
  const navigate = useNavigate();
  const [isEditing, setEditStatus] = useState(false);
  const [projectData, setProjectData] = useState(project);
  const {
    name = '',
    client = '',
    contact = '',
    emailOrPhone = '',
    phase = 'Planning',
    dateRequested = new Date(),
  } = projectData;

  let labelFormattedDateRequested;
  let inputFormattedDateRequested;

  if (new Date(dateRequested).getTime()) {
    const date = new Date(dateRequested);

    labelFormattedDateRequested = formatDate(date, 'M/d/yyyy');
    inputFormattedDateRequested = formatDate(date, 'yyyy-MM-dd');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const isMissingValues = Object.values(projectData).length < 6;

    if (isMissingValues) return;

    const { id } = projectData;
    const body = { projectData };

    let path = '/projects';
    let wasUpdated;
    let newId;

    if (id) {
      path += `/${id}`;

      if (project.id !== 'demo') {
        wasUpdated = await ApiService.patchRequest(path, body);
      } else {
        wasUpdated = true;
      }

      if (!wasUpdated) {
        setProjectData(project);
      }
    } else {
      if (project.id !== 'demo') {
        newId = await ApiService.postRequest(path, body);
      } else {
        newId = Date.now().toString();
      }

      if (newId) {
        Object.assign(projectData, { id: newId });

        setProjectData(projectData);

        navigate('/projects/' + newId);
      }
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

      setProjectData({ ...projectData, [camelCasedName]: value });
    }
  };

  useEffect(() => { setProjectData(project) }, [project]);

  if (project.id && !isEditing) return (
    <section className='project-info'>
      <Label value={client}>Client</Label>
      <Label value={name}>Project</Label>
      <Label value={labelFormattedDateRequested}>
        Date Requested
      </Label>
      <Label value={phase}>Status</Label>
      <Label value={contact}>Contact</Label>
      <Label value={emailOrPhone}>Email/Phone</Label>

      <button type='button' className='edit button' onClick={() => setEditStatus(true)}>
        Edit
      </button>
    </section>
  );

  if (!project.id || isEditing) return (
    <section className='project-info editing'>
      <TextInput name='client' label='Client' onChange={editProject}>
        {client}
      </TextInput>
      <TextInput name='name' label='Project' onChange={editProject}>
        {name}
      </TextInput>
      <TextInput
        type='date'
        name='date-requested'
        label='Date Requested'
        onChange={editProject}
      >
        {inputFormattedDateRequested}
      </TextInput>
      <Select label='Status:' name='status'>
        <option value='planning'>Planning</option>
        <option value='invoicing'>Invoicing</option>
        <option value='design'>Design</option>
        <option value='development'>Development</option>
        <option value='qa'>QA / Testing</option>
        <option value='release'>Release / Monitoring</option>
        <option value='complete'>Complete</option>
      </Select>
      <TextInput name='contact' label='Contact' onChange={editProject}>
        {contact}
      </TextInput>
      <TextInput name='email-or-phone' label='Email/Phone' onChange={editProject}>
        {emailOrPhone}
      </TextInput>

      <button type='button' className='submit button' onClick={handleSubmit}>
        Submit
      </button>
    </section>
  );
};
