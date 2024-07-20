// src/store/leaderboardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    scores: [
      { username: 'Anjum', time: '00:50:2' },
      { username: 'Pragati Azad', time: '00:56:23' },
      { username: 'Prag Azad', time: '00:25:23' },
      { username: 'Hannibal Hector', time: '00:56:25' },
      { username: 'Razzi', time: '00:56:56' },
      { username: 'McRamble', time: '00:56:20' },
      { username: 'Rajj', time: '00:58:23' },
      { username: 'McRamble', time: '00:59:56' },
      { username: ' Anjum Kunnummal', time: '00:56:23' },
      { username: ' Lalkar', time: '00:35:23' },
    ],
  },
  reducers: {
    addScore: (state, action) => {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => a.time.localeCompare(b.time));
      if (state.scores.length > 10) {
        state.scores.pop();
      }
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
