import React, { Component } from 'react'
import {
  ItemListWarpper,
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
      </ItemListWarpper>
    )
  }
}

export default ItemList
