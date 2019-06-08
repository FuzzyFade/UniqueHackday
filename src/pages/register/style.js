import styled from 'styled-components'
import logo from './img/logo.png';
import btnBg from './img/btnBg.png';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`
export const Content = styled.div`
  max-width: 420px;
  height: 60%;
`
export const Logo = styled.div`
  max-width: 320px;
  width: 320px;
  height: 100px;
  background: url(${logo}) center;
  background-size: 100% 100%;
  margin:0 auto 88px;
`
export const InputStyle = styled.div`
  input {
    width: 350px;
    height: 35px;
    padding-left: 10px;
    border-radius: 10px;
    margin-bottom: 50px;
  }
  input:focus {
    outline: none;
  }

`
export const LinkContent = styled.div`
  width: 365px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none
  }
`
export const Button = styled.div`
   width: 350px;
   height: 100px;
   margin-top: 50px;
   border-radius: 20px;
   line-height: 65px;
   text-align: center;
   background: url(${btnBg});
   background-size: 100%; 
`