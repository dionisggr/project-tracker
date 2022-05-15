import { Link } from 'react-router-dom';
import utils from 'services/utils';
import 'styles/NavDesktop.css';

export default function Nav() {
  return (
    <nav className='desktop'>
      <Link to='/projects/demo'>(Demo)</Link>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact Us</Link>

      {utils.isAdmin &&
        <>
          <Link to='/projects/add'>Add A Project</Link>
          <Link to='/projects'>All Projects</Link>
        </>
      }
    </nav>
  );
};
