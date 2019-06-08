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

class Collection extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <Icon type="left" style={{ fontSize: '24px', color: '#1a1a1a', marginLeft: '16px'}}/>
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
