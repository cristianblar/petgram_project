import styled from 'styled-components';

import { fadeIn } from '../../styles/animations';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  margin-bottom: 18px;
  padding: 8px 0;
  width: 100%;
  &.fixed {
    ${fadeIn('300ms')}
    background: #fff;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    opacity: 0.9;
    padding: 12px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(0.6);
    transition: 300ms;
    z-index: 1;
  }
  &:hover {
    opacity: 1;
  }
  &.invisible {
    display: none;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
