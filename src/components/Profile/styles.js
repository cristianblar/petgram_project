import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 100%;
`;

export const Title = styled.h1`
  color: #74411f;
  font-size: 3rem;
  margin-top: 1.8rem;
  margin-bottom: 6rem;
`;

export const Button = styled.button`
  background-color: #74411f;
  border: 2px solid #74411f;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  height: 36px;
  margin: 6rem auto 0;
  padding: 8px;
  width: 90%;
`;
