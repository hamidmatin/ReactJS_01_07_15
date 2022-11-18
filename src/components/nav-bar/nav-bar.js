import React from 'react';
import { Nav } from './nav';
import styles from './nav-bar.module.css';
import { NavItem } from './nav-item';

const NavBar = () => {
  return (
    <nav className={styles['navbar']}>
      <Nav>
        <NavItem content='Home' to={'/'}/>
        <NavItem content='Tutorials' to={'/tutorials'}/>

        {/* <NavItem content='React Modules' to={'/react-modules'}/>
        <NavItem content='Function Components' to={'/function-component'}/>
        <NavItem content='Class Components' to={'/class-component'}/>
        <NavItem content='CSS in React' to={'/css-in-react'}/>
        <NavItem content='Class Modules' to={'/class-modules'}/>
        <NavItem content='Event & State in CC' to={'/event-state-cc'}/>
        <NavItem content='CC Lifecycle' to={'/cc-lifecycle'}/> */}
        <NavItem content='Calculator' to={'/calculator'}/>
        <NavItem content='Calculator FC' to={'/calculator-fc'}/>
      </Nav>
    </nav>
  );
};

export default NavBar;
