import 'styles/Modal.css';

export default function Modal(props) {
  const {
    title='',
    message = '',
    options = {},
    show = false
  } = props;

  if (!show) return null;

  if (props.children) return props.children;
  
  return (
    <div className='modal-container'>
      <div className='modal'>
        {title && <h3>{title}</h3>}
        <p>{message}</p>
        {
          Object.entries(options).map(([key, fn]) => 
            <button key={key} type='button' onClick={() => fn()}>
              {key}
            </button>
          )
        }
      </div>
    </div>    
  );
};
