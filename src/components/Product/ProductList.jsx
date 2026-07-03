import React from 'react'
import ProductItem from "../ProductItem/ProductItem";
import useProducts from "../../hooks/useProducts";
import "./ProductList.css";

function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;