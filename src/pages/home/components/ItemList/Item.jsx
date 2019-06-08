import React, { Component } from 'react';
import {
  ItemBox,
  ItemHeader,
  ItemContent
} from './style'

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
      <ItemBox
        key={this.props.item.title}
        onTouchStart={this.touchStart}
        isDisabled={this.state.isDisabled}
      >
        <ItemHeader>{this.props.item.title}</ItemHeader>
        <ItemContent>{this.props.item.content}</ItemContent>
      </ItemBox>
    );
  }

  // touchStart() {
  //   console.log('touch start')
  //   this.setState({
  //     startTimeStamp: new Date(),
  //     timerId: setTimeout(() => {
  //       this.setState({
  //         isDisabled: true
  //       })
  //     }, 700)
  //   })
  // }

  // touchEnd() {
  //   console.log('touch end')
  //   this.setState({
  //     endTimeStamp: new Date()
  //   })
  //   clearTimeout(this.state.timerId)
  // }
}
