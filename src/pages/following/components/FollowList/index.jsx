import React, { Component } from 'react';
import {
  ListWarpper,
  ItemBox,
  ItemAvatar,
  ItemName
} from './style'
export default class FollowList extends Component {
  render() {
    return (
      <ListWarpper>
        <ItemBox>
          <ItemAvatar></ItemAvatar>
          <ItemName>你的妈妈</ItemName>
        </ItemBox>
        <ItemBox>
          <ItemAvatar></ItemAvatar>
          <ItemName>你的妈妈</ItemName>
        </ItemBox>
        <ItemBox>
          <ItemAvatar></ItemAvatar>
          <ItemName>你的妈妈</ItemName>
        </ItemBox>
        <ItemBox>
          <ItemAvatar></ItemAvatar>
          <ItemName>你的妈妈</ItemName>
        </ItemBox>
        <ItemBox>
          <ItemAvatar></ItemAvatar>
          <ItemName>你的妈妈</ItemName>
        </ItemBox>
      </ListWarpper>
    );
  }
}
