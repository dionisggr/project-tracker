import 'styles/Select.css';

export default function Select(props) {
  const { label = '', name = 'dropdown-' + Date.now().toString() } = props;

  return (
    <div className='select'>
      <label>{label}</label>
      <select className='dropdown' name={name}>
        {props.children}
      </select>
    </div>
  );
};
