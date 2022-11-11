import React from 'react';
import styles from './base-page.module.css';

const BasePage = ({ title, className, children }) => {
  return (
    <div className={`${styles['base-page']} ${className}`}>
      <h2 className={styles['title']}>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
};

export default BasePage;
