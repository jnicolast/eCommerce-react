import { useState } from 'react';

function ItemCount() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="product-counter">
            <button className="counter-button" onClick={decrement}>-</button>
            <span className="counter-value">{count}</span>
            <button className="counter-button" onClick={increment}>+</button>
        </div>
    );
}

export default ItemCount;
