import { useEffect, useState } from 'react';
import LabelWithValue from 'common/LabelWithValue';
import TextInput from 'common/TextInput';
import 'styles/ProjectInfo.css';

export default function ProjectInfo({ project = {} }) {
  const [isEditing, setEditStatus] = useState(false);
  const [projectData, setProjectData] = useState(project);
  const {
    projectName,
    client,
    dateRequested,
    status,
    contact,
    emailOrPhone,
  } = projectData;

  function handleSubmit() {

    setEditStatus(false);
  };

  async function editReport(evt) {
    const fields = ['client', 'project-name', 'date-requested', 'status', 'contact', 'email-or-phone'];
    let { name, value } = evt.target;

    if (fields.includes(name)) {
      const camelCasedName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      setProjectData({ ...projectData, [camelCasedName]: value });
    }
  };

  useEffect(() => {
    setProjectData(project);
  }, [project]);

  if (!isEditing) return (
    <section className='project-info'>
      <LabelWithValue value={client}>Client</LabelWithValue>
      <LabelWithValue value={projectName}>Project</LabelWithValue>
      <LabelWithValue value={dateRequested}>Date Requested</LabelWithValue>
      <LabelWithValue value={status}>Status</LabelWithValue>
      <LabelWithValue value={contact}>Contact</LabelWithValue>
      <LabelWithValue value={emailOrPhone}>Email/Phone</LabelWithValue>

      <button type='button' className='edit' onClick={() => setEditStatus(true)}>
        Edit
      </button>
    </section>
  );

  if (isEditing) return (
    <section className='project-info editing'>
      <TextInput name='client' label='Client' onChange={editReport}>
        {client}
      </TextInput>
      <TextInput name='project-name' label='Project' onChange={editReport}>
        {projectName}
      </TextInput>
      <TextInput name='date-requested' label='Date Requested' onChange={editReport}>
        {dateRequested}
      </TextInput>
      <TextInput name='status' label='Status' onChange={editReport}>
        {status}
      </TextInput>
      <TextInput name='contact' label='Contact' onChange={editReport}>
        {contact}
      </TextInput>
      <TextInput name='email-or-phone' label='Email/Phone' onChange={editReport}>
        {emailOrPhone}
      </TextInput>

      <button type='button' className='submit' onClick={handleSubmit}>
        Submit
      </button>
    </section>
  );
};
