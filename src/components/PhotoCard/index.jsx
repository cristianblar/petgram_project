/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

import useLocalStorage from '../../hooks/useLocalStorage';

import { Article, Button, ImageWrapper, Image } from './styles';

const DEFAULT_IMAGE = `https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png`;

const PhotoCard = ({ uniqueId, likes = 0, src = DEFAULT_IMAGE }) => {
  const [visibility, setVisibility] = useState(false);

  const [like, setLike] = useLocalStorage(uniqueId, false);

  const element = useRef(null);

  // LazyLoading
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setVisibility(true);
        intersectionObserver.disconnect();
      }
    });
    intersectionObserver.observe(element.current);
  }, [element]);

  const LikeIcon = like ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {visibility && (
        <>
          <Link to="#">
            <ImageWrapper>
              <Image src={src} alt="Animal" />
            </ImageWrapper>
          </Link>
          <Button type="button" onClick={() => setLike(!like)}>
            <LikeIcon size="32px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};

export default PhotoCard;
