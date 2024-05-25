import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ItemCount from './ItemCount';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import { useEffect, useState } from 'react';

function ItemDetail({ item }) {
    const [galleryImages, setGalleryImages] = useState([])

    useEffect(() => {
        if (item?.images?.length > 0) {
            const gallery = item.images.map(image => {
                return { original: image, thumbnail: image, originalHeight: "400px" }
            })

            setGalleryImages(gallery);
        }

    }, [item])
    return (
        <>
            <div className="imgBx">
                <ImageGallery items={galleryImages}
                    showPlayButton={false}
                    showFullscreenButton={false}
                />
            </div>
            <div className="description">
                <h2 className="brand">{item.brand}</h2>
                <h3 className="title">{item.title}</h3>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" value={item?.rating ?? 0} precision={0.1} readOnly />
                </Stack>
                <p className="stock">{`Disponible más de ${item.stock} unidades`}</p>
                <h2>${item.price}</h2>
                <div className="actionCart">
                    <ItemCount item={item} />
                </div>
                <p className="description-product">{item.description}</p>
            </div>
        </>
    );
}

export default ItemDetail;