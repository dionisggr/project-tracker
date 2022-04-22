import { Link } from 'react-router-dom';
import utils from 'services/utils';
import 'styles/Nav.css';

export default function Nav() {
  const isHomePage = window.location.pathname === '/';

  return (
    <nav>
      <Link to='/projects/demo'>(Demo)</Link>

      {!isHomePage && <Link to='/'>Home</Link>}

      {
        (!utils.isAdmin)
          ? <Link to='/request'>Request A Project</Link>
          : <Link to='/projects/add'>Add A Project</Link>
      }

      {!utils.isAdmin && <Link to='/contact'>Contact Us</Link>}

      {utils.isAdmin && <Link to='/projects'>All Projects</Link>}
    </nav>
  );
};
