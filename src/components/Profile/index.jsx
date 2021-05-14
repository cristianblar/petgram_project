import React, { useContext } from 'react';

import { Context } from '../../Context';

import ProfileLogo from '../ProfileLogo/index';

import { MainContainer, Title, Button } from './styles';

const Profile = () => {
  const { closeSession } = useContext(Context);

  return (
    <MainContainer>
      <Title>Account</Title>
      <ProfileLogo />
      <Button type="button" onClick={closeSession}>
        Sign out
      </Button>
    </MainContainer>
  );
};

export default Profile;
