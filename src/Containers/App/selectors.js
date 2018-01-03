import { createSelector } from 'reselect';

const appRootSelector = state => state.app;

export const playerInfoSelector = createSelector(
  appRootSelector,
  ({ userInfo }) => userInfo
);

export const gameSchemaSelector = createSelector(
  appRootSelector,
  ({ gameSchema }) => gameSchema
);

export const steamIdSelector = createSelector(
  playerInfoSelector,
  ({ steamid }) => steamid
);
