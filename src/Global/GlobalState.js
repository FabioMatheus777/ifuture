import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

export const GlobalState = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [order, setOrder] = useState({});

  const addToCart = (product, quantity, newRestaurant) => {
    if (newRestaurant.id === restaurant.id) {
      setCart([...cart, { ...product, quantity }]);
    } else {
      setCart([{ ...product, quantity }]);
      setRestaurant(newRestaurant);
    }
  };

  const RemoveToCart = (id) => {
    const index = cart.findIndex((product) => product.id === id);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const states = { cart, restaurant, order };
  const requests = { addToCart, RemoveToCart };
  const setters = { setOrder };

  return (
    <GlobalStateContext.Provider value={{ states, requests, setters }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
