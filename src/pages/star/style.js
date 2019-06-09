import styled from 'styled-components'
import pig from './img/pig.jpg'
export const Warpper = styled.div`
`

export const Header = styled.div`
  height: 50px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(64,108,255);
  color: #fff;
`

export const HeaderLeft = styled.div`
  height: 45px;
  width: auto;
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled.div`
  height: 45px;
  width: auto;
  font-size: 18px;
  line-height: 45px;
  margin-left: 10px;
`

export const HeaderRight = styled.div`
  height: 45px;
  width: auto;
  font-size: 18px;
  line-height: 45px;
  margin-right: 14px;
`

export const ItemListWarpper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const ItemBox = styled.div`
  /* width: 320px; */
  height: auto;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px #eee;
  margin-bottom: 20px;
  color: #000 !important;
`

export const ItemHeader = styled.div`
  width: 100%;
  height: 45px;
  line-height: 30px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const ItemContent = styled.div`
  width: 100%;
  height: auto;
  padding: 0 10px 10px 20px;
`

export const ItemAvatar = styled.img.attrs({
  src: pig
})`
  height: 40px;
  width: 40px;
  border-radius: 100%;
`

export const ItemHeaderRight = styled.div`
  height: 40px;
  display: flex;
`

export const InfoBox = styled.div`
  height: 40px;
  width: auto;
  margin-left: 10px;
`

export const ItemName = styled.div`
  font-size: 14px;
  height: 20px;
  line-height: 20px;
`

export const ItemTime = styled.div`
  height: 20px;
  line-height: 20px;
`

export const ItemHeaderHot = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HotRate = styled.div`
  height: 20px;
  line-height: 20px;
  color: red;
  margin-right: 4px;
  width: auto;
`