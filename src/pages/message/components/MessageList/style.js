import styled from 'styled-components'
import pig from '../../img/pig.jpg'
export const Warpper = styled.div`
`

export const ItemBox = styled.div`
  height: auto;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

export const ItemAvatar = styled.img.attrs({
  src: pig
})`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin: 10px 16px;
`

export const ItemContent = styled.div`
  height: auto;
`

export const ItemContentHeader = styled.div`
  height: 22px;
  width: auto;
  display: flex;
`

export const ItemName = styled.div`
  height: 22px;
  width: auto;
  font-size: 14px;
`

export const ItemDescQoute = styled(ItemName)`
  color: #aaa;
  margin-left: 5px;
`

export const ItemPrompt = styled(ItemName)`
`

export const ItemDate = styled(ItemName)`
`
