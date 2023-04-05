import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <a href="#nosotros" className='flex items-center justify-center text-3xl text-black cursor-pointer'>Nosotros</a>
        <a href="#servicios" className='flex items-center justify-center text-3xl text-black cursor-pointer'>Servicios</a>
        <a href="#contacto" className='flex items-center justify-center text-3xl text-black cursor-pointer'>Contacto</a>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
