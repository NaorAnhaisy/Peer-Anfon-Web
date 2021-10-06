import React, { useEffect } from "react";
import styles from "../styles/404.module.css";
import Link from 'next/link';

export default function BadUrl() {
    useEffect(() => {
        window.onload = function () {
            document.querySelector(".contPrincipal").className =
                "contPrincipal contErrorActive";
        };
    }, []);

    return (
        <div className={styles.mainDiv}>
            <div className="contPrincipal">
                <div className={styles.contError}>
                    <h1>אופס!</h1>
                    <p>הדף שחיפשת אינו נמצא...</p>
                    <p className={styles.badUrlBackToHomeLink}><Link href="/">לדף הבית</Link></p>
                </div>
                <div className={styles.contAura1}></div>
                <div className={styles.contAura2}></div>
            </div>
        </div>
    );
}
