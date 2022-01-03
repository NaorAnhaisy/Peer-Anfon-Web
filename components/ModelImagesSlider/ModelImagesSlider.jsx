/* eslint-disable @next/next/no-img-element */
import styles from './ModelImagesSlider.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ModelImagesSlider(props) {
    return (
        <div className={`model-image-carousel-slider ${styles.wrapper}`}>
            {/* <SimpleImageSlider
                width={"100%"}
                height={"100%"}
                images={props.images}
                showBullets={true}
                showNavs={true}
                loop={true}
            /> */}

            <Carousel infiniteLoop useKeyboardArrows autoPlay statusFormatter={() => { return "" }}
            emulateTouch swipeable
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