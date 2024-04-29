import Item from "./Item";

function ItemList({ products }) {
    return (
        <div className="containerCard">
            {products.map(product => (
                <Item product={product} key={product.id} />
            ))}
        </div>
    );
}

export default ItemList