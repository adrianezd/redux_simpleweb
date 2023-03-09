import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../reducers/user/userReducer'

export default configureStore({
  reducer: {
    user: userReducer,
  }
})
