import React, { useEffect } from "react";
import styles from "../styles/404.module.css";
import Link from 'next/link';
import Head from 'next/head';

export default function BadUrl() {
    useEffect(() => {
        window.onload = function () {
            document.querySelector(".contPrincipal").className =
                "contPrincipal contErrorActive";
        };
    }, []);

    return (
        <div className={styles.mainDiv}>
            <Head>
                <title>פאר אנפון תעשיות בע&quot;מ - דף לא נמצא</title>
            </Head>
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
