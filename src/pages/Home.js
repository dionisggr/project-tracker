import TextInput from 'common/TextInput';
import 'styles/Home.css';

export default function Home() {
  return (
    <form className='home'>
      <h3>Welcome to Tec<sup>3</sup>'s internal project management tool</h3>

      <label>Please provide a Project ID</label>

      <TextInput
        className='project-id-input'
        placeholder='Project ID'
        name='project-id-input'
      />

      <p className='disclaimer'>
        If you don't have, or can't remember your Project ID,
        please reach out to one of the team members at
        <a href='mailto:tec3org@gmail.com' target='_blank' rel='noreferrer'>
          tec3org@gmail.com
        </a>.
      </p>

      <button type='submit'>Search</button>
    </form>
  );
};
