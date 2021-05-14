import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import Loading from '../Loading/index';
import Error from '../Error';
import PhotoCard from '../PhotoCard/index';

const PHOTOS_QUERY = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const PhotoCardsList = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(PHOTOS_QUERY, {
    variables: { categoryId: id },
  });

  if (loading) return <Loading />;

  if (!loading && (error || !data.photos.length)) return <Error />;

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          uniqueId={photo.id}
          src={photo.src}
          likes={photo.likes}
          liked={photo.liked}
        />
      ))}
    </ul>
  );
};

export default PhotoCardsList;
