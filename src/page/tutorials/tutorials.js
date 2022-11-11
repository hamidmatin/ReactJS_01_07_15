import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BasePage } from '../../components/base-page'
import './tutorials.css'

const TutorialsPage = () => {
  return (
    <BasePage title={'Tutorials'}>
      <div className='toturials-wrapper'>
        <aside className='tutorials-nav'>
          <ul>
            <li>
              <NavLink to='/tutorials' end>Introduction</NavLink>
            </li>
            <li>
              <NavLink to='react-modules'>React Module Intro</NavLink>
            </li>
            <li>
              <NavLink to='function-component'>Function Components</NavLink>
            </li>
            <li>
              <NavLink to='class-component'>Class Components</NavLink>
            </li>
            <li>
              <NavLink to='css-in-react'>CSS In React</NavLink>
            </li>
            <li>
              <NavLink to='class-modules'>Class Modules</NavLink>
            </li>
            <li>
              <NavLink to='event-state-cc'>Event &amp; State in CC</NavLink>
            </li>
            <li>
              <NavLink to='cc-lifecycle'>CC Lifecycle</NavLink>
            </li>
      
          </ul>
        </aside>
        <div className='tutorials-content'>
          <Outlet />
        </div>
      </div>
    </BasePage>
  )
}

export default TutorialsPage