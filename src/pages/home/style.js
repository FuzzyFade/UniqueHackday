import styled from 'styled-components'

export const Warpper = styled.div`
  .ant-tabs-nav-scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(64, 108, 255);
    font-size: 18px;
  }
  .ant-tabs-bar .ant-tabs-top-bar {
    height: 50px;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: #fff;
    font-weight: 500;
  }
  .ant-tabs-nav .ant-tabs-tab:active {
    color: rgb(0, 199, 200);
  }
  .ant-tabs-nav .ant-tabs-tab:hover {
      color: #fff;
  }
  .ant-tabs-tab {
   font-size: 20px;
   color: rgb(255, 221, 111);
  }
  .ant-tabs-ink-bar {
    background: rgb(255, 236, 0);
    height: 4px;
    border-radius: 3px;
  }
`

export const NewCircle = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100%;
  background: rgb(64, 108, 255);
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-weight: 200;
  font-size: 40px;
  position: fixed;
  right: 20px;
  bottom: 40px;
`

export const IconWarpper = styled.div`
  height: 20px;
  width: 20px;
  position: fixed;
  top: 16px;
  left: 14px;
`
