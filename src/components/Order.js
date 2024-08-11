import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div className="order">
        <img
          className="order__img"
          src={this.props.item.img}
          alt={this.props.item.title}
        />
        <div className="order__info">
            <h2 className="order__title">{this.props.item.title}</h2>
            <b className="order__price">{this.props.item.price}$</b>
            <FaTrash className="order__delete" onClick={() => this.props.onDelete(this.props.item.id)}/>
        </div>
      </div>
    );
  }
}

export default Order;
