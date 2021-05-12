import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(4px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;
