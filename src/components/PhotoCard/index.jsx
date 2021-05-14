/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

import { Article, ImageWrapper, Image, Button } from './styles';

const DEFAULT_IMAGE = `https://i.imgur.com/F2NgFBg.jpeg`;

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

const PhotoCard = ({
  uniqueId,
  liked,
  likes = 0,
  src = DEFAULT_IMAGE,
  detailPage,
  isLogged,
}) => {
  const [visibility, setVisibility] = useState(false);

  const history = useHistory();

  const element = useRef(null);

  const [toggleLike] = useMutation(LIKE_PHOTO);

  const handleLikeClick = () =>
    isLogged
      ? toggleLike({
          variables: { input: { id: uniqueId } },
        })
      : history.push('/signin');

  // LazyLoading for pictures
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

  return (
    <Article ref={element}>
      {visibility && (
        <>
          <Link to={`/detail/${uniqueId}`}>
            <ImageWrapper className={detailPage ? 'detail-page' : ''}>
              <Image
                className={detailPage ? 'detail-page' : ''}
                src={src}
                alt="Animal"
              />
            </ImageWrapper>
          </Link>
          <Button type="button" onClick={handleLikeClick}>
            {liked ? (
              <MdFavorite size="32px" />
            ) : (
              <MdFavoriteBorder size="32px" />
            )}
            {likes} {likes === 1 ? 'like!' : 'likes!'}
          </Button>
        </>
      )}
    </Article>
  );
};

export default PhotoCard;
