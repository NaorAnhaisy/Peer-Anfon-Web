import React, { useEffect } from 'react';
import styles from '../styles/contact-us.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import ContactUsForm from '../components/ContactUsForm/ContactUsFor'
// import MapContainer from '../components/MapContainer/MapContainer';

export default function ContactUs() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <div className="push-from-navbar"></div>
            <Container className="mt-5">
                <div className={"mb-5 " + styles.contactUsPageTitleDiv}>
                    <h1>דברו איתנו</h1>
                    <div className="mt-3 mb-4 separator"></div>
                    <p>בין אם זה לקבוע תור לביקור אצלנו, לקבל ייעוץ מומחה או לדבר על דרישותיכם, נשמח לשמוע מכם. מלאו את הטופס למטה ונהיה בקשר.</p>
                </div>
                <Container>
                    <div className={styles.contactUsPageDiv}>
                        <div className={styles.contactUsPageImgDiv}>
                            <Image width={10} height={3} layout="responsive" alt="" src="/images/backgrounds/contact-us-background-2.jpg" />
                        </div>
                        <div className={styles.contactUsPageForm}>
                            <ContactUsForm />
                        </div>
                    </div>
                </Container>
            </Container>
            {/* <MapContainer /> */}
            <Container className={styles.contactUsContactInfoContainer}>
                <Row className={styles.contactUsContactInfoRow}>
                    <Col sm={12} md={6} lg={3}>
                        <h6>צרו קשר</h6>
                        <span><a href="tel:0525561128" className="no-href-css">טלפון: 072-3712701</a></span>
                        <br />
                        <span>דוא&quot;ל: info@8peer.co.il</span>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h6>כתובת</h6>
                        <span>הסדנא 13</span>
                        <br />
                        <span>חולון, אזור התעשייה 5881407</span>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h6>שעות פתיחה</h6>
                        <span>ראשון - חמישי: 8:00 - 20:00</span>
                        <br />
                        <span>שישי: 8:00 - 15:00</span>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h6>עקבו אחרינו</h6>
                        <div className={styles.socialsContactUs}>
                            <ul className={styles.socials}>
                                <li>
                                    <a href="https://example.com">
                                        <i className={`${styles.zmdi} ${styles.zmdiFacebook} zmdi zmdi-facebook`}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://example.com">
                                        <i className={`${styles.zmdi} ${styles.zmdiInstagram} zmdi zmdi-instagram`}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://example.com">
                                        <i className={`${styles.zmdi} ${styles.zmdiYoutubePlay} zmdi zmdi-youtube-play`}></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}