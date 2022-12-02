import { configureStore } from '@reduxjs/toolkit'
// import { helloSclice } from './hello-slice'
import helloReducer from './hello-slice'
import counterReducer from './counter-sclice'

export default configureStore({
  reducer: {
    // method: methodName (reducer name)
    // hello: helloSclice.reducer
    hello: helloReducer,
    counter: counterReducer,
  },
})
