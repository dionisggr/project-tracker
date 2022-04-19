import TextInput from './TextInput';
import TextArea from './TextArea';
import 'styles/Form.css';

export default function Form() {
  return (
    <form className='form'>
      <div className='form-wrapper'>
        <h3>Request a Project</h3>
        <TextInput
          name='name'
          label='Name'
          defaultValue
          required
        />
        <TextInput
          name='email-or-phone'
          label='Email / Phone'
          defaultValue
          required
        />
        <TextInput
          name='message-header'
          label='Company (optional)'
          defaultValue
        />
        <TextArea
          name='message'
          label='Message'
          defaultValue
          required
        />
      </div>

      <button className='button' type='submit'>Submit</button>
    </form>
  );
};
