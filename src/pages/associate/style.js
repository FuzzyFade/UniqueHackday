import styled from 'styled-components'

export const Warpper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  height: 50px;
  width: 100%;
  /* border-bottom: 1px solid #eee; */
  display: flex;
  /* justify-content: space-between; */
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

export const Blanket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  background: linear-gradient(to bottom, rgb(64, 108, 255), rgb(85, 84, 255));
`

export const BubbleBox = styled.div`
  height: auto;
  width: 100%;
  padding: 20px 10px;
  display: flex;
`

export const ItemBubble = styled.div`
  height: 30px;
  padding: 3px 8px;
  margin-right: 8px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #eee;
`

export const AssociateBtn = styled.div`
  height: 36px;
  width: auto;
  padding: 2px 10px;
  font-size: 18px;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 20px;
`