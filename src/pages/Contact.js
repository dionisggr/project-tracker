import TextInput from 'common/TextInput';
import 'styles/Contact.css';

export default function Contact() {
  function sendRequest(evt) {
    evt.preventDefault();

    const { name, subject, description } = evt.target;
    const emailOrPhone = evt.target['email-or-phone'];

    const request = {
      name: name.value,
      emailOrPhone: emailOrPhone.value,
      subject: subject.value,
      description: description.value,
    };

    // Send request API
    console.log('request:', request);
  };

  return (
    <form className='contact' onSubmit={sendRequest}>
      <TextInput name='name' label='Name' defaultValue />
      <TextInput name='email-or-phone' label='Email / Phone' defaultValue />
      <TextInput name='subject' label='Subject' defaultValue />
      <TextInput name='description' label='Description' defaultValue />

      <button type='submit'>Submit</button>
    </form>
  );
};
