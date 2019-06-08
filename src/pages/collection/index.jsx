import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Warpper,
  Header,
  HeaderTitle
} from './style'
import {
  Icon
} from 'antd'
import ItemList from './components/ItemList/index'
import {
  Link
} from 'react-router-dom'

class Collection extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <Link to="/mine/">
            <Icon type="left" style={{ fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
          </Link>
          <HeaderTitle>我的收藏</HeaderTitle>
        </Header>

        <ItemList itemlist={this.props.itemList}></ItemList>
      </Warpper>
    );
  }
}

const mapStateToProps = state => ({
  itemList: state.collection.itemList
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Collection)
