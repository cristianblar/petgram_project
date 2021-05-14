import styled from 'styled-components';

import { fadeIn } from '../../styles/animations';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 70vh;
  width: 100%;
`;

export const Title = styled.h2`
  color: #e3ab45;
  font-size: 2.4rem;
  font-weight: bold;
`;

export const Message = styled.p`
  color: #603417;
  font-size: 1.6rem;
  text-align: center;
`;

export const PhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 50px;
  width: 100%;
`;

export const PhotosTitle = styled.h1`
  color: #74411f;
  font-size: 3rem;
  margin-top: 1.8rem;
  margin-bottom: 3.6rem;
`;

export const PhotosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

export const ImageContainer = styled.figure`
  flex: 1 1;
  margin-bottom: 24px;
  min-width: 140px;
  min-height: 140px;
  max-width: 220px;
  max-height: 220px;
`;

export const Image = styled.img`
  ${fadeIn()};
  border-radius: 12px;
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
