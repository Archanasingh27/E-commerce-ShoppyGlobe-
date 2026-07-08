import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaStar, FaShoppingCart, FaShieldAlt, FaTruck } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import { addToCart } from "../redux/cartSlice";
import api from "../api/api";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate=useNavigate()

  //fetch product

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const response = await api.get(`/products/${id}`);

        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

 //loading 
  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>
    );
  }

  if (error) {
    return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Product added to cart!");
  };

  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <section className="product-detail">
        {/* LEFT SIDE */}

        <div className="product-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        {/* RIGHT SIDE */}

        <div className="product-info">
          <div className="product-tags">
            <span>{product.category}</span>
            <span>Brand: {product.brand}</span>
            <span className="stock">{product.stock} Items Left</span>
          </div>

          <h1>{product.title}</h1>

          <div className="rating">
            <FaStar className="star" />

            <span>{product.rating} / 5</span>

            <span className="review">Customer Reviews</span>
          </div>

          <div className="price-box">
            <h2>${product.price}</h2>

            <span className="old-price">
              ${(product.price + (product.discountPercentage || 0)).toFixed(2)}
            </span>

            <span className="discount">
              ({Math.round(product.discountPercentage)}% OFF)
            </span>

            <p>Local taxes and shipping included.</p>
          </div>

          <div className="description">
            <h3>Description</h3>

            <p>{product.description}</p>
          </div>

          <button className="cart-btn" onClick={handleAddToCart}>
            <FaShoppingCart />
            Add to Cart
          </button>

          <div className="features">
            <div className="feature">
              <FaShieldAlt />

              <div>
                <h4>Guarantee</h4>
                <p>1 Week Warranty</p>
              </div>
            </div>

            <div className="feature">
              <FaTruck />

              <div>
                <h4>Shipping</h4>
                <p>Ships in 3-5 days</p>
              </div>
            </div>

            <div className="feature">
              <BiRefresh />

              <div>
                <h4>Returns</h4>
                <p>No Return Policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
