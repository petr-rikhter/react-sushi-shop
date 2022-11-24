import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsAnimated, setButtonIsAnimated] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItemsNumbers = cartContext.items.reduce(
    (current, item) => current + item.amount,
    0
  );

  let buttonAnimation = `${styles.button} ${buttonIsAnimated && styles.bump}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonIsAnimated(true);

    const timer = setTimeout(() => {
      setButtonIsAnimated(false);
    }, 299);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button onClick={props.onShow} className={buttonAnimation}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.basket}>Корзина</span>
      <span className={styles.badge}>{cartItemsNumbers}</span>
    </button>
  );
};

export default HeaderCartButton;
