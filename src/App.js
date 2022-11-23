import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartIsvisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
    document.body.style.overflow = "hidden";
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <CartContextProvider>
      {cartIsvisible && <Cart onHide={hideCartHandler} />}

      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
