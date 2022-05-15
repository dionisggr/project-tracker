import 'styles/Modal.css';

export default function Modal(props) {
  const {
    title='',
    message = '',
    options = {},
    show = false
  } = props;

  const className = ['modal', props.className].join(' ').trim();

  if (!show) return null;

  if (props.children) return (
    <div className='modal'>{props.children}</div>
  );
  
  return (
    <div className={className}>
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
