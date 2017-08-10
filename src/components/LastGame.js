import React, { PropTypes } from 'react';

const LastGame = ({ kill, death, round, money, damage, ctWins, tWins, mvp }) => (
  <div className="lastgame-stats row">
    <ul className="col-6">
      <li>Total Kill: <b>{kill}</b></li>
      <li>Total Death: <b>{death}</b></li>
      <li>Damage Given: <b>{damage}</b></li>
      <li>MVP: <b>{mvp}</b></li>
    </ul>
    <ul className="col-6">
      <li>Money Spent: <b>{money}</b></li>
      <li>RoundS: <b>{round}</b></li>
      <li>CT Wins: <b>{ctWins}</b></li>
      <li>T Wins: <b>{tWins}</b></li>
    </ul>
  </div>
);

LastGame.propTypes = {
  kill: PropTypes.number.isRequired,
  death: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
  damage: PropTypes.number.isRequired,
  ctWins: PropTypes.number.isRequired,
  tWins: PropTypes.number.isRequired,
  mvp: PropTypes.number.isRequired,
};

export default LastGame;
