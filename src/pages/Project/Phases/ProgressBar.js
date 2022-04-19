import 'styles/ProgressBar.css';

export default function ProgressBar({ progress }) {
  const values = progress.split('/');
  const percent = Number(values[0]) / Number(values[1]) * 100;
  
  return (
    <section className='progress container'>
      <div style={{ width: percent + '%' }} className='progress bar' />

      <label className='progress value'>{progress}</label>
    </section>
  );
};
