import React, { Component } from 'react'
import { CgClose } from 'react-icons/cg'

export class ShowItem extends Component {
  render() {
    return (
      <div className='infoItem'>
        <div className="infoItem__block">
          <div className="infoItem__close" onClick={() => this.props.onShowItem(this.props.item)}><CgClose /></div>
          <img className="infoItem__img" src={this.props.item.img} alt={this.props.item.title} />
          <div className="infoItem__info">
              <h2 className="infoItem__title">{this.props.item.title}</h2>
              <p className="infoItem__desc">{this.props.item.desc}</p>
              <b className="infoItem__price">{this.props.item.price}$</b>
              <div className="infoItem__add" onClick={() => this.props.onAdd(this.props.item)}>Добавить в корзину</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowItem
