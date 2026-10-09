import { createContext, useState } from "react";
export const CartContext = createContext();
function CartProvider({children}){
    const [cart, setCart] = useState([]);
    function addToCart(product){
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct){
            const updatedCart = cart.map((item) =>
            item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            setCart(updatedCart);
        } else {
            setCart([...cart, {...product, quantity: 1}]);
        }
    }
    function increaseQuantity(id) {
        const updatedCart = cart.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item);
        setCart(updatedCart);
    }
    function decreaseQuantity(id) {
        const updatedCart = cart.map((item) => item.id === id ? {...item, quantity: item.quantity - 1} : item)
        .filter((item) => item.quantity > 0);
        setCart(updatedCart);
    }
    function removeFromCart(id) {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    }
    return (
        <CartContext.Provider value={{cart, addToCart,increaseQuantity,decreaseQuantity,removeFromCart,}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;