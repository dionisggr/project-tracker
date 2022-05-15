import { Link } from 'react-router-dom';
import 'styles/NotFound.css';

export default function NotFound() {
  return (
    <article className='not-found'>
      <h2>Oops, that page is not available.</h2>

      <Link to='/' className='button'>Go To Home</Link>
    </article>
  );
};
