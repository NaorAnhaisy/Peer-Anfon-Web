import React from 'react';
import styles from './RotateLoader.module.css';

export default function RotateLoader(props) {
    return (
        <div className={`${props.className} ${styles.rotateLoader}`}></div>
    )
}