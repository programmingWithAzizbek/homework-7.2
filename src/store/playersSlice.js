import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      state.players.push({
        id: Date.now(),
        name: action.payload.name,
        score: 0,
      });
    },
    removePlayer: (state, action) => {
      state.players = state.players.filter(
        (player) => player.id !== action.payload
      );
    },
    updateScore: (state, action) => {
      const { id, delta } = action.payload;
      const player = state.players.find((player) => player.id == id);
      if (player) {
        player.score += delta;
      }
    },
  },
});

export const { addPlayer, removePlayer, updateScore } = playersSlice.actions;
export default playersSlice.reducer;
