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
                time={item.create_time}
              />
            )
          })
        }
      </ItemListWarpper>
    )
  }
}

export default ItemList
