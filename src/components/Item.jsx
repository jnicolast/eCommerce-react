import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Item({ product }) {
    const { addToCart } = useCart()
    const item = { ...product }
    item.quantity = 1;
    return (
        <div className="card">
            <Link to={`/item/${product.id}`}>
                <div className="imgBx">
                    <img src={product.images[0]} alt="Avatar" />
                </div>
            </Link>
            <div className="content">
                <div className="productName">
                    <h3>{product.title}</h3>
                </div>
                <div className="price">
                    <h2>${product.price}</h2>
                    <button onClick={() => addToCart(item)}>
                        <span>
                            Agregar
                            <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item