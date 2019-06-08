import React, { Component } from 'react'
import {
  ItemListWarpper,
  NewCircle
} from './style'
import Item from './Item'

class ItemList extends Component {
  render() {
    return (
      <ItemListWarpper>
        {
          this.props.itemlist.map(item => {
            return (
              <Item
                item={item}
                key={item.title}
              />
            )
          })
        }
        <NewCircle>+</NewCircle>
      </ItemListWarpper>
    )
  }
}

export default ItemList
