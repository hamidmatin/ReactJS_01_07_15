import React from 'react'
import styles from './screen.module.css'

export const Screen = ({ value }) => {
  return (
    <div className={styles['screen']}> 
        {value}
    </div>
  )
}
