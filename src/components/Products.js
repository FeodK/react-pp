import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main className='products'>
        {this.props.items.map((item) => (
          <Item key={item.id} item={item} onAdd={this.props.onAdd} onShowItem={this.props.onShowItem} />
        ))}
      </main>
    )
  }
}

export default Items
