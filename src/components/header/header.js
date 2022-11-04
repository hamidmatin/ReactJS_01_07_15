import React from 'react';
import { NavBar } from '../nav-bar';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['title']}>React Case Study</h1>
      <NavBar />
    </header>
  );
};

export default Header;
