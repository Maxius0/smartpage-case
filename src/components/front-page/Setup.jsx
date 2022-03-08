import { storageSave } from "../../utils/storage";
import { useState, useEffect } from "react";
import { createCart } from "../../api/cart";
import { STORAGE_KEY_CART } from "../../const/storageKeys";

const setupCart = async () => {
  const [error, cart] = await createCart();
  if (error !== null) {
    throw error;
  }
  storageSave(STORAGE_KEY_CART, cart.Secret);
  return "Cart created!";
};

const Setup = () => {
  const [state, setState] = useState({
    cart: "",
  });

  useEffect(() => {
    setupCart()
      .then((cart) => {
        setState({
          ...state,
          cart: cart,
        });
      })
      .catch((error) => {
        console.error(error.message);
      });

    return () => {};
  }, []);
  return (
    <p>
      <b>{state.cart}</b>
    </p>
  );
};
export default Setup;
