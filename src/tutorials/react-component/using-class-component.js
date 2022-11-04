import React from 'react';
import { ClassComponent1, ClassComponent2, ClassComponent3 } from './class-componet';

const UsingClassComponent = () => {
  return (
    <div>
      <ClassComponent1 />

      <ClassComponent2
        title='Hello React Class Component (2)'
        message='using props'
        color='rgb(200,150,50)'
      >
        <div style={{ background: 'greenyellow' }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non modi illum sed qui debitis
            quas voluptatum harum voluptatem autem.
          </p>
        </div>
      </ClassComponent2>

      <ClassComponent3 title='Hello React Class Component (3)' message='using destructuring props'>
        <div style={{ background: 'greenyellow' }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non modi illum sed qui debitis
            quas voluptatum harum voluptatem autem.
          </p>
        </div>
      </ClassComponent3>
    </div>
  );
};

export default UsingClassComponent;
