/* eslint-disable @next/next/no-img-element */
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/about-us.module.css";
import doorsStyles from "../styles/automatic-doors.module.css";
import AOS from "aos";
import Link from 'next/link';
import { useEffect } from "react";

export default function AboutUs() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <Container className="mb-5">
            <div className="push-from-navbar"></div>
            <div className="mb-5 page-title">
                <h1 className="text-shine">אודות פאר אנפון</h1>
            </div>
            <div className="mb-5 separator"></div>
            <img src="/images/Doors/LUX/example3.jpg" alt="אודות פאר אנפון תעשיות בע&quot;מ" style={{ width: "100%", height: "100%" }} />
            <div style={{ width: "100%", overflow: "hidden" }}>
                <Row className={styles.colsRow}
                    data-aos="fade-up"
                    data-aos-once={true}
                    data-aos-duration="1100">
                    <Col xs={12} md={4}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.floatDiv}>
                                <h4 className={styles.colTitle}>50 שנות נסיון</h4>
                                <div className="mb-3 mt-3 separator"></div>
                                <p className={styles.colParagraph}>
                                    הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.floatDiv}>
                                <h4 className={styles.colTitle}>50 שנות נסיון</h4>
                                <div className="mb-3 mt-3 separator"></div>
                                <p className={styles.colParagraph}>
                                    הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.floatDiv}>
                                <h4 className={styles.colTitle}>50 שנות נסיון</h4>
                                <div className="mb-3 mt-3 separator"></div>
                                <p className={styles.colParagraph}>
                                    הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.explainRow}>
                    <Col xs={12} md={6} data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <img src="/images/Doors/LUX/example3.jpg" alt="פאר אנפון תעשיות בע&quot;מ" style={{ width: "100%", minHeight: "400px", objectFit: "cover" }} />
                    </Col>
                    <Col xs={12} md={6} data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <div className={styles.explainDiv}>
                            <h3>הפרטים שעושים את השינוי</h3>
                            <div className={`separator ${styles.separator}`}></div>
                            <p>
                                אנו מסורים לפרטים הקטנים ביותר של הדלת המותאמת אישית שלך, עובדים במפעל שלנו ביורקשייר כדי ליצור ולפקח באופן אישי על העיצוב המותאם שלך. עם הגאווה הגדולה ביותר בכל יצירה ויצירה, אנחנו אמנים של ייצור דלתות ומשתמשים באומנות מומחית כדי לייצר שלמות ולהגשים את החלום שלך. היצירתיות והרבגוניות של השירות המותאם שלנו בוודאי יעלו על הציפיות שלך וישאירו אותך בדיוק מה שדמיינת.            </p>
                            <Link href="/">
                                <a className={styles.linkToHome}>
                                    גלה עוד על פאר אנפון
                                </a>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={styles.importersDiv}>
                <h3>יבואניים בלעדיים</h3>
                <div className="separator"></div>
                <div className="mt-5">
                    <Row className={doorsStyles.rowImagesLinks}>
                        <Col data-aos="zoom-in"
                            data-aos-once={true}
                            data-aos-duration="1000"
                            xs={12} md={6} lg={4}>
                            <a className="no-href-css" href="https://www.erreka.com/en/" target="_blank" rel="noopener noreferrer">
                                <div className="clickable">
                                    <div className={doorsStyles.imageLinkDivToCategorys}>
                                        <img src="/images/importers/erreka.png" alt="Erreka יבואנית רשמית של פאר אנפון" className={doorsStyles.imageToCategorys} />
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col data-aos="zoom-in"
                            data-aos-once={true}
                            data-aos-duration="1000"
                            xs={12} md={6} lg={4}>
                            <a className="no-href-css" href="https://www.tauitalia.com/en/" target="_blank" rel="noopener noreferrer">
                                <div className="clickable">
                                    <div className={doorsStyles.imageLinkDivToCategorys}>
                                        <img src="/images/importers/logo-tau.png" alt="TAU יבואנית רשמית של פאר אנפון" className={doorsStyles.imageToCategorys} />
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col data-aos="zoom-in"
                            data-aos-once={true}
                            data-aos-duration="1000"
                            xs={12} md={6} lg={4}>
                            <a className="no-href-css" href="https://www.topp.it/" target="_blank" rel="noopener noreferrer">
                                <div className="clickable">
                                    <div className={doorsStyles.imageLinkDivToCategorys}>
                                        <img src="/images/importers/company-topp-sandrigo-italy-logo.png" alt="Topp יבואנית רשמית של פאר אנפון" className={doorsStyles.imageToCategorys} />
                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={styles.certificatesDiv}>
                <h3>תווי התקן שלנו</h3>
                <div className="separator"></div>
                <p>
                    הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                </p>
                <Row className={styles.certificatesRow}>
                    <Col xs={12} md={6} lg={4}>
                        <a href="/assets/certificates-he.pdf" target="_blank" rel="noopener noreferrer">
                            <img src="/images/certificates/certificate-he.jpg" alt="תווי תקן דלתות" />
                        </a>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <a href="/assets/certificates-iqnet.pdf" target="_blank" rel="noopener noreferrer">
                            <img src="/images/certificates/certificate-iqnet.jpg" alt="תווי תקן תיבות דואר" />
                        </a>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <a href="/assets/certificates-en.pdf" target="_blank" rel="noopener noreferrer">
                            <img src="/images/certificates/certificate-en.jpg" alt="תווי תקן אינטרקום" />
                        </a>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}