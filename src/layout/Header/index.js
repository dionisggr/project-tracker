import { Link } from 'react-router-dom';
import NavDesktop from './Nav/NavDesktop';
import NavMobile from './Nav/NavMobile';
import 'styles/Header.css';

export default function Header() {
  return (
    <header>
      <Link to='/' className='company-logo'>
        <h1>ProjectTracker</h1>
      </Link>
        
      <NavDesktop />
      <NavMobile />
    </header>
  );
};
