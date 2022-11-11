import React from 'react';
import { NavLink } from 'react-router-dom'

export const NavItem = ({ content, to }) => {
  return (
    <li>
        <NavLink to={to}>{content}</NavLink>
      {/* <a href={to}>{content}</a> */}
    </li>
  );
};
