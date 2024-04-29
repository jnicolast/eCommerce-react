import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const { id } = useParams()
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const handleFetchData = async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setDetail(data);
        }
        handleFetchData()
    }, [id])

    return (
        <div className="productDetail">
            <ItemDetail item={detail} />
        </div>
    );
}

export default ItemDetailContainer;