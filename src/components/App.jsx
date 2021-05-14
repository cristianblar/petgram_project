import React, { useContext, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Logo from './Logo/index';
import CategoriesList from './CategoriesList';
import PhotoCardsList from './PhotoCardsList/index';
import NavBar from './NavBar';

// import Favorites from './Favorites';
// import Profile from './Profile';
// import SignUp from './SignUp';
// import PhotoCardDetail from './PhotoCardDetail';
import Loading from './Loading';
import NotRegistered from './NotRegistered';
import NotFound from './NotFound';

import { Context } from '../Context';

import GlobalStyle from '../styles/GlobalStyles';

// LazyLoading:
const Favorites = React.lazy(() => import('./Favorites/index'));
const Profile = React.lazy(() => import('./Profile'));
const SignUp = React.lazy(() => import('./SignUp'));
const PhotoCardDetail = React.lazy(() => import('./PhotoCardDetail'));

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
        <Suspense fallback={<Loading />}>
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
        </Suspense>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
