import React, { Component } from 'react';
import { Screen } from './screen';
import { Wrapper } from './wrapper';
import { ButtomBox } from './buttom-box';
import { Button } from './button';

import styles from './calculator.module.css';
import { BasePage } from '../../components/base-page';

export default class CalculatorPage extends Component {
  constructor() {
    super();

    this.state = {
      sign: '',
      num: 0,
      res: 0,
    };
  }

  removeSpaces = (num) => num.toString().replace(/\s/g, '');
  toLocaleString = (num) => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

  numClickHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.innerHTML)
    const value = e.target.innerHTML;

    if (this.removeSpaces(this.state.num).length < 16) {
      this.setState({
        num:
          this.state.num === 0 && value === '0'
            ? '0'
            : this.removeSpaces(this.state.num) % 1 === 0
            ? this.toLocaleString(Number(this.removeSpaces(this.state.num + value)))
            : this.toLocaleString(this.state.num + value),
        res: !this.state.sign ? 0 : this.state.res,
      });
    }
  };

  dotClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    this.setState({
      num: !this.state.num.toString().includes('.') ? this.state.num + value : this.state.num,
    });
  };

  signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    this.setState({
      sign: value,
      res: !this.state.res && this.state.num ? this.state.num : this.state.res,
      num: 0,
    });
  };

  equalsClickHandler = () => {
    if (this.state.sign && this.state.num) {
      const math = (a, b, sign) =>
        sign === '+' ? a + b : sign === '-' ? a - b : sign === 'X' ? a * b : a / b;

      this.setState({
        res:
          this.state.num === '0' && this.state.sign === '/'
            ? "Can't divide with 0"
            : math(Number(this.state.res), Number(this.state.num), this.state.sign),
        sign: '',
        num: 0,
      });
    }
  };

  invertClickHandler = () => {
    this.setState({
      num: this.state.num ? this.toLocaleString(this.removeSpaces(this.state.num) * -1) : 0,
      res: this.state.res ? this.toLocaleString(this.removeSpaces(this.state.res) * -1) : 0,
      sign: '',
    });
  };

  percentClickHandler = () => {
    let num = this.state.num ? parseFloat(this.removeSpaces(this.state.num)) : 0;
    let res = this.state.res ? parseFloat(this.removeSpaces(this.state.res)) : 0;

    this.setState({
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: '',
    });
  };

  resetClickHandler = () => {
    this.setState({
      sign: '',
      num: 0,
      res: 0,
    });
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
  render() {
    return (
      <BasePage title={'Calculator Sample'}>
        <div className={styles['calculator-page']}>
          <Wrapper>
            <Screen value={this.state.num ? this.state.num : this.state.res} />
            <ButtomBox>
              <Button value={'C'} onClick={this.resetClickHandler} />
              <Button value={'+-'} onClick={this.invertClickHandler} />
              <Button value={'%'} onClick={this.percentClickHandler} />
              <Button value={'/'} onClick={this.signClickHandler} />
              <Button value={'7'} onClick={this.numClickHandler} />
              <Button value={'8'} onClick={this.numClickHandler} />
              <Button value={'9'} onClick={this.numClickHandler} />
              <Button value={'X'} onClick={this.signClickHandler} />
              <Button value={'4'} onClick={this.numClickHandler} />
              <Button value={'5'} onClick={this.numClickHandler} />
              <Button value={'6'} onClick={this.numClickHandler} />
              <Button value={'-'} onClick={this.signClickHandler} />
              <Button value={'1'} onClick={this.numClickHandler} />
              <Button value={'2'} onClick={this.numClickHandler} />
              <Button value={'3'} onClick={this.numClickHandler} />
              <Button value={'+'} onClick={this.signClickHandler} />
              <Button value={'0'} onClick={this.numClickHandler} />
              <Button value={'.'} onClick={this.dotClickHandler} />
              <Button value={'='} isEquals onClick={this.equalsClickHandler} />
            </ButtomBox>
          </Wrapper>
        </div>
      </BasePage>
    );
  }
}
