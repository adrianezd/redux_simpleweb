import { createSlice } from '@reduxjs/toolkit'

export const gameStatsSlice = createSlice({
  name: 'gameStats',
  initialState: {
    gameStats : {
        gamesPlayed : 0,
        gamesWon : 0,
        gamesLost : 0,
        gamesDrawn : 0,
        winStreak : 0,
    },
    gameHistory : []

  },
  reducers: {
    updateGameStats : (state, action) => {
        state.gameStats.gamesPlayed = action.payload.gamesPlayed
        state.gameStats.gamesWon = action.payload.gamesWon
        state.gameStats.gamesLost = action.payload.gamesLost
        state.gameStats.gamesDrawn = action.payload.gamesDrawn
        state.gameStats.winStreak = action.payload.winStreak
        },
    updateGameHistory : (state, action) => {
        state.gameHistory = action.payload.gameHistory
        }
  }
})

export const { updateGameStats, updateGameHistory } = gameStatsSlice.actions

export default gameStatsSlice.reducer