import React, { Component } from 'react';
import {
  Warpper,
  Header,
  HeaderTitle
} from './style'
import { Tabs, Icon } from 'antd'
import MessageList from './components/MessageList/index'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { 
  actionCreator
} from './store'
const { TabPane } = Tabs

class Message extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <Link to="/mine/">
            <Icon type="left" style={{ fontSize: '24px', color: '#eee', marginLeft: '16px'}}/>
          </Link>
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

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  changeKey(key) {
    console.log(key)
    dispatch(actionCreator.changeCurrentKeyAction(key))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Message)
