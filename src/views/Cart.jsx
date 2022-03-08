import { NavLink } from "react-router-dom";
import CartList from "../components/cart/CartList";

const ProductList = () => {
  return (
    <>
      <h1>Shopping Cart</h1>
      <NavLink to="/products">
        <button>Continue shopping</button>
      </NavLink>
      <NavLink to="/">
        <button>Back to start</button>
      </NavLink>
      <CartList />
    </>
  );
};
export default ProductList;
