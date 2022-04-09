import 'styles/TextInput.css';

export default function TextInput(props) {
  const defaultName = `text-input-` + Date.now();
  const {
    className = '',
    label = '',
    placeholder = '',
    name = defaultName,
    onChange = () => { },
  } = props;

  return (
    <div className={`text-input ${className}`}>
      { label && <label htmlFor={name}>{label}:</label> }

      <input
        type='text'
        name={name}
        placeholder={placeholder}
        value={props.children}
        onChange={onChange}
      ></input>
    </div>
  );
};
