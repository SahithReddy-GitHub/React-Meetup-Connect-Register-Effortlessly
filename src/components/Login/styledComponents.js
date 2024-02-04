import styled from 'styled-components'

export const Bg = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  font-family: 'roboto';
`
export const LoginBg = styled.div`
  height: 90vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CardLogin = styled.div`
  display: flex;
  background-color: transparent;
  border-radius: 20px;
  width: 60%;
  height: 80%;
`
export const LoginImgCon = styled.div`
  padding: 50px;
  width: 60%;
`
export const ImgLogin = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`
export const LoginCon = styled.div`
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
`
export const LoginImg = styled.img`
  width: 35%;
  margin-bottom: 40px;
`
export const WelHead = styled.h1`
  color: #152850;
  font-size: 36px;
  align-self: flex-start;

  margin-bottom: 20px;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const FormItem = styled.div`
  margin-bottom: 15px;
`
export const LoginLabel = styled.label`
  color: #183b56;
  font-size: 14px;
  font-weight: 500;
`
export const LoginInput = styled.input`
  margin-top: 5px;
  background-color: transparent;
  padding: 10px;
  font-size: 12px;
  color: #152850;
  font-weight: 500;
  outline: none;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
`
export const Select = styled.select`
  margin-top: 5px;
  background-color: transparent;
  padding: 10px;
  font-size: 12px;
  color: #152850;
  font-weight: 500;
  outline: none;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
`
export const LoginBtn = styled.button`
  background-color: #6366f1;
  padding: 8px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  color: #f8fafc;
  width: 120px;
`
export const LoginError = styled.p`
  margin-top: 3px;
  font-size: 12px;
  color: #ff0b37;
  font-weight: 600;
`
