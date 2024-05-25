import { useState } from 'react';
import { useCart } from '../context/CartContext';

function ItemCount({ item }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [showCount, setShowCount] = useState(true);

    const increment = () => {
        if (quantity < item.stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addCart = (product) => {
        addToCart(product);
        setShowCount(false);
    };

    return (
        <div className="product-counter" style={{ display: showCount ? 'display' : 'none' }}>
            <button className="counter-button" onClick={decrement}>-</button>
            <span className="counter-value">{quantity}</span>
            <button className="counter-button" onClick={increment}>+</button>
            <button className="addCart" onClick={() => addCart({ ...item, quantity })}>
                <span>Agregar al carrito</span>
            </button>
        </div>
    );
}

export default ItemCount;
