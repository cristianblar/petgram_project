import React from 'react';

import { MdHome, MdFavorite, MdAccountCircle } from 'react-icons/md';

import { Nav, StyledNavLink } from './styles';

const SIZE = '30px';

const NavBar = () => (
  <Nav>
    <StyledNavLink exact to="/">
      <MdHome size={SIZE} />
    </StyledNavLink>
    <StyledNavLink to="/favorites">
      <MdFavorite size={SIZE} />
    </StyledNavLink>
    <StyledNavLink to="/profile">
      <MdAccountCircle size={SIZE} />
    </StyledNavLink>
  </Nav>
);

export default NavBar;
