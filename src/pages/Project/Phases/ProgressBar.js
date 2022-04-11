import 'styles/ProgressBar.css';

export default function ProgressBar({ percent }) {
  return (
    <section className='progress container'>
      <div style={{ width: percent + '%' }} className='progress bar' />

      <label className='percent'>{Math.round(percent)}%</label>
    </section>
  );
};
