import { STORAGE_KEY_CART } from "../../const/storageKeys";
import { useState, useEffect } from "react";
import { storageRead } from "../../utils/storage";
import { getCart } from "../../api/cart";
import CartListItem from "./CartListItem";

const extractLines = async () => {
  const [error, cart] = await getCart(storageRead(STORAGE_KEY_CART));
  if (error !== null) {
    throw error;
  }
  return cart.OrderLines;
};

const CartList = (props) => {
  const [state, setState] = useState({
    lines: [],
  });

  useEffect(() => {
    extractLines()
      .then((lines) => {
        setState({
          ...state,
          lines: lines,
        });
      })
      .catch((error) => {
        console.error(error.message);
      });

    return () => {};
  }, []);

  return (
    <div className="line-list">
      <div className="cart-headers">
        <span>Product:</span>
        <span>Quantity:</span>
        <span>Price:</span>
      </div>
      {state.lines.map((line) => (
        <CartListItem key={line.Id} line={line} />
      ))}
    </div>
  );
};
export default CartList;
