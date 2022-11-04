import React, { Component } from 'react';

import styles from './class-component.module.css';
/*
  import React from 'react'
  class ClassName extends React.Component {
    render () {
      ....
      return jsx
    }
  }
  or 
  import React, { Component } from 'react'
  class ClassName extends Component {
    render () {
      ....
      return jsx
    }
  }
*/

export class ClassComponent1 extends React.Component {
  render() {
    return (
      <div className={styles['wrapper']}>
        <h3>Hello React Class Component (1)</h3>
      </div>
    );
  }
}

export class ClassComponent2 extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles['wrapper']} style={{ color: this.props.color }}>
        <h3>{this.props.title}</h3>
        <p>{this.props.message}</p>
        {this.props.children}
      </div>
    );
  }
}

export class ClassComponent3 extends Component {
  render() {
    console.log(this.props);
    const { title, message, children } = this.props;
    return (
      <div className={styles['wrapper']}>
        <h3>{title}</h3>
        <p>{message}</p>
        {children}
      </div>
    );
  }
}
