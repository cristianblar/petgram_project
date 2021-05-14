import React, { createContext, useState } from 'react';
import { useApolloClient } from '@apollo/client';

export const Context = createContext();

export const UserContext = ({ children }) => {
  const [isLogged, setIsLogged] = useState(() =>
    window.sessionStorage.getItem('token')
  );

  const apolloClient = useApolloClient();

  const logUser = (token) => {
    window.sessionStorage.setItem('token', token);
    setIsLogged(token);
    apolloClient.clearStore();
    window.location.href = '/profile';
  };

  const closeSession = () => {
    window.sessionStorage.removeItem('token');
    setIsLogged(false);
    apolloClient.clearStore();
    window.location.href = '/';
  };

  return (
    <Context.Provider value={{ isLogged, logUser, closeSession }}>
      {children}
    </Context.Provider>
  );
};
