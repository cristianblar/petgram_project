import React from 'react';

import { StyledLink, Image } from './styles';

const DEFAULT_IMAGE = `https://i.imgur.com/dJa0Hpl.jpeg`;

const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <StyledLink to={path}>
    <Image src={cover} alt="Category" />
    {emoji}
  </StyledLink>
);

export default Category;
