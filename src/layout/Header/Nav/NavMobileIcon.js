import 'styles/NavMobileIcon.css';

export default function NavMobileIcon(props) {
  const { isNavOpen = false, onClick = () => { } } = props;

  const className = (isNavOpen) ? 'close-icon' : 'hamburger';

  const closeIcon = (
    <div className='close-icon'>&times;</div>
  );
  const hamburgerIcon = (
    <div className='hamburger'>
      <div className='bar'></div>
      <div className='bar'></div>
      <div className='bar'></div>
    </div>
  );

  return (
    <nav className={className} onClick={onClick}>
      {!isNavOpen && hamburgerIcon}
      {isNavOpen && closeIcon}
    </nav>
  );
};
