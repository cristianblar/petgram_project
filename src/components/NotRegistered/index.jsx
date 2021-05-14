import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { Helmet } from 'react-helmet';

import { Context } from '../../Context';

import Loading from '../Loading';
import Form from '../Form';
import SignInLogo from '../SignInLogo/index';

import { Figure, Paragraph, MiniParagraph } from './styles';

const LOGIN_USER = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const NotRegistered = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const { logUser } = useContext(Context);

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: ({ login }) => {
      logUser(login); // login is the JWT returned by GQL
    },
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({
      variables: {
        input: { email: formData.email, password: formData.password },
      },
    });
  };

  if (loading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Petgram - Sign in!</title>
      </Helmet>
      <Figure>
        <SignInLogo />
      </Figure>
      <Paragraph>
        Sign in with your Petgram account to have access to the whole pets&apos;
        world!
      </Paragraph>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        buttonText="Sign In"
      />
      {!error && (
        <MiniParagraph>
          Don&apos;t have an account? <Link to="/signup">Sign up!</Link>
        </MiniParagraph>
      )}
      {error && (
        <Paragraph className="error-message">
          Something went wrong... Please, check the E-mail address and password
          and try again.
        </Paragraph>
      )}
    </>
  );
};

export default NotRegistered;
