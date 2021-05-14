import styled from 'styled-components';

export const Figure = styled.figure`
  margin: 12px 0;
  text-align: center;
  width: 100%;
`;

export const Paragraph = styled.p`
  color: #603417;
  font-size: 1.6rem;
  margin: 12px auto;
  text-align: center;
  width: 90%;
  &.error-message {
    color: #e20000de;
    font-weight: 500;
  }
`;
