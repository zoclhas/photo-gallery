import React, { useState, useEffect } from "react";
import axios from "axios";

import { Grid, Card } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./lightbox.css";

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

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const body = document.querySelector("body");

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
        body.style.overflow = "hidden";
    };

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false);
        body.style.overflow = "scroll";
    };

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(images.length - 1)
            : setSlideNumber(slideNumber - 1);
    };

    // Next Image
    const nextSlide = () => {
        slideNumber + 1 === images.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
    };

    return (
        <div>
            {openModal && (
                <div className="sliderWrap">
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="btnClose"
                        onClick={handleCloseModal}
                    />
                    <FontAwesomeIcon
                        icon={faCircleChevronLeft}
                        className="btnPrev"
                        onClick={prevSlide}
                    />
                    <FontAwesomeIcon
                        icon={faCircleChevronRight}
                        className="btnNext"
                        onClick={nextSlide}
                    />
                    <div className="fullScreenImage">
                        <img
                            src={
                                images[slideNumber].image_upload
                                    ? `${URL}/${images[slideNumber].image_upload}`
                                    : images[slideNumber].image_link
                            }
                            alt={images[slideNumber].title}
                        />
                    </div>
                    <div className="bottom-info">
                        <h5 className="text-main">
                            {images[slideNumber].title}
                        </h5>
                        <h5 className="text-main-2">
                            {slideNumber + 1} of {images.length}
                        </h5>
                    </div>
                </div>
            )}
            <Grid.Container gap={1} css={{ padding: "1rem" }}>
                {images.map((image, index) => (
                    <Grid
                        lg={3}
                        md={4}
                        sm={6}
                        xs={12}
                        onClick={() => handleOpenModal(index)}
                    >
                        <img
                            src={
                                image.image_upload
                                    ? `${URL}${image.image_upload}`
                                    : image.image_link
                            }
                            className={styles["ambient-image"]}
                            alt={image.title}
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
                                alt={image.title}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
        </div>
    );
}

export default Gallery;
