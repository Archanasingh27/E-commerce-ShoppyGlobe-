import React from 'react'
import ProductItem from "./ProductItem.jsx";
import useProducts from "../../hooks/useProduct.js";
import "./ProductList.css";
import { useSelector } from "react-redux";

function ProductList() {

  const searchTerm = useSelector((state) => state.search.searchTerm);
  
  const filteredProducts = products.filter((product) =>
    product.title.
      toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
 
  const { products, loading, error } = useProducts();

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>;
  }

    if (filteredProducts.length === 0) {
      return (
        <h2
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          No products found.
        </h2>
      );
    }

  return (
    <div className="products-grid">
      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}

export default ProductList;