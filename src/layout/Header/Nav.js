import 'styles/Nav.css';

export default function Nav() {
  const authToken = window.localStorage.getItem('projectTrackerAuthToken');
  const isLocalHost = window.location.hostname === 'localhost';
  const allowedUsers = ['lili', 'doug', 'dio'];

  const isAdmin = isLocalHost || allowedUsers.includes(authToken);
  const isHomePage = window.location.pathname === '/';

  return (
    <nav>
      <a href='/projects/demo'>(Demo)</a>

      {!isHomePage && <a href='/'>Home</a>}

      {
        (!isAdmin)
          ? <a href='/request'>Request A Project</a>
          : <a href='/projects/add'>Add A Project</a>
      }

      {!isAdmin && <a href='/contact'>Contact Us</a>}
    </nav>
  );
};
