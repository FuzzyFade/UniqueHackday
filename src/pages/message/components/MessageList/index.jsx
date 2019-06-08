import React, { Component } from 'react';
import {
  Warpper,
  ItemBox,
  ItemAvatar,
  ItemContent,
  ItemContentHeader,
  ItemName,
  ItemDescQoute,
  ItemPrompt,
  ItemDate
} from './style'

export default class MessageList extends Component {
  render() {
    return (
      <Warpper>
        <ItemBox>
          <ItemAvatar></ItemAvatar>
          <ItemContent>
            <ItemContentHeader>
              <ItemName>名字哥</ItemName>
              <ItemDescQoute>关注了你</ItemDescQoute>
            </ItemContentHeader>
            <ItemPrompt>可在草稿中查看</ItemPrompt>
            <ItemDate>2019/10/1</ItemDate>
          </ItemContent>
        </ItemBox>
      </Warpper>
    );
  }
}

