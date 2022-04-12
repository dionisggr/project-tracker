export default function Label(props) {
  const { className = '', value = '' } = props;

  return (
    <div className={`label-with-value ${className}`}>
      <label>{props.children}:</label>

      <span>{value}</span>
    </div>
  );
};
