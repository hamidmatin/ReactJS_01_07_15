import React from "react";
import styles from './users-table-view.module.css'

const TableRow = ({ children }) => {
  return <div className={styles['table-row']}>{children}</div>;
};

export default TableRow;
