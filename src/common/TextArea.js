import 'styles/TextArea.css';

export default function TextArea(props) {
  const defaultName = `text-area-` + Date.now();
  const {
    name = defaultName,
    className = '',
    label = '',
    placeholder = '',
    required = false,
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
    <div className={`text-area ${className}`}>
      { label && <label htmlFor={name}>{label}:</label> }

      <textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        defaultValue={defaultValueString}
        required={required}
      ></textarea>
    </div>
  );
};
