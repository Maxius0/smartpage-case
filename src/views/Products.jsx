import { NavLink } from "react-router-dom";
import ProductsList from "../components/products/ProductsList";

const Products = () => {
  return (
    <main className="products">
      <h1>All Products</h1>
      <NavLink to="/cart">
        <button>View cart</button>
      </NavLink>
      <NavLink to="/">
        <button>Back to start</button>
      </NavLink>
      <ProductsList />
    </main>
  );
};
export default Products;
