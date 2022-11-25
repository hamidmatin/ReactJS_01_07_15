import React from 'react'
import styles from './users-table-view.module.css'

const TableCol = ({isTitle, children}) => {
  return (
    <div className={`${styles['table-col']} ${isTitle ? styles['title'] : null}` }>{children}</div>
  )
}

export default TableCol