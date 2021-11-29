/* eslint-disable @next/next/no-img-element */
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "../../styles/articles.module.css";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";

let articles = require('../../data/articles.json');

export default function Articles() {
    return (
        <div>
            <Container className="mt-5 mb-5">
                <div className="push-from-navbar"></div>
                <div className="mb-5 page-title">
                    <h1>מאמרים מקצועיים</h1>
                    <div className="mt-3 mb-4 separator"></div>
                </div>
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
                            // return <Link passHref key={index} href={`/articles/${article.articleID}`}>
                            //     <Col xs={12} md={6} lg={4} xl={3}>
                            //         <Card
                            //             className={styles.articleCard}>
                            //             <Card.Img variant="top" src={article.imgSrc} />
                            //             <Card.Body>
                            //                 <Card.Title className={styles.cardTitle}>{article.title}</Card.Title>
                            //                 {/* <Card.Text className={styles.articleCardSubTitle}>
                            //                     {article.subtitle}
                            //                 </Card.Text> */}
                            //             </Card.Body>
                            //             <Card.Footer className={styles.articleFooter}>
                            //                 <img src="/images/‏‏company-logo-symbol.png" alt="פאר אנפון תעשתיות בעמ" className={`undragablle-image ${styles.companyLogoSymbol}`} />
                            //             </Card.Footer>
                            //         </Card>
                            //     </Col>
                            // </Link>
                        })}
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
