import styled from 'styled-components'
import pig from '../../img/pig.jpg'

export const ListWarpper = styled.div`
  height: auto;
  width: 100%;
`

export const ItemBox = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #bbb;
  display: flex;
  align-items: center;
`

export const ItemAvatar = styled.img.attrs({
  src: pig
})`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  margin: 10px 0 10px 16px;
`

export const ItemName = styled.div`
  height: 100%;
  width: auto;
  font-size: 20px;
  margin-left: 6px;
  line-height: 46px;
`