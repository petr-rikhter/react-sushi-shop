import styles from "./Header.module.css";
import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Sushi shop</h1>
        <HeaderCartButton onShow={props.onShow} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Sushi" />
      </div>
    </React.Fragment>
  );
};

export default Header;
