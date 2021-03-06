import 'styles/Label.css';

export default function Label(props) {
  const { className = '', value = '' } = props;

  return (
    <div className={`label ${className}`}>
      <label>{props.children}:</label>

      <span>{value}</span>
    </div>
  );
};
