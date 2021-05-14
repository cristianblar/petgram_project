import React from 'react';

import { MainContainer, Image, Text } from './styles';

const NotFound = () => (
  <MainContainer>
    <Image
      src="https://i.imgur.com/lq2O7yv.jpg"
      alt="Angry cat"
      width="300"
      height="285"
    />
    <Text>This page doesn&apos;t exist!</Text>
  </MainContainer>
);

export default NotFound;
