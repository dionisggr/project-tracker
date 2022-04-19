import { Link } from 'react-router-dom';
import Nav from './Nav';
import 'styles/Header.css';

export default function Header() {
  return (
    <header>
      <Link to='/' className='company-logo'>
        <h1>Project Tracker</h1>
      </Link>
        
      <Nav />
    </header>
  );
};
