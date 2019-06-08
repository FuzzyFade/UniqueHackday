import React, { Component } from 'react';
import {
  Warpper,
  Header,
  HeaderTitle
} from './style'
import FollowList from './components/FollowList/index'
import {
  Icon
} from 'antd'

class Follow extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <Icon type="left" style={{ fontSize: '24px', color: '#1a1a1a', marginLeft: '16px'}}/>
          <HeaderTitle>我关注的</HeaderTitle>
        </Header>

        <FollowList />
      </Warpper>
    )
  }
}

export default Follow
