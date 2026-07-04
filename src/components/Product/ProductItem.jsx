import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Product added to cart!");
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} loading="lazy" />

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;