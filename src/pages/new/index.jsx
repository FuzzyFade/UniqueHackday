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
import {
  Link
} from 'react-router-dom'

class New extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <HeaderLeft>
            <Link to="/home/">
              <Icon type="left" style={{ fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
            </Link>
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
