/* eslint-disable @next/next/no-img-element */
import styles from './ImagesGallery.module.css';

/**
 * @param {Array.<object>} images Array of objects, which inlcues:
 *  src: Source Path to images to
 *  strechType: One of the following: {null}, "vStrech", "hStrech", "bigStrech"
 * @param {string} altLabel alt label to all the images
 * @returns Responsive Images Gallery Component.
 */
export default function ImagesGallery({ images, altLabel }) {
    return (
        <div className={styles.gallery}>
            {images?.map((image, i) => {
                return <div key={i} className={image.strechType ? styles[image.strechType] : ""}>
                    <img src={image.src} alt={`${altLabel} ${i + 1}`} />
                </div>
            })}
        </div>
    )
}