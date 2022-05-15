import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavMobileIcon from './NavMobileIcon';
import utils from 'services/utils';
import 'styles/NavMobile.css';

export default function NavMobile() {
  const [shouldShowNavMobile, toggleNavMobile] = useState(false);

  useEffect(() => {
    function outsideClickListener(evt) {
      if (evt.target.tagName !== 'NAV') {
        toggleNavMobile(false);
      }
    }

    if (shouldShowNavMobile) {
      document.addEventListener('click', outsideClickListener);
    }

    return () => document.removeEventListener('click', outsideClickListener);
  }, [shouldShowNavMobile]);

  return (
    <>
      <NavMobileIcon
        isNavOpen={shouldShowNavMobile}
        onClick={() => toggleNavMobile(!shouldShowNavMobile)}
      />

      {shouldShowNavMobile &&
        <nav className='mobile'>
          <ul className="links">
            <li><Link to="/projects/demo">(DEMO)</Link></li>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>

            {utils.isAdmin &&
              <>
                <li><Link to="/projects/add">ADD A PROJECT</Link></li>
                <li><Link to="/projects">ALL PROJECTS</Link></li>
              </>
            }
          </ul>
        </nav>
      }
    </>
  );
};
