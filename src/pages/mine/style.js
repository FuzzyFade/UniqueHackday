import styled from 'styled-components'

const theme = {
  mainColor: '#2f54eb',
  mainWhite: '#f4f4f4'
}

export const Wrapper = styled.div`
  background: #efefef;
`

export const Name = styled.div`
  font-size: 16px;
  color: #fff;
`

export const Navigation = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 45px;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateZ(0);
`

export const UserLayOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 60px 15px 15px 15px;
  margin-top: -1px;
  background: ${theme.mainColor};
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
  margin: 2px 0;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 50px;
`

export const Circle = styled.div`
  margin: 0 -25px 0 -25px;
  height: 90px;
  margin-top: -1px;
  border-radius: 50% / 0 0 ${props => props.na*100}% ${props => props.na*100}%;
  background: ${theme.mainColor};
`

export const TopLayOut = styled.div`
  position: fixed;
  width: 100%;
  filter: drop-shadow(0 6px 12px rgba(149,149,149,0.6));
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const TopNav = styled.div`
  position: fixed;
  z-index: 12;
  width: 100%;
  height: 45px;
  background: ${theme.mainColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0 6px 12px rgba(149,149,149,0.6));
`

export const UserContent = styled.div`
  transform: translate(0,${props=>-1.6*props.placeTop}px)
`
