import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[
        {
          id: "m2",
          key: Math.random(),
          name: "Sushi",
          amount: 2,
          price: 10.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHide} className={styles["button--alt"]}>
          Закрыть
        </button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
};

export default Cart;
