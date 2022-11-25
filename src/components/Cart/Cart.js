import React, { useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `${Math.abs(cartContext.totalAmount).toFixed(2)} $`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const orderedHandler = () => {
    cartContext.orderedItems();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHide} className={styles["button--alt"]}>
          Закрыть
        </button>
        {hasItems && (
          <button onClick={orderedHandler} className={styles.button}>
            Заказать
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
