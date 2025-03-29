import { keyframes, styled } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.span`
  display: inline-flex;
  width: 32px;
  height: 32px;
  border: 2px solid transparent;
  border-radius: 50%;
  border-top-color: #000;
  animation: ${spin} 1s ease-in-out infinite;
  -webkit-animation: ${spin} 1s ease-in-out infinite;
`;
