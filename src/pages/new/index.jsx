import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Warpper,
  Header,
  HeaderTitle
} from './style'
import { Icon } from 'antd'

class New extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <Icon type="left" style={{ fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
          <HeaderTitle>我关注的</HeaderTitle>
        </Header>
      </Warpper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(New)
