export default function TextInput(props) {
  const defaultName = `text-input-` + Date.now();
  const {
    className = '',
    label = '',
    name = defaultName,
  } = props;

  return (
    <div className={`text-input ${className}`}>
      <label for={name}>{label}:</label>
      <input
        type='text'
        name={name}
        placeholder={props.children}
      ></input>
    </div>
  );
};
