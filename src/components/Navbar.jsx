
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import "./Navbar.css";

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const cartCount = (cart || []).reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0
  );

  const wishlistCount = (wishlist || []).length;

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ShopEasy
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/cart">Cart ({cartCount})</NavLink>

        <NavLink to="/wishlist">
          ❤️ Wishlist ({wishlistCount})
        </NavLink>

        {isLoggedIn ? (
          <NavLink to="/profile">Profile</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
