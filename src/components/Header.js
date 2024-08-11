import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import Order from "./Order";

const showOrders = (props) => {
  let sum = 0;

  props.orders.forEach((item) => {
    sum += Number.parseFloat(item.price);
  })

  return (
    <div className="cart-block">
      {props.orders.map((order) => (
        <Order onDelete={props.onDelete} key={order.id} item={order} />
      ))}
      <p className="sum">Сумма заказа: {new Intl.NumberFormat().format(sum)}$</p>
      <button className="green-btn">Оформить заказ</button>
    </div>
  );
};

const showNothing = () => {
  return <div className="cart-block_empty">Корзина пуста</div>;
};

export default function Header(props) {
  let [showCart, setShowCart] = useState(false);

  return (
    <header className="header">
      <div className="nav">
        <span className="nav__logo">Furniter Shop</span>
        <ul className="nav__list">
          <FaShoppingCart
            onClick={() => setShowCart(!showCart)}
            className={`nav__cart ${showCart && "nav__cart_active"}`}
          />
          {showCart && (
            <li className="nav__cart-block">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </li>
          )}
          <li className="nav__link">Про нас</li>
          <li className="nav__link">Контакты</li>
          <li className="nav__link">Кабинет</li>
        </ul>
      </div>
      <div className="header__presentation"></div>
    </header>
  );
}
