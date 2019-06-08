import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Warpper,
  Header,
  HeaderLeft,
  HeaderTitle,
  Blanket
} from './style'
import { Icon } from 'antd'

class Associate extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <HeaderLeft>
            <Icon type="left" style={{ fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
            <HeaderTitle>联想</HeaderTitle>
          </HeaderLeft>
        </Header>
        <Blanket></Blanket>
      </Warpper>
    );
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Associate)