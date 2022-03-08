import { useState, useEffect } from "react";
import { storageSave, storageRead } from "../../utils/storage";
import { createCart, getCarts } from "../../api/cart";
import ProductListItem from "./ProductListItem";

const extractProducts = async () => {
  const [error, products] = await getCarts();
  if (error !== null) {
    throw error;
  }
  return products.Products;
};

const CartList = () => {
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
export default CartList;
