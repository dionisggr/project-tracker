import 'styles/Nav.css';

export default function Nav() {
  const isHomePage = window.location.pathname === '/';
  return (
    <nav>
      <a href='/projects/demo'>(Demo)</a>

      {!isHomePage && <a href='/'>Home</a>}

      <a href='/request'>Request A Project</a>
      <a href='/contact'>Contact Us</a>
    </nav>
  );
};
