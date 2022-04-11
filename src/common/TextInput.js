import 'styles/TextInput.css';

export default function TextInput(props) {
  const defaultName = `text-input-` + Date.now();
  const {
    name = defaultName,
    className = '',
    label = '',
    type = 'text',
    placeholder = '',
    onChange = () => { },
    defaultValue,
  } = props;

  let value;
  let defaultValueString;

  if (defaultValue) {
    defaultValueString = props.children;
  } else {
    value = props.children;
  }

  return (
    <div className={`text-input ${className}`}>
      { label && <label htmlFor={name}>{label}:</label> }

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        defaultValue={defaultValueString}
      ></input>
    </div>
  );
};
