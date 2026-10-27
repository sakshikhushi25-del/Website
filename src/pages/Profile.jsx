
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import "../css/Profile.css";

function Profile() {
  const { user, isLoggedIn, logout } = useContext(AuthContext);
  const cartContext = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);
  const navigate = useNavigate();

  // Support common cart context shapes.
  const cart = cartContext?.cart ?? cartContext?.state?.cart ?? [];
  const wishlist = wishlistContext?.wishlist ?? [];

  const cartCount = cart.reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0
  );

  const wishlistCount = wishlist.length;

  const cartTotal = cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * (Number(item.quantity) || 1),
    0
  );

  function handleLogout() {
    logout();
    navigate("/login");
  }

  if (!isLoggedIn || !user) {
    return (
      <main className="profile-page">
        <section className="profile-login-prompt">
          <div className="profile-avatar">👤</div>
          <h1>Welcome to ShopEasy!</h1>
          <p>Please log in to view your account information.</p>
          <Link to="/login" className="profile-primary-btn">
            Login to Your Account
          </Link>
        </section>
      </main>
    );
  }

  const displayName = user.name
    .replace(/[._-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const initial = displayName.charAt(0).toUpperCase() || "U";

  return (
    <main className="profile-page">
      <div className="profile-heading">
        <p className="profile-eyebrow">YOUR ACCOUNT</p>
        <h1>My Profile</h1>
        <p>Manage your account and keep track of your shopping.</p>
      </div>

      <section className="profile-overview">
        <div className="profile-user">
          <div className="profile-avatar">{initial}</div>

          <div className="profile-user-info">
            <h2>{displayName}</h2>
            <p>{user.email}</p>
            <span className="profile-status">
              <span className="status-dot"></span>
              Logged in
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="profile-logout-btn"
        >
          Log Out
        </button>
      </section>

      <section className="profile-stats">
        <Link to="/cart" className="profile-stat-card">
          <div className="stat-icon cart-icon">🛒</div>
          <div>
            <p>Cart Items</p>
            <h3>{cartCount}</h3>
            <span>View your cart →</span>
          </div>
        </Link>

        <Link to="/wishlist" className="profile-stat-card">
          <div className="stat-icon wishlist-icon">❤️</div>
          <div>
            <p>Wishlist Items</p>
            <h3>{wishlistCount}</h3>
            <span>View your wishlist →</span>
          </div>
        </Link>

        <Link to="/cart" className="profile-stat-card">
          <div className="stat-icon spending-icon">₹</div>
          <div>
            <p>Cart Subtotal</p>
            <h3>₹{cartTotal.toLocaleString("en-IN")}</h3>
            <span>Review your items →</span>
          </div>
        </Link>
      </section>

      <section className="profile-section">
        <div className="profile-section-heading">
          <div>
            <h2>Personal Information</h2>
            <p>Your current account details</p>
          </div>
          <span className="info-badge">Account</span>
        </div>

        <div className="profile-info-grid">
          <div className="profile-info-item">
            <span className="info-icon">👤</span>
            <div>
              <p>Full Name</p>
              <h3>{displayName}</h3>
            </div>
          </div>

          <div className="profile-info-item">
            <span className="info-icon">✉️</span>
            <div>
              <p>Email Address</p>
              <h3 className="profile-email">{user.email}</h3>
            </div>
          </div>

          <div className="profile-info-item">
            <span className="info-icon">🔐</span>
            <div>
              <p>Account Status</p>
              <h3>Active Session</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-section-heading">
          <div>
            <h2>Quick Links</h2>
            <p>Continue shopping with ShopEasy</p>
          </div>
        </div>

        <div className="profile-links">
          <Link to="/product" className="profile-link-card">
            <span className="quick-link-icon">🛍️</span>
            <span>
              <strong>Browse Products</strong>
              <small>Explore our collection</small>
            </span>
            <span className="quick-link-arrow">→</span>
          </Link>

          <Link to="/cart" className="profile-link-card">
            <span className="quick-link-icon">🛒</span>
            <span>
              <strong>My Cart</strong>
              <small>{cartCount} item(s) in your cart</small>
            </span>
            <span className="quick-link-arrow">→</span>
          </Link>

          <Link to="/wishlist" className="profile-link-card">
            <span className="quick-link-icon">❤️</span>
            <span>
              <strong>My Wishlist</strong>
              <small>{wishlistCount} saved item(s)</small>
            </span>
            <span className="quick-link-arrow">→</span>
          </Link>
        </div>
      </section>

      <div className="profile-bottom">
        <p>Thank you for shopping with ShopEasy! 💜</p>
      </div>
    </main>
  );
}

export default Profile;