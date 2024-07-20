// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './LeaderBoardSlice';

const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
  },
});

export default store;
