import { createContext, useState } from "react";
export const WishlistContext = createContext();
function WishlistProvider({children}){
    const [wishlist, setWishlist] = useState([]);
    function addToWishlist(product){
        const existingProduct = wishlist.find((item) => item.id === product.id);
        if(!existingProduct) {
            setWishlist([...wishlist, product]);
        }
    }
    function removeFromWishlist(id){
        const updatedWishlist = wishlist.filter((item) => item.id !== id);
        setWishlist(updatedWishlist);
    }
    return (
        <WishlistContext.Provider
        value={{
            wishlist,
            addToWishlist,
            removeFromWishlist,
        }}>{children}</WishlistContext.Provider>
    )
}
export default WishlistProvider;