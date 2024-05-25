import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { getItems, getItemsFromCategory } from "../firebase/db";
import Loader from "./Loader";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleFetchData = async () => {
            const data = id ? await getItemsFromCategory(id) : await getItems();
            setItems(data);
            setLoading(false)
        }
        handleFetchData()

    }, [id]);

    return (
        <div className="containerProducts">
            <div className="loader">
                <Loader loading={loading}></Loader>
            </div>
            <ItemList products={items} />
        </div>
    )
}


export default ItemListContainer