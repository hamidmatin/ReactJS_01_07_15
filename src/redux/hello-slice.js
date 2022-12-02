import { createSlice } from '@reduxjs/toolkit'

export const helloSclice = createSlice({
  name: 'hello',
  initialState: {
    message: 'Hello Redux',
  },
  reducers: {
    changeMessage: (state, action) => {
      console.log('object')
      console.log('state', state)
      console.log('action', action)

      state.message = 'Message Changed'
    },
    addMessageByPayload: (state, action) => {
      console.log('state', state)
      console.log('action', action)

      state.message += action.payload
    },

    changeMessageByPayload: (state, action) => {
      state.message = action.payload
    },
  },
})

export default helloSclice.reducer
export const { changeMessage, addMessageByPayload, changeMessageByPayload } = helloSclice.actions
