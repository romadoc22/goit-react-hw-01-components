// import css from 'Statistic/statistic.module.css';
// import { PageTitle } from '../components/Statistic/pagetitle';
import data from 'parts/data.json';

export const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">{data.title}</h2>
      <ul className="stat-list">
        {data.map(data => (
          <li className="item" key={data.id}>
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
