import TextInput from 'common/TextInput';
import TextArea from 'common/TextArea';
import Form from 'common/Form';
import 'styles/Request.css';

export default function Request() {
  return (
    <article className='request'>
      <Form>
        <h3>Request a Project!</h3>
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
