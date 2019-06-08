import styled from 'styled-components'

const theme = {
  mainColor: '#2f54eb',
  mainWhite: '#f4f4f4'
}

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #efefef;
`

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #ccd7e7;
  border-radius: 100px;
  background: url("https://raw.githubusercontent.com/FuzzyFade/CodeGame/master/src/assets/avatars/2.png");
  background-size: 100px;
`

export const Name = styled.div`
  margin: 16px auto 0 auto ;
  font-size: 16px;
  color: #fff;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
`

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
`

export const TopContent = styled.div`
  background: ${theme.mainColor};
`

export const Circle = styled.div`
  margin: 0 -20px 0 -20px;
  height: 80px;
  margin-top: -1px;
  background: ${theme.mainColor};
  border-radius: 50% / 0 0 100% 100%;
`

export const TopLayOut = styled.div`
  filter: drop-shadow(0 6px 12px rgba(149,149,149,0.6));
`
