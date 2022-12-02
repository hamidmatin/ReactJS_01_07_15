import React, { useRef } from 'react'
import { addMessageByPayloadAction, changeMessageAction, changeMessageByPayloadAction } from '../../context/hello-actions'
import { useHelloContext } from '../../context/hello-context'

const UsingContext = () => {
  //   const context = useContext(HelloContext);
  //   const context = useHelloContext();
  // console.log(context)
  ;
  const { helloState, dispatch } = useHelloContext()

  const inputRef = useRef()

  const changeMessageHandler = () => {
    // context.dispatch({ type: 'change_message', payload: 'Message Changed' });
    // dispatch({ type: 'change_message', payload: 'Message Changed' });
    dispatch(changeMessageAction());
  }

  const changeMessageByPayloadHandler = () => {
    dispatch(changeMessageByPayloadAction(inputRef.current.value));
  }

  const addMessageByPayloadHandler = () => {
    dispatch(addMessageByPayloadAction(inputRef.current.value));
  }
  return (
    <div>
      <h3>UsingContext</h3>
      <hr />
      {/* <HelloContext.Consumer>
        {(state) => {
          console.log(state);
          return <p>message: {state.helloState}</p>;
        }}
      </HelloContext.Consumer> */}

      <button onClick={changeMessageHandler}>Change Message</button>
      <button onClick={changeMessageByPayloadHandler}>
        Change Message by Payload
      </button>
      <button onClick={addMessageByPayloadHandler}>
        Add Message by Payload
      </button>
      {/* <p>Message : {context.helloState}</p> */}
      <p>Message : {helloState}</p>
      <input type='text' ref={inputRef} />
    </div>
  )
}

export default UsingContext
