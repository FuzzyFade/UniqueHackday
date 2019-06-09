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
  display: flex;
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

export const Blanket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  background: linear-gradient(to bottom, rgb(64, 108, 255), rgb(85, 84, 255));
`

export const ItemBubble = styled.div`
  height: 35px;
  padding: 4px 8px;
  max-width: 400px;
  min-width: 300px;
  margin: 8px 0;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #eee;
  text-align: center;
  font-size: 14px;
`

export const AssociateBtn = styled.div`
  margin-top: 20px;
  height: 36px;
  max-width: 400px;
  min-width: 300px;
  padding: 2px 10px;
  font-size: 18px;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 20px;
  text-align: center;
`

export const LabelInput = styled.input.attrs({
  placeholder: '请输入你要联想的内容'
})`
  font-size: 18px;
  height: 80px;
  width: 100%;
  margin-bottom: 16px;
  padding: 0 20px;
  border: none;
  color: #fff;
  border-bottom: 1px solid white;
  background: rgb(64,108,255);
  &:focus{
    outline:none
  }
  ::-webkit-input-placeholder{
    color: #fff
  }  
`

