import React from 'react';
import styles from './button-box.module.css';

export const ButtomBox = ({ children }) => {
  return <div className={styles['button-box']}>{children}</div>;
};
