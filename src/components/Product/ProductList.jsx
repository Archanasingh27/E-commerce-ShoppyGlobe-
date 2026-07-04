import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem.jsx";
import useProducts from "../../hooks/useProduct.js";
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import "./ProductList.css";

function ProductList() {
  const { products, loading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const searchTerm = useSelector((state) => state.search.searchTerm);

  // Get unique categories from the fetched products.
  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [products]
  );

  // Filter products by search term and selected category.
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>;
  }

  if (filteredProducts.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        No products found.
      </h2>
    );
  }

  return (
    <div id="products">
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
