// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartSlice";
// import "./ProductItem.css";

// const ProductItem = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     alert("Product added to cart!");
//   };

//   return (
//     <div className="product-card">
//       <img src={product.thumbnail} alt={product.title} loading="lazy" />

//       <h3>{product.title}</h3>
//       <p>${product.price}</p>

//        <div className="product-buttons">
//       <Link to={`/product/${product.id}`}>
//         <button>Details</button>
//       </Link>

//       <button onClick={handleAddToCart}>Add</button>
//     </div>
//     </div>
//   );
// };

// export default ProductItem;



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

        <div className="discount-badge">
    -{Math.round(product.discountPercentage)}%
      </div>
      
      <img src={product.thumbnail} alt={product.title} loading="lazy" />

      <div className="product-content">
        <h3>{product.title}</h3>
        <p>${product.price}</p>

        <div className="product-buttons">
          <Link to={`/product/${product.id}`}>
            <button>View Details</button>
          </Link>

          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;