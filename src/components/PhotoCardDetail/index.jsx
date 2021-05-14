import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';

import Loading from '../Loading/index';
import Error from '../Error';
import PhotoCard from '../PhotoCard';

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

  const { loading, error, data } = useQuery(SINGLE_PHOTO_QUERY, {
    variables: { id },
    fetchPolicy: 'network-only',
  });

  if (loading) return <Loading />;

  if (!loading && (error || !data.photo.id)) return <Error />;

  return (
    <PhotoCard
      uniqueId={data.photo.id}
      src={data.photo.src}
      likes={data.photo.likes}
      liked={data.photo.liked}
      detailPage
    />
  );
};

export default PhotoCardDetail;
