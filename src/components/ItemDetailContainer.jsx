import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getItem } from "../firebase/db";

function ItemDetailContainer() {
    const { id } = useParams()
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const handleFetchData = async () => {
            const data = await getItem(id);
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