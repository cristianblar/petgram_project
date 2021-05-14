import styled from 'styled-components';

export const Figure = styled.figure`
  margin: 0 0 12px;
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

export const MiniParagraph = styled.p`
  color: #603417;
  font-size: 1.4rem;
  margin: 12px auto;
  text-align: center;
  width: 90%;
  & a {
    color: #603417;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
