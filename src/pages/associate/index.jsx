import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Warpper,
  Header,
  HeaderLeft,
  HeaderTitle,
  Blanket,
  BubbleBox,
  ItemBubble,
  AssociateBtn
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
        <Blanket>
          <BubbleBox>
            <ItemBubble>药水</ItemBubble>
            <ItemBubble>黄头发的妹妹</ItemBubble>
            <ItemBubble>好果汁</ItemBubble>
          </BubbleBox>
          <AssociateBtn>联想</AssociateBtn>
        </Blanket>
      </Warpper>
    );
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Associate)