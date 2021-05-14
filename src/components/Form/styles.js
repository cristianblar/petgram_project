import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px 0 0;
  width: 100%;
`;

export const Input = styled.input`
  background-color: #e3ab4591;
  border: 2px solid #74411f;
  border-radius: 4px;
  color: #603417;
  display: block;
  height: 36px;
  margin: 0 auto 12px;
  padding: 8px;
  width: 90%;
  &::placeholder {
    color: #60341791;
  }
  &:focus {
    outline: 2px solid #e3ab45;
  }
`;

export const InputButton = styled.input`
  background-color: #74411f;
  border: 2px solid #74411f;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  height: 36px;
  margin: 0 auto;
  padding: 8px;
  width: 90%;
`;
