import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
    const { cart, getTotal } = useCart();
    return (
        <div className="containerCart">
            <CartItem />
            <div className="cartSummary">
                <div className="totalToPay">
                    <span>Resumen de tu compra</span>
                    <p><b>Total a pagar</b><b className="price">${getTotal()}</b></p>
                    {cart.length ? <Link to="/checkout">
                        <button>
                            Comprar
                        </button>
                    </Link> : ''}
                </div>
            </div>
        </div>
    )
}

export default Cart;