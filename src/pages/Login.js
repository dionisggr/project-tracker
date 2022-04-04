import TextInput from 'common/TextInput';
import 'styles/Login.css';

export default function Login() {
  return (
    <div className='login'>
      <TextInput label='Email' name='email' />
      <TextInput label='Password' name='password' />
    </div>
  );
};
