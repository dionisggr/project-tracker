import TextInput from 'common/TextInput';

export default function ProjectID(props) {
  return (
    <article className='project-id'>
      <TextInput
        className='project-id-input'
        name='project-id'
      >Project ID</TextInput>
    </article>
  );
};
