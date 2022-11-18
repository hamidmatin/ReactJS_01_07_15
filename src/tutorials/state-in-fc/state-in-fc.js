import React, { useState } from 'react';
import FuntionComponentLifecycle from './funtion-component-lifecycle';

const StateInFC = () => {
  //   const title = 'Function Component Lifecycle';
  const [title, setTitle] = useState('Function Component Lifecycle');
  const [isVisible, setIsVisible] = useState(false);

  const changetitleHandler = () => {
    setTitle(title + ', title changed');
  };

  const toggleShowHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleShowHandler}>Toggle Show</button>
      <button onClick={changetitleHandler}>Chnage Title</button>
      <button onClick={()=>{console.clear()}}>Clear Console</button>
      
      {isVisible && <FuntionComponentLifecycle title={title} />}
    </div>
  );
};

export default StateInFC;
