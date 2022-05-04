import styled from 'styled-components'
import { Theme } from './theme'

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  background: ${Theme.gradient.buttonGradient};
  border-radius: 6px;
  border: none;
  width: 105px;
  height: 45px;
  transition: 1s;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`