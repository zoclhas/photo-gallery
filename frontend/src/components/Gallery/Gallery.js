import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            const { data } = await axios.get(
                "http://127.0.0.1:8000/api/images/"
            );
            setImages(data);
        }

        fetchImages();
    }, []);

    return (
        <div>
            {images.map((image) => (
                <h1 key="image">{image}</h1>
            ))}
        </div>
    );
}

export default Gallery;
