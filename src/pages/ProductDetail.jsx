import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Header from "../components/Header/Header";
import api from "../api/api";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) {
    return (
      <>
        <Header />
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>Loading...</h2>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="product-detail">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />

        <div>
          <h1>{product.title}</h1>

          <h2>${product.price}</h2>

          <p>{product.description}</p>

          <p>
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
