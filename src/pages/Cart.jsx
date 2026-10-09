import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/Cart.css";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, } = useContext(CartContext);
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="cart-container">
      <h1 className="cart-heading">Shopping Cart</h1>
      {cart.length === 0 ? <h2 className="empty-cart">Cart is Empty 🛒</h2> : cart.map((item) => (
        <div key={item.id} className="cart-card" >
          <img src={item.image} alt={item.title} className="cart-image" />
          <div className="cart-info">
            <h2>{item.title}</h2>
            <p className="price">₹ {item.price}</p>
            <h3>Quantity : {item.quantity}</h3>
            <div className="quantity-buttons">
              <button onClick={() => decreaseQuantity(item.id)} className="minus">-</button>
              <button onClick={() => increaseQuantity(item.id)} className="plus">+</button>
            </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
          </div>
        </div>
      ))}
      <div className="grand-total">
        <h2>Grand Total : ₹ {totalAmount}</h2>
      </div>
    </div>
  )
}
export default Cart;