export default function LabelWithValue(props) {
  const { className = '', value = '' } = props;

  return (
    <div className={`label-with-value ${className}`}>
      <label>{props.children}:</label>

      <span>{value}</span>
    </div>
  );
};
