import React, { Component } from 'react';
import { Tabs } from 'antd'
import {
  Warpper
} from './style'
import ItemList from './components/ItemList/index'
import { connect } from 'react-redux'
import { actionCreator } from './store'

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
        {/* Switch Tabs End */}

        {/* ItemList */}
        <ItemList itemlist={this.props.itemlist}></ItemList>
        {/* ItemList End */}
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
