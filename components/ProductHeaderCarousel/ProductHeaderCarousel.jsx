/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-bootstrap";
import styles from "./ProductHeaderCarousel.module.css";

export default function ProductHeaderCarousel({ items, alt }) {
    const createCarouselIems = (items) => {
        return items.map((item, index) => {
            return (
                <Carousel.Item key={index}>
                    <img
                        className={styles.carouselImage}
                        src={item.image}
                        alt={alt}
                    />
                    <Carousel.Caption className={styles.carouselCaption}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });
    }

    return (
        <div>
            <Carousel
                autoPlay={true}
                interval={3500}
                pause={false}
                controls={false}
                indicators={true}
                fade={true}
            >
                {createCarouselIems(items)}
            </Carousel>
            <div style={{height: "10px", background: "black"}}/>
        </div>
    )
}