import React from 'react';
import PropTypes from 'prop-types';

const Achievements = ({ propsAchievements, achievementSchema }) => {
  let achievements = [];
  const achievementsFinished = [];
  const achievementsNotFinsished = [];
  const activeAchieve = propsAchievements;

  achievementSchema.forEach(d => {
    if (activeAchieve.hasOwnProperty(d.name)) {
      achievementsFinished.push(
        <li className="achievement" key={d.displayName}>
          <img src={d.icon} />
          <dl className="thumb">
            <dt>{d.displayName} </dt>
            <dd>{d.description}</dd>
          </dl>
        </li>
      );
    } else {
      achievementsNotFinsished.push(
        <li className="achievement" key={d.displayName}>
          <img src={d.icongray} />
          <dl className="thumb">
            <dt>{d.displayName} </dt>
            <dd>{d.description}</dd>
          </dl>
        </li>
      );
    }
  });

  achievements = achievementsFinished.concat(achievementsNotFinsished);
  return (
    <div className="row ">
      <ul className="achievements-list">
        {achievements}
      </ul>
    </div>
  );
};

Achievements.propTypes = {
  propsAchievements: PropTypes.object.isRequired,
  achievementSchema: PropTypes.array.isRequired
};

export default Achievements;
