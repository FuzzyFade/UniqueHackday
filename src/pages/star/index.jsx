import React, { Component } from 'react';
import {
  Warpper,
  Header,
  HeaderLeft,
  HeaderTitle,
  HeaderRight,
  ItemBox,
  ItemHeader,
  ItemHeaderRight,
  ItemName,
  ItemAvatar,
  InfoBox,
  ItemTime,
  ItemContent
} from './style'
import { Link } from 'react-router-dom'
import {
  Icon
} from 'antd'
class Star extends Component {
  render() {
    return (
      <Warpper>
        <Header>
          <HeaderLeft>
            <Link to="/home/">
              <Icon type="left" style={{ fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
            </Link>
            <HeaderTitle>星星</HeaderTitle>
          </HeaderLeft>
          <HeaderRight>发布</HeaderRight>
        </Header>
        <ItemBox>
          <ItemHeader>
            <ItemHeaderRight>
              <ItemAvatar></ItemAvatar>
              <InfoBox>
                <ItemName>粥结轮</ItemName>
                <ItemTime>20分钟前</ItemTime>
              </InfoBox>
            </ItemHeaderRight>
          </ItemHeader>
          <ItemContent>This is Content This is Content This is Content This is Content</ItemContent>
        </ItemBox>
      </Warpper>
    );
  }
}

export default Star
