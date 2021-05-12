import styled from 'styled-components';

import { fadeIn } from '../../styles/animations';

export const Article = styled.article`
  min-height: 200px;
`;

export const ImageWrapper = styled.figure`
  margin: 0 auto;
  max-width: 480px;
  width: 100%;
  padding: 0px 12px;
`;
export const Image = styled.img`
  ${fadeIn()};
  border-radius: 10px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  object-position: center;
  width: 100%;
`;
export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`;
