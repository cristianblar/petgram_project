import React, { createContext, useState } from 'react';
import { useApolloClient } from '@apollo/client';

export const Context = createContext();

export const UserContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState(() =>
    window.sessionStorage.getItem('token')
  );

  const apolloClient = useApolloClient();

  const logUser = (token) => {
    setIsLogged(true);
    window.sessionStorage.setItem('token', token);
    apolloClient.resetStore();
    window.location.href = '/profile';
  };

  const closeSession = () => {
    setIsLogged(false);
    window.sessionStorage.removeItem('token');
    apolloClient.clearStore();
    window.location.href = '/';
  };

  return (
    <Context.Provider value={{ isLogged, logUser, closeSession }}>
      {children}
    </Context.Provider>
  );
};
