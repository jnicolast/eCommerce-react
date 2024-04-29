import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const handleFetchData = async () => {
            const URL = id ? `https://dummyjson.com/products/category/${id}` : `https://dummyjson.com/products`;
            const response = await fetch(URL);
            const data = await response.json();
            setItems(data.products);
        }
        handleFetchData()

    }, [id]);

    return (
        <div className="containerProducts">
            <ItemList products={items} />
        </div>
    )
}


export default ItemListContainer