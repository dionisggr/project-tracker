import { useEffect, useState } from 'react';
import { format as formatDate } from 'date-fns';
import ApiService from 'services/api-service';
import LabelWithValue from 'common/LabelWithValue';
import TextInput from 'common/TextInput';
import 'styles/ProjectInfo.css';

export default function ProjectInfo({ project = {} }) {
  const [isEditing, setEditStatus] = useState(false);
  const [projectData, setProjectData] = useState(project);
  const {
    name,
    client,
    dateRequested,
    phase,
    contact,
    emailOrPhone,
  } = projectData;

  let labelFormattedDateRequested;
  let inputFormattedDateRequested;

  if (new Date(dateRequested).getTime()) {
    const date = new Date(dateRequested);

    labelFormattedDateRequested = formatDate(date, 'M-d-yyyy');
    inputFormattedDateRequested = formatDate(date, 'yyyy-MM-dd');
  }

  async function handleSubmit() {
    const { id } = projectData;
    const path = '/projects/' + id;
    const body = { projectData };

    const wasUpdated = await ApiService.patchRequest(path, body);

    if (!wasUpdated) {
      setProjectData(project);
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

  if (!isEditing) return (
    <section className='project-info'>
      <LabelWithValue value={client}>Client</LabelWithValue>
      <LabelWithValue value={name}>Project</LabelWithValue>
      <LabelWithValue value={labelFormattedDateRequested}>
        Date Requested
      </LabelWithValue>
      <LabelWithValue value={phase}>Status</LabelWithValue>
      <LabelWithValue value={contact}>Contact</LabelWithValue>
      <LabelWithValue value={emailOrPhone}>Email/Phone</LabelWithValue>

      <button type='button' className='edit' onClick={() => setEditStatus(true)}>
        Edit
      </button>
    </section>
  );

  if (isEditing) return (
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
      <TextInput name='phase' label='Status' onChange={editProject}>
        {phase}
      </TextInput>
      <TextInput name='contact' label='Contact' onChange={editProject}>
        {contact}
      </TextInput>
      <TextInput name='email-or-phone' label='Email/Phone' onChange={editProject}>
        {emailOrPhone}
      </TextInput>

      <button type='button' className='submit' onClick={handleSubmit}>
        Submit
      </button>
    </section>
  );
};
