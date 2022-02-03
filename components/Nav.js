import Link from 'next/link';
import React from 'react';
import navStyle from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/rockets'>Rockets</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
