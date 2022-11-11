import React from 'react';
import styles from './css-framework.module.css';

const Container = ({ fluid = false, children }) => {
  return (
    <div className={`${fluid ? styles['container-fluid'] : styles['container']}`}>{children}</div>
  );
};

export default Container;
