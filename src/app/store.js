import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../reducers/user/userReducer'
import gameStatsReducer from '../reducers/gameStats/gamestatsReducer'

export default configureStore({
  reducer: {
    user: userReducer,
    gameStats: gameStatsReducer
  }
})
