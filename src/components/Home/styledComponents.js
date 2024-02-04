import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Bg = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  font-family: 'roboto';
`
export const HomeBg = styled.div`
  padding-top: 50px;
  height: 90vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WelcomeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Head = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: #334155;
  margin: 5px;
`
export const Para = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #7b8794;
  margin-bottom: 20px;
`
export const CustomLink = styled(Link)`
  text-decoration: none;
`
export const Button = styled.button`
  width: 100px;
  cursor: pointer;
  background-color: #3b82f6;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  padding: 5px;
`
export const GreetHead = styled.h1`
  font-size: 44px;
  font-weight: 700;
  color: #2563eb;
  margin: 0px;
  padding: 0px;
`
export const GreetPara = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #475569;
`
export const CustomImg = styled.img`
  margin-top: 35px;
  width: 40%;
  height: 50%;
`
