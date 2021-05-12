import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from './Logo/index';
import CategoriesList from './CategoriesList';
import PhotoCardsList from './PhotoCardsList/index';

import GlobalStyle from '../styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <CategoriesList />
      <PhotoCardsList />
    </BrowserRouter>
  );
}

export default App;
