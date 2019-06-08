import styled from 'styled-components'

export const ItemListWarpper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const ItemBox = styled.div`
  width: 320px;
  height: auto;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 3px 3px #eee;
  margin-bottom: 20px;
`

export const ItemHeader = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
`

export const ItemContent = styled.div`
  width: 100%;
  height: auto;
  padding: 0 10px 4px 20px;
`
