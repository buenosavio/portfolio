import { Theme } from '../../theme'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
  max-width: 100%;
  margin: 0 auto;  
`

export const Ul = styled.ul`
  -webkit-padding-start: 0; 
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 27px 188px; 
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Li = styled.li`
  color: white;  
  display: inline;
  list-style: none;  
  cursor: pointer;  
`

export const RightItems = styled.div`  
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
    justify-content: space-between;
    min-height: 100px;
  }
`