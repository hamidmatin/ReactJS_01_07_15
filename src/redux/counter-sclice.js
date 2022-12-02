import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    reset: (state) => {
      state.value = 0
    },
    changeByValue: (state, action)=> {
        state.value += action.payload
    }
  },
})

export default counterSlice.reducer
export const { increment, decrement, reset, changeByValue } = counterSlice.actions
