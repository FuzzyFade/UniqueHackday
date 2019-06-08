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
  background-size: 96px;
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

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
`

export const UserLayOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px
`

export const SonNumber = styled.div`
  font-size: 20px;
  color: #fff;
`

export const MomNumber = styled.div`
  font-size: 24px;
  color: #fff;
`

export const Line = styled.div`
  color: #fff;
  font-size: 17px;
  margin: 8px 0;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 50px;
`

export const TopContent = styled.div`
  background: ${theme.mainColor};
`

export const Circle = styled.div`
  margin: 0 -25px 0 -25px;
  height: 90px;
  margin-top: -1px;
  background: ${theme.mainColor};
  border-radius: 50% / 0 0 100% 100%;
`

export const TopLayOut = styled.div`
  position: fixed;
  width: 100%;
  filter: drop-shadow(0 6px 12px rgba(149,149,149,0.6));
`

export const MainContent = styled.div`
  margin-top: 340px;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0 6px 12px rgba(149,149,149,0.5));
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
`

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
`

export const Num = styled.div`
  color: #00a2ff;
  font-size: 18px;
`

export const CardText = styled.div`
  font-size: 15px;
  margin-top: 4px;
  margin-bottom: 8px;
  color: #969696
`
