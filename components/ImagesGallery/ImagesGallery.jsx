/* eslint-disable @next/next/no-img-element */
import styles from './ImagesGallery.module.css';
import { useEffect } from 'react';
import AOS from 'aos';
import ProgressiveImage from 'react-progressive-graceful-image';

/**
 * @param {Array.<object>} images Array of objects, which inlcues:
 *  src: Source Path to images to
 *  strechType: One of the following: {null}, "vStrech", "hStrech", "bigStrech"
 * @param {string} altLabel alt label to all the images
 * @returns Responsive Images Gallery Component.
 */
export default function ImagesGallery({ images, altLabel }) {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);

    return (
        <div className={styles.gallery}>
            {images?.map((image, i) => {
                return <div key={i} data-aos="fade-up" data-aos-offset="100" data-aos-duration="700" className={`${image.strechType ? styles[image.strechType] : ""} ${styles.blackedImageOnHover}`}>
                    <ProgressiveImage src={image.src} placeholder={image.placeholder || image.src}>
                        {(src) => <img src={src} alt={`${altLabel} ${i + 1}`} className={styles.image} />}
                    </ProgressiveImage>

                    {/* <img loading="lazy" src={image.src} alt={`${altLabel} ${i + 1}`} className={styles.image} /> */}
                </div>
            })}
        </div>
    )
}