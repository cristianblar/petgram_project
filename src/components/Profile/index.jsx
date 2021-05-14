import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { Context } from '../../Context';

import ProfileLogo from '../ProfileLogo/index';

import { MainContainer, Title, Button } from './styles';

const Profile = () => {
  const { closeSession } = useContext(Context);

  return (
    <>
      <Helmet>
        <title>Petgram - Account</title>
        <meta
          name="description"
          content="Your Petgram account management section"
        />
      </Helmet>
      <MainContainer>
        <Title>Account</Title>
        <ProfileLogo />
        <Button type="button" onClick={closeSession}>
          Sign out
        </Button>
      </MainContainer>
    </>
  );
};

export default Profile;
