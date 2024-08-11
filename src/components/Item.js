import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img className="item__img" src={this.props.item.img} alt={this.props.item.title} onClick={() => this.props.onShowItem(this.props.item)} />
        <div className="item__info">
            <h2 className="item__title">{this.props.item.title}</h2>
            <p className="item__desc">{this.props.item.desc}</p>
            <b className="item__price">{this.props.item.price}$</b>
            <div className="item__add" onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    );
  }
}

export default Item;
