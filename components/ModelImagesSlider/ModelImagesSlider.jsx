/* eslint-disable @next/next/no-img-element */
import styles from './ModelImagesSlider.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ModelImagesSlider({ images, alt }) {
    return (
        <div className={`model-image-carousel-slider ${styles.wrapper}`}>
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                emulateTouch
                interval={4000}
                stopOnHover={false}
                swipeable
                statusFormatter={() => { return "" }}
            >
                {images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image.url} alt={alt} />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )

}