import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Warpper,
  Header,
  HeaderTitle,
  TextTitle,
  HeaderLeft,
  HeaderRight,
  TextDesc
} from './style'
import { Icon } from 'antd'

class New extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <HeaderLeft>
            <Icon type="left" style={{ fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
            <HeaderTitle>打火石</HeaderTitle>
          </HeaderLeft>
          <HeaderRight>发布</HeaderRight>
        </Header>
        <TextTitle>
        </TextTitle>
        <TextDesc>
        </TextDesc>
      </Warpper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(New)
