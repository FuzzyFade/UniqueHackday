import React, { Component } from 'react';
import { Tabs } from 'antd'
import {
  Warpper,
  NewCircle,
  IconWarpper,
  Menu
} from './style'
import ItemList from './components/ItemList/index'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import {
  Link
} from 'react-router-dom'
import { Icon } from 'antd'
const { TabPane } = Tabs

class Home extends Component {
  render() {
    return (
      <Warpper>
        {/* Switch Tabs */}
        <Tabs defaultActiveKey="0" onChange={this.props.changeKey}>
          {/* <Icon type="menu" /> */}
          <TabPane tab="星星" key="0">
          </TabPane>
          <TabPane tab="夜空" key="1">
          </TabPane>
        </Tabs>
        <IconWarpper>
          <Icon type="align-left" style={{ fontSize: '20px', color: '#fff' }} />
        </IconWarpper>
        <Menu></Menu>
        {/* Switch Tabs End */}

        {/* ItemList */}
        <ItemList itemlist={this.props.itemlist}></ItemList>
        {/* ItemList End */}
        <Link to="/new/">
          <NewCircle>+</NewCircle>
        </Link>
      </Warpper>
    );
  }
}

const mapStateToProps = state => ({
  itemlist: state.home.itemlists[state.home.currentKey]
})

const mapDispatchToProps = dispatch => {
  return {
    changeKey(key) {
      dispatch(actionCreator.changeCurrentKeyAction(key))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
