import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserInfo from 'Components/UserInfo';
import LastGame from 'Components/LastGame';
import OverallStats from 'Components/OverallStats';
import Achievements from 'Components/Achievements';

import {
  playerInfoSelector,
  gameSchemaSelector
} from 'Containers/App/selectors';

import {
  playerStatsSelector,
  achievementsSelector,
  playerStatsMapSelector,
  playerAchievementsMapSelector
} from './selectors';

function Stats ({ playerStats, userInfo, statsObj, achieveObj, gameSchema }) {
  return (
    <div>
      {playerStats.length > 0 &&
        <div>
          <UserInfo
            personaname={userInfo.personaname}
            profileurl={userInfo.profileurl}
            imgUrl={userInfo.avatarfull}
          />
          <h2 className="subTitle">Last Match</h2>
          <LastGame
            kill={statsObj.last_match_kills}
            death={statsObj.last_match_deaths}
            mvp={statsObj.last_match_mvps}
            money={statsObj.last_match_money_spent}
            damage={statsObj.last_match_damage}
            round={statsObj.last_match_rounds}
            tWins={statsObj.last_match_t_wins}
            ctWins={statsObj.last_match_ct_wins}
          />

          <h2 className="subTitle">Stats</h2>
          <OverallStats
            kill={statsObj.total_kills}
            death={statsObj.total_deaths}
            deathRatio={`${(statsObj.total_kills / statsObj.total_deaths * 100).toFixed(2)}%`}
            headshot={statsObj.total_kills_headshot}
            knife={statsObj.total_kills_knife}
            wins={statsObj.total_wins}
            winRatio={`${(statsObj.total_wins / statsObj.total_rounds_played * 100).toFixed(2)}%`}
            mvp={statsObj.total_mvps}
            shots={123}
            accuracy={100}
          />
          <h2 className="subTitle">Achievements</h2>
          <Achievements
            achievementSchema={gameSchema.achievements || []}
            propsAchievements={achieveObj}
          />
        </div>
      }
    </div>
  );
}

Stats.propTypes = {
  playerStats: PropTypes.array.isRequired,
  userInfo: PropTypes.object.isRequired,
  statsObj: PropTypes.object.isRequired,
  achieveObj: PropTypes.object.isRequired,
  gameSchema: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    userInfo: playerInfoSelector(state),
    gameSchema: gameSchemaSelector(state),
    playerStats: playerStatsSelector(state),
    playerAchievements: achievementsSelector(state),
    statsObj: playerStatsMapSelector(state),
    achieveObj: playerAchievementsMapSelector(state)
  };
};

export default connect(mapStateToProps)(Stats);
