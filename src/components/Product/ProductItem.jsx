import React from 'react'
import { Link } from 'react-router-dom';
import "./ProductItem.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail}
        alt={product.title}
        loading="lazy" />

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