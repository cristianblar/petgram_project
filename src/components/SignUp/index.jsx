import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import { Context } from '../../Context';

import Loading from '../Loading';
import Form from '../Form';
import RegistrationLogo from '../RegistrationLogo/index';

import { Figure, Paragraph } from './styles';

const REGISTER_USER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const { logUser } = useContext(Context);

  const history = useHistory();

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted: ({ signup }) => {
      logUser(signup); // signup is the JWT returned by GQL
      history.push('/');
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
    registerUser({
      variables: {
        input: { email: formData.email, password: formData.password },
      },
    });
  };

  if (loading) return <Loading />;

  return (
    <>
      <Figure>
        <RegistrationLogo />
      </Figure>
      <Paragraph>
        Sign up with your email to create your Petgram account!
      </Paragraph>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        buttonText="Sign Up"
      />
      {error && (
        <Paragraph className="error-message">
          It wasn&apos;t possible to create a Petgram account with that email.
          Please, try again.
        </Paragraph>
      )}
    </>
  );
};

export default SignUp;
