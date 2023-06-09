import React from 'react';
import { Nav, NavLink, NavIcon } from './NavbarElements';
import logo from '../../src/assets/page/urban.png'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'><img src={logo} alt="logo de la empresa" 
                  className='w-48 mt-4 ml-[76px]  sm:w-60 sm:pt-60' /></NavLink>
        <NavIcon onClick={toggle} className='top-72 right-32 text-4xl 
                                            lg:top-20 lg:right-20 lg:text-5xl'>
          <p>Menu</p>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
