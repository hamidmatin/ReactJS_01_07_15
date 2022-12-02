import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ChangeMessage from './change-message'
import {
  decrement,
  increment,
  reset,
  changeByValue,
} from '../../redux/counter-sclice'

const UsingRedux = () => {
  // const state = useSelector((state) => state);
  // console.log(state);

  //   const hello = useSelector((state) => state.hello)
  //   console.log(hello)

  const message = useSelector((state) => state.hello.message)
  const counter = useSelector((state) => state.counter.value)
  const numRef = useRef()
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const resetHandler = () => {
    dispatch(reset())
  }

  const changeByValueHandler = () => {
    dispatch(changeByValue(parseFloat(numRef.current.value)))
  }

  return (
    <div>
      <h3>Using Redux in ReactJS</h3>

      {/* <h4>{state.hello.message}</h4> */}
      {/* <h4>{hello.message}</h4> */}
      <h4>{message}</h4>
      <ChangeMessage />
      <hr />
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={resetHandler}>reset</button>
      <br />
      <input type='number' ref={numRef} />
      <button onClick={changeByValueHandler}>Change</button>
      <p>Counter : {counter}</p>
    </div>
  )
}

export default UsingRedux
