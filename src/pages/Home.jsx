
import { useContext } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import "../css/Home.css";

function Home() {
  const cartContext = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);

  const featuredProducts = products.slice(0, 5);

  const handleAddToCart = (product) => {
    cartContext?.addToCart?.(product);
  };

  const handleAddToWishlist = (product) => {
    wishlistContext?.addToWishlist?.(product);
  };

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">
            YOUR EVERYDAY SHOPPING DESTINATION
          </p>

          <h1>
            Find Your
            <br />
            <span>Everyday Essentials.</span>
          </h1>

          <p className="hero-description">
            Discover useful products, explore your favorites, and enjoy
            a simpler shopping experience with ShopEasy.
          </p>

          <div className="hero-buttons">
            <Link to="/product" className="shop-btn">
              Shop Now →
            </Link>

            <a href="#featured-products" className="explore-btn">
              Explore Products
            </a>
          </div>

          <div className="hero-notes">
            <span>✓ Easy shopping</span>
            <span>✓ Products for everyday life</span>
          </div>
        </div>

        <div className="shopping-visual">
          <div className="visual-circle"></div>

          <div className="shopping-bag">🛍️</div>

          <div className="floating-card tech-card">
            <span className="card-icon">🎧</span>
            <strong>Everyday tech</strong>
          </div>

          <div className="floating-card favorite-card">
            <span className="card-icon">📦</span>
            <div>
              <strong>Your next favourite</strong>
              <p>is waiting here</p>
            </div>
          </div>

          <span className="sparkle sparkle-one">✦</span>
          <span className="sparkle sparkle-two">✧</span>
          <span className="sparkle sparkle-three">✦</span>
        </div>
      </section>

      <section className="benefits">
        <div className="benefit-item">
          <span className="benefit-icon">🚚</span>
          <div>
            <h3>Easy Shopping</h3>
            <p>Browse products in one place</p>
          </div>
        </div>

        <div className="benefit-item">
          <span className="benefit-icon">💝</span>
          <div>
            <h3>Your Favorites</h3>
            <p>Save products you love</p>
          </div>
        </div>

        <div className="benefit-item">
          <span className="benefit-icon">🛒</span>
          <div>
            <h3>Simple Cart</h3>
            <p>Keep track of your selections</p>
          </div>
        </div>
      </section>

      <section className="home-products" id="featured-products">
        <div className="section-heading">
          <div>
            <p className="section-tag">MADE FOR YOUR EVERYDAY</p>
            <h2>Featured Products</h2>
            <p>Discover some of our favorites.</p>
          </div>

          <Link to="/product" className="view-all">
            View all products →
          </Link>
        </div>

        <div className="home-product-grid">
          {featuredProducts.map((product) => (
            <article className="home-product-card" key={product.id}>
              <Link
                to={`/product/${product.id}`}
                className="product-image-link"
              >
                <img src={product.image} alt={product.title} />
              </Link>

              <div className="home-product-info">
                <h3>{product.title}</h3>

                <p className="product-description">
                  {product.description}
                </p>

                <p className="product-rating">
                  ⭐ {product.rating ?? "New"}
                </p>

                <p className="product-price">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </p>

                <div className="product-actions">
                  <button
                    className="add-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="wishlist-btn"
                    onClick={() => handleAddToWishlist(product)}
                    aria-label={`Add ${product.title} to wishlist`}
                  >
                    ♡
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;