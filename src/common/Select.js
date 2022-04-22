import 'styles/Select.css';

export default function Select(props) {
  const {
    label = '',
    name = 'dropdown-' + Date.now().toString(),
    value = '',
    onChange = () => { },
  } = props;

  return (
    <div className='select'>
      <label>{label}</label>
      <select
        className='dropdown'
        name={name}
        value={value}
        onChange={onChange}
      >
        {props.children}
      </select>
    </div>
  );
};
