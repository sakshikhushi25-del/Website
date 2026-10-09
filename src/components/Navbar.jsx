import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar() {
  const {cart} = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <nav className="navbar">
      <h2 className="logo">ShopEasy</h2>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/cart">Cart ({totalItems})</NavLink>
          <NavLink to="/wishlist">❤️ Wishlist ({wishlist.length})</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
    </nav>
  )
}

export default Navbar;