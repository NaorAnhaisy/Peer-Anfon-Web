import styles from './ModelImagesSlider.module.css';
import SimpleImageSlider from "react-simple-image-slider";

export default function ModelImagesSlider(props) {
    return (
        <div className={styles.wrapper}>
            <SimpleImageSlider
                width={"100%"}
                height={504}
                images={props.images}
                showBullets={true}
                showNavs={true}
                loop={true}
            />
        </div>
    )
}