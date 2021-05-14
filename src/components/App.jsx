import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Logo from './Logo/index';
import CategoriesList from './CategoriesList';
import PhotoCardsList from './PhotoCardsList/index';
import PhotoCardDetail from './PhotoCardDetail';
import NavBar from './NavBar';

import Favorites from './Favorites';
import Profile from './Profile';
import SignUp from './SignUp';
import NotRegistered from './NotRegistered';
import NotFound from './NotFound';

import { Context } from '../Context';

import GlobalStyle from '../styles/GlobalStyles';

function App() {
  const { isLogged } = useContext(Context);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route exact path={['/', '/pet/:id']}>
          <CategoriesList />
          <PhotoCardsList />
        </Route>
        <Route path="/detail/:id">
          <PhotoCardDetail />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          {isLogged ? <Redirect to="/profile" /> : <NotRegistered />}
        </Route>
        <Route path="/favorites">
          {isLogged ? <Favorites /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/profile">
          {isLogged ? <Profile /> : <Redirect to="/signin" />}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
