import React, { useState, useEffect } from "react";
import axios from "axios";

import { Grid, Card } from "@nextui-org/react";

function Gallery({ styles }) {
    const [images, setImages] = useState([]);

    const URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        async function fetchImages() {
            const { data } = await axios.get(`${URL}/api/images`);
            setImages(data);
        }

        fetchImages();
    }, []);

    console.log(`${URL}/api/images`);

    return (
        <Grid.Container gap={1} css={{ padding: "1rem" }}>
            {images.map((image) => (
                <Grid lg={3} md={4} sm={6} xs={12}>
                    <img
                        src={
                            image.image_upload
                                ? `${URL}${image.image_upload}`
                                : image.image_link
                        }
                        className={styles["ambient-image"]}
                        width="20%"
                        height="40%"
                    />
                    <Card
                        isPressable
                        css={{ height: "100%", zIndex: "2" }}
                        key={image.title}
                    >
                        <Card.Image
                            src={
                                image.image_upload
                                    ? `${URL}${image.image_upload}`
                                    : image.image_link
                            }
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="Relaxing app background"
                        />
                    </Card>
                </Grid>
            ))}
        </Grid.Container>
    );
}

export default Gallery;
