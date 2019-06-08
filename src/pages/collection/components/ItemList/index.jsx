import React, { Component } from 'react'
import {
  ItemListWarpper,
  ItemBox,
  ItemHeader,
  ItemContent
} from './style'

class ItemList extends Component {
  render() {
    return (
      <ItemListWarpper>
        {
          this.props.itemlist.map(item => {
            return (
              <ItemBox key={item.title}>
                <ItemHeader>{item.title}</ItemHeader>
                <ItemContent>{item.content}</ItemContent>
              </ItemBox>
            )
          })
        }
      </ItemListWarpper>
    )
  }

}

export default ItemList
