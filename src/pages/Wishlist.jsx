import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import "../css/Wishlist.css";

function Wishlist() {
  const {wishlist, removeFromWishlist,} = useContext(WishlistContext);
  const {addToCart} = useContext(CartContext);
  if (wishlist.length === 0){
    return <h1 className="empty-wishlist">Your Wishlist is Empty ❤️</h1>;
  }
  return (
    <div className="wishlist-container">
      <h1 className="wishlist-heading">My Wishlist</h1>
      {wishlist.map((item) => (
        <div key={item.id} className="wishlist-card">
          <img src={item.image} alt={item.title} className="wishlist-image" />
          <div className="wishlist-info">
          <h2>{item.title}</h2>
          <p className="wishlist-price">₹ {item.price}</p>
          <div className="wishlist-buttons">
          <button onClick={() => addToCart(item)} className="cart-btn">🛒 Move To Cart</button>
          <button onClick={() => removeFromWishlist(item.id)} className="remove-btn">🗑 Remove</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Wishlist;