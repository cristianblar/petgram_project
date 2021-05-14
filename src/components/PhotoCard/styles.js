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
  &.detail-page {
    height: 60vh;
    margin-bottom: 24px;
    max-width: unset;
    padding: 0 12px;
  }
`;
export const Image = styled.img`
  ${fadeIn()};
  border-radius: 10px;
  box-shadow: 0 6px 10px 6px rgba(0, 0, 0, 0.4);
  object-fit: cover;
  object-position: center;
  width: 100%;
  &.detail-page {
    height: 100%;
    width: 100%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 8px auto;
  padding-top: 4px;
  padding-bottom: 36px;
  & svg {
    margin-right: 4px;
  }
`;
