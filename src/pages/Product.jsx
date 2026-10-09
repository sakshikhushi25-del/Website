import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import "../css/Product.css";

function Product() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="products-container">
      <h1>All Products</h1>
      <input type="text" placeholder="search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="search-box" />
      <div className="products-grid">{filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}</div>
    </div>
  );
}
export default Product;