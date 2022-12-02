import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { helloSclice } from '../../redux/hello-slice'
import { changeMessage, addMessageByPayload, changeMessageByPayload } from '../../redux/hello-slice'

const ChangeMessage = () => {
  console.log(helloSclice)

  const dispatch = useDispatch()
  const message = useSelector((state) => state.hello.message)

  const inputRef = useRef()

  const changeMessageHandler = () => {
    // helloSclice.actions.changeMessage()
    // dispatch(helloSclice.actions.changeMessage())
    dispatch(changeMessage())

  }

  const addMessageByPayloadHandler = () => {
    dispatch(addMessageByPayload(', added message'))
  }

  const onChangeHamdler = () => {
    // console.log(inputRef.current.value)
    dispatch(changeMessageByPayload(inputRef.current.value))
  }
  return (
    <div>
      <p>Message : {message}</p>
      <button onClick={changeMessageHandler}>Change Message</button>
      <button onClick={addMessageByPayloadHandler}>Change Message by payload</button>

      <input
         ref={inputRef}
        type='text'
        style={{ display: 'block', marginTop: '30px', width: '250px' }}
        onChange={onChangeHamdler}
      />
    </div>
  )
}

export default ChangeMessage
