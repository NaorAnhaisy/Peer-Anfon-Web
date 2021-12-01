/* eslint-disable @next/next/no-img-element */
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "../../styles/projects.module.css";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";

let projects = require('../../data/projects.json');

export default function Projects() {
    return (
        <div>
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
                                <div className={styles.card}>
                                    <figure className={styles.cardThumb}>
                                        <img src={article.imgSrc} alt="Picture by Daniel Lincoln" className={styles.cardImage} />
                                        <figcaption className={styles.cardCaption}>
                                            <h2 className={styles.cardTitle}>{article.title}</h2>
                                            <p className={styles.cardSnippet}>{article.subtitle}</p>
                                            <Link href={`/articles/${article.articleID}`}>
                                                <a className={styles.cardButton}>קראו עוד</a>
                                            </Link>
                                        </figcaption>
                                    </figure>
                                </div>
                            </Col>
                        })}
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
