import React from 'react';
import PhotoCard from '../PhotoCard/index';

const ListOfPhotoCards = () => (
  <ul>
    {[1, 2, 3, 4, 5, 6].map((id) => (
      <PhotoCard key={id} uniqueId={id} />
    ))}
  </ul>
);

export default ListOfPhotoCards;
