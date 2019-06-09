import React, { Component } from 'react';
import { Tabs, Drawer } from 'antd'
import {
  Warpper,
  NewCircle,
  IconWarpper,
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

  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.onClose = this.onClose.bind(this)
    this.showDrawer = this.showDrawer.bind(this)
  }

  componentDidMount() {
    this.props.getIdeaListInit(this.props.token)
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

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
          <Icon type="align-left" style={{ fontSize: '20px', color: '#fff' }} onClick={this.showDrawer}/>
        </IconWarpper>
        {/* Switch Tabs End */}

        {/* ItemList */}
        <ItemList itemlist={this.props.itemlist}/>
        {/* ItemList End */}
        <Link to="/new/">
          <NewCircle>+</NewCircle>
        </Link>
        <Drawer
          title="Where to go?"
          placement="left"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Link to="/home/">
            <p>首页</p>
          </Link>
          <Link to="/message/">
            <p>我的消息</p>
          </Link>
          <p>我的Stars</p>
        </Drawer>
      </Warpper>
    );
  }
}

const mapStateToProps = state => ({
  itemlist: state.home.itemlists[state.home.currentKey],
  token: state.login.token
})

const mapDispatchToProps = dispatch => {
  return {
    changeKey(key) {
      dispatch(actionCreator.changeCurrentKeyAction(key))
    },
    getIdeaListInit(token) {
      dispatch(actionCreator.getIdeaInitAction(token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
