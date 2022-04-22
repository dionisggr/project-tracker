import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import 'styles/Spinner.css';

export default function Spinner() {
  const [show, toggleShow] = useState(true);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      toggleShow(false);
    }, 8000);

    return () => clearTimeout(redirectTimeout);
  }, []);

  if (!show) return <Navigate to='/404' />;

  return (
    <article className='spinner-container'>
      <h3>Loading...</h3>
      <div className='spinner' />
    </article>
  );
};
