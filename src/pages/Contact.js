import TextInput from 'common/TextInput';
import TextArea from 'common/TextArea';
import 'styles/Contact.css';

export default function Contact() {
  return (
    <form
      className='contact'
      method='POST'
      action='https://formspree.io/f/mjvlaypy'
    >
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
        label='Subject'
        defaultValue
        required
      />
      <TextArea
        name='message'
        label='Message'
        defaultValue
        required
      />

      <button type='submit'>Submit</button>
    </form>
  );
};
