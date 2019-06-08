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
import {
  Link
} from 'react-router-dom'

class Following extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <Link to="/mine/">
            <Icon type="left" style={{ fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
          </Link>
          <HeaderTitle>我关注的</HeaderTitle>
        </Header>

        <FollowList />
      </Warpper>
    )
  }
}

export default Following
