import styled from 'styled-components'

export const Warpper = styled.div``

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

export const TextTitle = styled.textarea.attrs({
  placeholder: '请输入你的idea'
})`
  height: 50px;
  width: 100%;
  padding: 10px 16px;
  font-size: 20px;
  resize: none;
`

export const TextDesc = styled.textarea.attrs({
  placeholder: '关于idea的描述'
})`
  height: 300px;
  width: 100%;
  padding: 10px 16px;
  font-size: 16px;
  color: #000;
  resize: none;
`