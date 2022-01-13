/* eslint-disable @next/next/no-img-element */
import styles from './ModelImagesSlider.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ModelImagesSlider(props) {
    return (
        <div className={`model-image-carousel-slider ${styles.wrapper}`}>
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                emulateTouch
                interval={5000}
                swipeable
                statusFormatter={() => { return "" }}
            >
                {props.images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image.url} alt="model" />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )

}