import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaIndent } from 'react-icons/fa';


export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  cursor: pointer;
  color: #fff;

  p {
    // transform: translate(-175%, 50%);
    font-weight: bold;
  }
`;

// export const Bars = styled(FaIndent)`
//   font-size: 3rem;
//   transform: translate(-50%, 1%);
// `;
