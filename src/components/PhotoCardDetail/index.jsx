import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Helmet } from 'react-helmet';

import Loading from '../Loading/index';
import Error from '../Error';
import PhotoCard from '../PhotoCard';

import { Context } from '../../Context';

const SINGLE_PHOTO_QUERY = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const PhotoCardDetail = () => {
  const { id } = useParams();

  const { isLogged } = useContext(Context);

  const { loading, error, data } = useQuery(SINGLE_PHOTO_QUERY, {
    variables: { id },
    fetchPolicy: 'network-only',
  });

  if (loading) return <Loading />;

  if (!loading && (error || !data.photo.id)) return <Error />;

  return (
    <>
      <Helmet>
        <title>Petgram - Pet detail</title>
        <meta
          name="description"
          content="The account section where you can find your liked pets"
        />
      </Helmet>
      <PhotoCard
        uniqueId={data.photo.id}
        src={data.photo.src}
        likes={data.photo.likes}
        liked={data.photo.liked}
        isLogged={isLogged}
        detailPage
      />
    </>
  );
};

export default PhotoCardDetail;
