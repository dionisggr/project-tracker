import { Link } from 'react-router-dom';
import 'styles/NotFound.css';

export default function NotFound() {
  return (
    <article className='not-found'>
      <h3>Oops, that page is not available.</h3>

      <Link to='/' className='button'>Go To Home</Link>
    </article>
  );
};
