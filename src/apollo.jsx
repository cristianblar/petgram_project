import React from 'react';
import {
  ApolloLink,
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import API_URL from './constants';

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`,
});

// Auth "middleware"
const authMw = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token');
  const authorization = token ? `Bearer ${token}` : '';
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization,
    },
  }));
  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    onError(({ networkError }) => {
      if (networkError && networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token');
        client.resetStore();
        window.location.href = '/profile';
      }
    }),
    authMw,
    httpLink,
  ]),
});

const Apollo = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
