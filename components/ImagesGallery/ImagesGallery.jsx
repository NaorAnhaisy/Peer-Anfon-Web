/* eslint-disable @next/next/no-img-element */
import styles from './ImagesGallery.module.css';
import { useEffect } from 'react';
import AOS from 'aos';

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
            startEvent: 'load',
            once: true
        });
    }, []);

    return (
        <div className={styles.gallery}>
            {images?.map((image, i) => {
                return <div key={i} data-aos="fade-up" data-aos-offset="1500" data-aos-duration="700" className={`${image.strechType ? styles[image.strechType] : ""} ${styles.blackedImageOnHover}`}>
                    <img src={image.src} alt={`${altLabel} ${i + 1}`} />
                </div>
            })}
        </div>
    )
}