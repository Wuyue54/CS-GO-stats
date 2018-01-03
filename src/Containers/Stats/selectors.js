import { createSelector } from 'reselect';

const statsRootSelector = state => state.playerstats;

export const playerStatsSelector = createSelector(
  statsRootSelector,
  ({ playerStats }) => {
    if (!Array.isArray(playerStats)) return [];
    return playerStats;
  }
);

export const achievementsSelector = createSelector(
  statsRootSelector,
  ({ playerAchievements }) => {
    if (!Array.isArray(playerAchievements)) return [];
    return playerAchievements;
  }
);

export const playerStatsMapSelector = createSelector(
  playerStatsSelector,
  playerStats => {
    let statsMap = {};
    if (!Array.isArray(playerStats)) return statsMap;
    playerStats.forEach(d => {
      statsMap[d.name] = d.value;
    });
    return statsMap;
  }
);

export const playerAchievementsMapSelector = createSelector(
  achievementsSelector,
  playerAchievements => {
    let achieveObjMap = {};
    if (!Array.isArray(playerAchievements)) return achieveObjMap;
    playerAchievements.forEach(d => {
      achieveObjMap[d.name] = d.value;
    });
    return achieveObjMap;
  }
);
