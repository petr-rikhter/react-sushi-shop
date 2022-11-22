import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsvisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <React.Fragment>
      {cartIsvisible && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} />;
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
