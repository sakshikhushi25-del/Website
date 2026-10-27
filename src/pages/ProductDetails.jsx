
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import "../css/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  if (!product) {
    return (
      <div className="details-container">
        <h2>Product not found</h2>
        <Link to="/product">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="image-section">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="info-section">
          <p className="details-category">{product.category}</p>

          <h1>{product.title}</h1>

          <h3 className="price">₹ {product.price}</h3>

          <p className="rating">⭐ {product.rating}</p>

          <p className="description">{product.description}</p>

          <div className="buttons">
            <button
              onClick={() => addToCart(product)}
              className="cart-btn"
            >
              Add to Cart
            </button>

            <button
              onClick={() => addToWishlist(product)}
              className="wish-btn"
            >
              ❤️ Add to Wishlist
            </button>
          </div>

          <Link to="/product" className="back-link">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
