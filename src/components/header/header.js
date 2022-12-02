import React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from '../nav-bar'
import styles from './header.module.css'

const Header = () => {
  const counter = useSelector((state) => state.counter.value)
  return (
    <header className={styles['header']}>
      <h1 className={styles['title']}>React Case Study</h1>
      <p style={{ textAlign: 'center' }}>Counter: {counter}</p>
      <NavBar />
    </header>
  )
}

export default Header
