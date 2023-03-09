import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username : '',
    age : 0,
    email : '',
    password : '',
    isLogged : false,
  },
  reducers: {
    logIn : (state, action) => {
        state.username = action.payload.username
        state.age = action.payload.age
        state.email = action.payload.email
        state.password = action.payload.password
        state.isLogged = true
        },
    logOut : (state) => {
        state.username = ''
        state.age = 0
        state.email = ''
        state.password = ''
        state.isLogged = false
        },
    
  }
})

export const { logIn, logOut } = userSlice.actions

export default userSlice.reducer