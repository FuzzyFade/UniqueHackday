import React, { Component } from 'react';
import {
  Warpper,
  Header,
  HeaderTitle
} from './style'
import { Tabs, Icon } from 'antd'
import MessageList from './components/MessageList/index'
const { TabPane } = Tabs

export default class Message extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <Icon type="left" style={{ fontSize: '24px', color: '#1a1a1a', marginLeft: '16px'}}/>
          <HeaderTitle>我的消息</HeaderTitle>
        </Header>

        <Tabs defaultActiveKey="0" onChange={this.props.changeKey}>
          {/* <Icon type="menu" /> */}
          <TabPane tab="未读消息" key="0">
          </TabPane>
          <TabPane tab="已读消息" key="1">
          </TabPane>
        </Tabs>

        <MessageList></MessageList>
      </Warpper>
    );
  }
}
