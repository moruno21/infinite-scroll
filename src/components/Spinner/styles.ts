import styled from 'styled-components'

export const Component = styled.span`
  animation: rotation 1s linear infinite;
  border: 0.5rem solid #a6e3e9;
  border-right-color: white;
  border-radius: 50%;
  border-top-color: white;
  box-sizing: border-box;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
