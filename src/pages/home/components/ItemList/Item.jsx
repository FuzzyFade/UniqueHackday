import React, { Component } from 'react';
import {
  ItemBox,
  ItemHeader,
  ItemContent,
  ItemAvatar,
  ItemHeaderRight,
  ItemName,
  ItemTime,
  InfoBox,
} from './style'
import {
  Link
} from 'react-router-dom'

export default class Item extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isDisabled: false,
      timerId: null,
      startTimeStamp: '',
      endTimeStamp: ''
    }
  }

  render() {
    return (
      <Link to="/star/">
        <ItemBox
          key={this.props.item.title}
          isDisabled={this.state.isDisabled}
        >
          <ItemHeader>
            <ItemHeaderRight>
              <ItemAvatar></ItemAvatar>
              <InfoBox>
                <ItemName>粥结轮</ItemName>
                <ItemTime>20分钟前</ItemTime>
              </InfoBox>
            </ItemHeaderRight>
          </ItemHeader>
          <ItemContent>{this.props.item.content}</ItemContent>
        </ItemBox>
      </Link>
    );
  }
}
