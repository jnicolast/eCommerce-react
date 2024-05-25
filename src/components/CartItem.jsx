import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../context/CartContext";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function CartItem() {
    const { cart, deleteItem } = useCart();
    return (
        <div className="cartItem">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>PRODUCTO</th>
                        <th>CANTIDAD</th>
                        <th>PRECIO</th>
                        <th>TOTAL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(item =>
                            <tr key={item.id}>
                                <td>
                                    <img src={item.images[0]} />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td><b>$ {item.price}</b></td>

                                <td><b>$ {item.price * item.quantity}</b></td>
                                <td>
                                    <button onClick={() => deleteItem(item.id)}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CartItem