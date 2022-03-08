import { NavLink } from "react-router-dom";

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
    </>
  );
};
export default ProductList;
