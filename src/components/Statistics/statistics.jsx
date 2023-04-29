import PropTypes from 'prop-types';
import getRandomHexColor from '../Statistics/changecolor';
import { Section, Ul, Li } from '../Statistics/statistics.styled';
import data from 'parts/data.json';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2 className="title">{title}</h2>}
      <Ul>
        {data.map(data => (
          <Li key={data.id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}</span>
          </Li>
        ))}
      </Ul>
    </Section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
