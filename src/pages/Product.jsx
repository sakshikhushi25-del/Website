
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import "../css/Product.css";

const categories = [
  "All",
  "Electronics",
  "Accessories",
  "Daily Use",
  "Fashion",
  "Home",
];

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-page">
      <h1 className="page-title">Our Products</h1>
      <p className="page-subtitle">
        Explore our collection and find your favourites.
      </p>

      <input
        type="text"
        className="product-search"
        placeholder="Search products..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p className="no-products">No products found.</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <Link
                to={`/product/${product.id}`}
                className="product-details-link"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />

                <h3>{product.title}</h3>
                <p className="product-price">₹ {product.price}</p>
                <p className="product-rating">
                  ⭐ {product.rating}
                </p>
              </Link>

              <div className="product-actions">
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
                  ❤️ Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;
