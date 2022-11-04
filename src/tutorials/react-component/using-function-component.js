import React from 'react';
import { FunctionComponent1 } from './function-components';
import { FunctionComponent2 } from './function-components';
import { FunctionComponent3 } from './function-components';
import { FunctionComponent4 } from './function-components';
import { FunctionComponent5 } from './function-components';
import { FunctionComponent6 } from './function-components';

const UsingFunctionComponent = () => {
  const fn1 = FunctionComponent1();
  const fn2 = FunctionComponent2({
    title: 'Function Component (2)',
    message: 'Using Props with function call',
  });

  return (
    <div>
      {fn1}
      {FunctionComponent1()}
      <FunctionComponent1 />

      {fn2}
      {FunctionComponent2({
        title: 'Function Component (2 - 1)',
        message: 'Using Props with function call',
      })}

      <FunctionComponent2 title='Function Component (2 - 2)' message='Using Props with JSX' />

      <FunctionComponent3 title='Function Component (3)' message='Using Content'>
        My Component Content
      </FunctionComponent3>

      <FunctionComponent3 title='Function Component (3 - 1)' message='Using Content'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </FunctionComponent3>

      <FunctionComponent3 title='Function Component (3 - 2)' message='Using Content'>
        <p>bfdska fdajf dajf adjf ad</p>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </FunctionComponent3>

      <FunctionComponent3 title='Function Component (3 - 3)' message='Using Content'>
        <hr />
        <FunctionComponent1 />
      </FunctionComponent3>

      <FunctionComponent4 title='Function Component (4)' message='Destructure Props'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </FunctionComponent4>

      <FunctionComponent5 title='Function Component (5)' message='Destructure Props'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </FunctionComponent5>

      <FunctionComponent6
        title='Function Component (6)'
        message='Using Style on props'
        panelStyle={{ textAlign: 'center', backgroundColor: 'yellowgreen' }}
        titleStyle={{color: 'red'}}
        messageStyle={{fontSize: '20px'}}
      />
    </div>
  );
};

export default UsingFunctionComponent