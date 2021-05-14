import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  align-items: center;
  background: #e3ab45;
  border-top: 2px solid #603417;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 100;
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  color: #bc8540;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &.active {
    color: #74411f;
    &::after {
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 3rem;
    }
  }
`;
