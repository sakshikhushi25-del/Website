import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import "../css/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  return (
    <div className="details-container">
      <div className="details-card">
        <div className="image-section">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="info-section">
          <h1>{product.title}</h1>
          <h3 className="price">₹ {product.price}</h3>
          <p className="rating">⭐⭐⭐⭐☆ {product.rating}</p>
          <p className="description">{product.description}</p>
          <div className="buttons">
            <button onClick={() => addToCart(product)} className="cart-btn">Add To Cart</button>
            <button onClick={() => addToWishlist(product)} className="wish-btn">❤️ Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails;