import 'styles/Form.css';

export default function Form(props) {
  return (
    <form className='form'>
      <div className='form-wrapper'>
        {props.children}
      </div>

      <button className='button' type='submit'>Submit</button>
    </form>
  );
};
