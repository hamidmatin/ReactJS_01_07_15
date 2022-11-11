import React from 'react';
import styles from './button.module.css';

export const Button = ({ value, isEquals, onClick }) => {
  return (
    <button className={`${styles.button} ${isEquals ? styles.equals : null}`} onClick={onClick}>
      {value}
    </button>
  );
};