/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from "next/link";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/articles.module.css";
import AOS from "aos";

let articles = require('../../data/articles.json');

export default function Articles() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div>
            <Head>
                <title>פאר אנפון - מאמרים מקצועיים</title>
            </Head>

            <Container className="mt-5 mb-5">
                <div className="push-from-navbar"></div>
                <div className="mb-5 page-title">
                    <h1 className="text-shine">מאמרים מקצועיים</h1>
                </div>
                <div className="mb-5 separator"></div>

                <Container fluid>
                    <Row className={styles.articlesRow}>
                        {articles.map((article, index) => {
                            return <Col key={index} xs={12} md={6} lg={4} xl={3}>
                                <Link href={`/מאמרים/${article.articleID}`}>
                                    <a>
                                        <div className={styles.card}>
                                            <figure className={styles.cardThumb}>
                                                <img src={article.imgSrc} alt={`פאר אנפון - מאמר ${article.title}`} className={styles.cardImage} />
                                                <figcaption className={styles.cardCaption}>
                                                    <h2 className={styles.cardTitle}>{article.title}</h2>
                                                    {/* <p className={styles.cardSnippet}>{article.subtitle}</p> */}
                                                    <Link href={`/מאמרים/${article.articleID}`}>
                                                        <a className={styles.cardButton}>קראו עוד</a>
                                                    </Link>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </a>
                                </Link>
                            </Col>
                        })}
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
