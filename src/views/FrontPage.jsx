import { NavLink } from "react-router-dom";

const FrontPage = () => {
  return (
    <>
      <h1>Trailer Shop</h1>
      <NavLink to="/products">
        <button>Browse products</button>
      </NavLink>
      <NavLink to="/cart">
        <button>View cart</button>
      </NavLink>
    </>
  );
};
export default FrontPage;
