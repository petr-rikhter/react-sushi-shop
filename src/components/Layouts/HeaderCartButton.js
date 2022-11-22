import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemsNumbers = cartContext.items.reduce(
    (current, item) => current + item.amount,
    0
  );

  return (
    <button onClick={props.onShow} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumbers}</span>
    </button>
  );
};

export default HeaderCartButton;
