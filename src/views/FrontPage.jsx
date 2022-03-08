import { NavLink } from "react-router-dom";
import Setup from "../components/front-page/Setup";

const FrontPage = () => {
  return (
    <>
      <h1>Bicycle Shop</h1>
      <NavLink to="/products">
        <button>Browse products</button>
      </NavLink>
      <NavLink to="/cart">
        <button>View cart</button>
      </NavLink>
      <Setup />
    </>
  );
};
export default FrontPage;
