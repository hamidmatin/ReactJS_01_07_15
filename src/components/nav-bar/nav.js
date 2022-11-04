import React from 'react';
import styles from './nav-bar.module.css';

export const Nav = ({ children }) => {
  return <ul className={styles['nav']}>{children}</ul>;
};
