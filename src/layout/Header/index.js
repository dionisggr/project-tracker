import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className='title'>
        <Link to='/' className='company-logo'>
          <h1>Project Tracker</h1>
        </Link>
      </div> 
        
      <Nav />
    </header>
  );
};
