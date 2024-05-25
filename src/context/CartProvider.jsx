import { useState } from "react";
import { CartContext } from "./CartContext"

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const index = cart.findIndex(item => item.id === product.id);
        if (index !== -1) {
            const products = [...cart];
            products[index].quantity += product.quantity;
            setCart(products)
        } else {

            setCart([...cart, product]);
        }
    };

    const getTotal = () => {
        const prices = cart.map((item) => item.price * item.quantity);
        const total = prices.reduce((acc, current) => acc + current, 0);
        return total
    }

    const getCounter = () => {
        const quantities = cart.map((item) => item.quantity);
        const counter = quantities.reduce((acc, current) => acc + current, 0);
        return counter
    }

    const deleteItem = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, getTotal, getCounter, deleteItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider