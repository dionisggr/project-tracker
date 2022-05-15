import TextInput from 'common/TextInput';
import TextArea from 'common/TextArea';
import Form from 'common/Form';
import 'styles/Contact.css';

export default function Contact() {
  return (
    <article className='contact'>
      <Form>
        <h2>Contact Us!</h2>
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
      </Form>
    </article>
  );
};
