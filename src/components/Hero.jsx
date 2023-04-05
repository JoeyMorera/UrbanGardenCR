import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroELement';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer >
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems className='mt-28 px-10 lg:mt-20 lg:px-8'>
          <HeroH1>Bienvenidos!  </HeroH1>
          <HeroP>URBAN GARDEN CR</HeroP>
          <HeroBtn>PRODUCTOS</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
