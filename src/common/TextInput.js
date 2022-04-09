export default function TextInput(props) {
  const defaultName = `text-input-` + Date.now();
  const {
    name = defaultName,
    className = '',
    label = '',
    placeholder = '',
    onChange = () => { },
    defaultValue,
  } = props;
  let value;

  if (!defaultValue) {
    value = props.children;
  }

  return (
    <div className={`text-input ${className}`}>
      { label && <label htmlFor={name}>{label}:</label> }

      <input
        type='text'
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        defaultValue={props.children}
      ></input>
    </div>
  );
};
