import { useState, useEffect } from "react";
import { getProducts } from "../../api/product";
import ProductListItem from "./ProductListItem";

const extractProducts = async () => {
  const [error, products] = await getProducts();
  if (error !== null) {
    throw error;
  }
  return products.Products;
};

const ProductsList = () => {
  const [state, setState] = useState({
    products: [],
  });

  useEffect(() => {
    extractProducts()
      .then((products) => {
        setState({
          ...state,
          products: products,
        });
      })
      .catch((error) => {
        console.error(error.message);
      });

    return () => {};
  }, []);

  return (
    <div className="product-list">
      {state.products.map((product) => (
        <ProductListItem key={product.Id} product={product} />
      ))}
    </div>
  );
};
export default ProductsList;
