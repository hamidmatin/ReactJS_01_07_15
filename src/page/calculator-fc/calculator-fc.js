import React, { useState } from 'react';
import { Screen } from './screen';
import { Wrapper } from './wrapper';
import { ButtomBox } from './buttom-box';
import { Button } from './button';

import styles from './calculator.module.css';
import { BasePage } from '../../components/base-page';

const CalculatorFCPage = () => {
  // constructor() {
  //   super();

  //   this.state = {
  //     sign: '',
  //     num: 0,
  //     res: 0,
  //   };
  // }

  const [sign, setSign] = useState('');
  const [num, setNum] = useState(0);
  const [res, setRes] = useState(0);

  const removeSpaces = (num) => num.toString().replace(/\s/g, '');
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

  const numClickHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.innerHTML)
    const value = e.target.innerHTML;

    if (removeSpaces(num).length < 16) {
      // this.setState({
      //   num:
      //     this.state.num === 0 && value === '0'
      //       ? '0'
      //       : this.removeSpaces(this.state.num) % 1 === 0
      //       ? this.toLocaleString(Number(this.removeSpaces(this.state.num + value)))
      //       : this.toLocaleString(this.state.num + value),
      //   res: !this.state.sign ? 0 : this.state.res,
      // });

      setNum(
        num === 0 && value === '0'
          ? '0'
          : removeSpaces(num) % 1 === 0
          ? toLocaleString(Number(removeSpaces(num + value)))
          : toLocaleString(num + value)
      );

      setRes(!sign ? 0 : res);
    }
  };

  const dotClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    // this.setState({
    //   num: !this.state.num.toString().includes('.') ? this.state.num + value : this.state.num,
    // });

    setNum(!num.toString().includes('.') ? num + value : num);
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    // this.setState({
    //   sign: value,
    //   res: !this.state.res && this.state.num ? this.state.num : this.state.res,
    //   num: 0,
    // });

    setSign(value);
    setRes(!res && num ? num : res);
    setNum(0);
  };

  const equalsClickHandler = () => {
    if (sign && num) {
      const math = (a, b, sign) =>
        sign === '+' ? a + b : sign === '-' ? a - b : sign === 'X' ? a * b : a / b;

      // this.setState({
      //   res:
      //     this.state.num === '0' && this.state.sign === '/'
      //       ? "Can't divide with 0"
      //       : math(Number(this.state.res), Number(this.state.num), this.state.sign),
      //   sign: '',
      //   num: 0,
      // });

      setRes(
        num === '0' && sign === '/' ? "Can't divide with 0" : math(Number(res), Number(num), sign)
      );
      setSign('');
      setNum(0);
    }
  };

  const invertClickHandler = () => {
    // this.setState({
    //   num: this.state.num ? this.toLocaleString(this.removeSpaces(this.state.num) * -1) : 0,
    //   res: this.state.res ? this.toLocaleString(this.removeSpaces(this.state.res) * -1) : 0,
    //   sign: '',
    // });

    setNum(num ? this.toLocaleString(this.removeSpaces(num) * -1) : 0);
    setRes(res ? this.toLocaleString(this.removeSpaces(res) * -1) : 0);
    setSign('');
  };

  const percentClickHandler = () => {
    let newNum = num ? parseFloat(this.removeSpaces(num)) : 0;
    let newRes = res ? parseFloat(this.removeSpaces(res)) : 0;

    // this.setState({
    //   num: (num /= Math.pow(100, 1)),
    //   res: (res /= Math.pow(100, 1)),
    //   sign: '',
    // });
    setNum((newNum /= Math.pow(100, 1)));
    setRes((newRes /= Math.pow(100, 1)));
    setSign('');
  };

  const resetClickHandler = () => {
    // this.setState({
    //   sign: '',
    //   num: 0,
    //   res: 0,
    // });

    setSign('');
    setNum(0);
    setRes(0);
  };

  /*
    if(value){
        ....
    }

    value = false or 
    value = undefined or 
    value = null or 
    value = 0 or
    value = ''
    then => condition = false 
  */

  const buttonValues = [
    { value: 'C', clickHandler: resetClickHandler, isEquals: false },
    { value: '+-', clickHandler: invertClickHandler, isEquals: false },
    { value: '%', clickHandler: percentClickHandler, isEquals: false },
    { value: '/', clickHandler: signClickHandler, isEquals: false },
    { value: '7', clickHandler: numClickHandler, isEquals: false },
    { value: '8', clickHandler: numClickHandler, isEquals: false },
    { value: '9', clickHandler: numClickHandler, isEquals: false },
    { value: 'X', clickHandler: signClickHandler, isEquals: false },
    { value: '4', clickHandler: numClickHandler, isEquals: false },
    { value: '5', clickHandler: numClickHandler, isEquals: false },
    { value: '6', clickHandler: numClickHandler, isEquals: false },
    { value: '-', clickHandler: signClickHandler, isEquals: false },
    { value: '1', clickHandler: numClickHandler, isEquals: false },
    { value: '2', clickHandler: numClickHandler, isEquals: false },
    { value: '3', clickHandler: numClickHandler, isEquals: false },
    { value: '+', clickHandler: signClickHandler, isEquals: false },
    { value: '0', clickHandler: numClickHandler, isEquals: false },
    { value: '.', clickHandler: dotClickHandler, isEquals: false },
    { value: '=', clickHandler: equalsClickHandler, isEquals: true },
  ];

  return (
    <BasePage title={'Calculator (FC) Sample'}>
      <div className={styles['calculator-page']}>
        <Wrapper>
          <Screen value={num ? num : res} />
          <ButtomBox>
            {buttonValues.map((buttonValue, idx) => (
              <Button
                key={idx}
                value={buttonValue.value}
                onClick={buttonValue.clickHandler}
                isEquals={buttonValue.isEquals}
              />
            ))}

            {/* <Button value={'C'} onClick={resetClickHandler} />
            <Button value={'+-'} onClick={invertClickHandler} />
            <Button value={'%'} onClick={percentClickHandler} />
            <Button value={'/'} onClick={signClickHandler} />
            <Button value={'7'} onClick={numClickHandler} />
            <Button value={'8'} onClick={numClickHandler} />
            <Button value={'9'} onClick={numClickHandler} />
            <Button value={'X'} onClick={signClickHandler} />
            <Button value={'4'} onClick={numClickHandler} />
            <Button value={'5'} onClick={numClickHandler} />
            <Button value={'6'} onClick={numClickHandler} />
            <Button value={'-'} onClick={signClickHandler} />
            <Button value={'1'} onClick={numClickHandler} />
            <Button value={'2'} onClick={numClickHandler} />
            <Button value={'3'} onClick={numClickHandler} />
            <Button value={'+'} onClick={signClickHandler} />
            <Button value={'0'} onClick={numClickHandler} />
            <Button value={'.'} onClick={dotClickHandler} />
            <Button value={'='} isEquals onClick={equalsClickHandler} /> */}
          </ButtomBox>
        </Wrapper>
      </div>
    </BasePage>
  );
};

export default CalculatorFCPage;
