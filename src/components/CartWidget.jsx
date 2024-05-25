import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    const { getCounter } = useCart()
    return (
        <Link to="/cart">
            <div className="cart">
                <FontAwesomeIcon icon={faCartArrowDown} size="xl" style={{ color: "#0d0d0d", }} />
                <span className="cart-counter">{getCounter()}</span>
            </div>
        </Link>
    )
}

export default CartWidget;