import React, { Component } from 'react';
import {
  Warpper,
  Header,
  HeaderLeft,
  HeaderTitle,
  HeaderRight
} from './style'
import { Icon } from 'antd'

class Comment extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <HeaderLeft>
            <Icon type="left" style={{ fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
            <HeaderTitle>评论</HeaderTitle>
          </HeaderLeft>
          <HeaderRight>发布</HeaderRight>
        </Header>
      </Warpper>
    );
  }
}

export default Comment
