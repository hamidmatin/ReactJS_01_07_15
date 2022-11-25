import React from 'react'
import styles from './users-table-view.module.css'

const EmptyRow = () => {
  return (
    <div className={styles['empty-row']}>List is Empty</div>
  )
}

export default EmptyRow