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
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.div`
  width: 199px;
  height: 59.29px;
  background: url(${logo}) center;
  background-size: 100%;
  margin:0 auto 88px;
`

export const InputStyle = styled.div`
  text-align: center;
  max-width: 288px;
  min-width: 280px;
`

export const SmallBtn = styled.button`
  width: 85px;
  height: 32px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #333;
  background: white
`

export const Button = styled.div`
  max-width: 300px;
  min-width: 295px;
  height: 68px;
  margin-top: 80px;
  line-height: 56px;
  text-align: center;
  background: url(${btnBg});
  background-size: 100%; 
  color: #fff
`

export const ConfirmCode = styled.div`
  text-align: center;
  max-width: 288px;
  min-width: 280px;
  display: flex;
  align-items: center;
`

export const Text = styled.div`
  color: #686868;
  letter-spacing: .8px;
`
