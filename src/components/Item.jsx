import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";

function Item({ product }) {
    const addCart = () => {
    }

    return (
        <Link to={`/item/${product.id}`}>
            <div className="card">
                <div className="imgBx">
                    <img src={product.images[0]} alt="Avatar" />
                </div>
                <div className="content">
                    <div className="productName">
                        <h3>{product.title}</h3>
                    </div>
                    <div className="price">
                        <h2>${product.price}</h2>
                        <button onClick={addCart}>
                            <span>
                                Agregar
                                <FontAwesomeIcon icon={faCartShopping} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item