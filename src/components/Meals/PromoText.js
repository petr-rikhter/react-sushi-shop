import React from "react";
import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Суши-ресторан онлайн</h2>
      <p>В нашем суши-ресторане можно заказать любое блюдо японской кухни</p>
      <p>Реактивная работа и качественные, свежие продукты</p>
    </section>
  );
};

export default PromoText;
