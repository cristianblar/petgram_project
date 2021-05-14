import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { MdFavorite } from 'react-icons/md';

import { Context } from '../../Context';

import Loading from '../Loading/index';
import Error from '../Error/index';
import FavoritesLogo from '../FavoritesLogo/index';

import {
  MainContainer,
  Title,
  Message,
  PhotosContainer,
  PhotosTitle,
  PhotosList,
  ImageContainer,
  Image,
} from './styles';

const FAVORITES_QUERY = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const Favorites = () => {
  const { closeSession } = useContext(Context);

  const { loading, error, data } = useQuery(FAVORITES_QUERY, {
    fetchPolicy: 'network-only',
    onError: () => closeSession(),
  });

  if (error) return <Error />;

  if (loading) return <Loading />;

  if (!loading && data && !data.favs.length)
    return (
      <MainContainer>
        <FavoritesLogo />
        <Title>There aren&apos;t favorites yet 😢</Title>
        <Message>
          Explore the pictures and pick your favorites with a Like!
          <br />
          <br />
          <MdFavorite />
        </Message>
      </MainContainer>
    );

  return (
    <PhotosContainer>
      <PhotosTitle>Favorite Pets 🐶</PhotosTitle>
      <PhotosList>
        {data.favs.map((fav) => (
          <li key={fav.id}>
            <Link to={`/detail/${fav.id}`}>
              <ImageContainer>
                <Image src={fav.src} alt="pet" />
              </ImageContainer>
            </Link>
          </li>
        ))}
      </PhotosList>
    </PhotosContainer>
  );
};

export default Favorites;
