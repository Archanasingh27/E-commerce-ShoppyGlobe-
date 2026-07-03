import React from 'react'
import { Link } from 'react-router-dom';
import "./ProductItem.css";

const ProductItem = ({product}) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} loading="lazy" />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem