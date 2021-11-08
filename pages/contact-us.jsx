import React, { useEffect } from 'react';
import styles from '../styles/contact-us.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import ContactUsForm from '../components/ContactUsForm/ContactUsForm'
import MapContainer from '../components/MapContainer/MapContainer';

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
                <Container className={styles.contactUsFormContainer}>
                    <div className={styles.contactUsPageDiv}>
                        <div className={styles.contactUsPageImgDiv}>
                            <Image width={5} height={7} layout="responsive" alt="" src="/images/backgrounds/contact-us-background-3.jpeg" />
                        </div>
                        <div className={styles.contactUsPageForm}>
                            <ContactUsForm />
                        </div>
                    </div>
                </Container>
            </Container>
            <MapContainer />
            <Container className={styles.contactUsContactInfoContainer}>
                <Row className={styles.contactUsContactInfoRow}>
                    <Col sm={12} md={6} lg={3}>
                        <h6>צרו קשר</h6>
                        <span><a href="tel:0723712701" className="no-href-css">טלפון: 072-371-2701</a></span>
                        <br />
                        <span><a href="mailto:info@8peer.co.il" className="no-href-css">דוא&quot;ל: info@8peer.co.il</a></span>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h6>כתובת</h6>
                        <a target="_blank" rel="noreferrer noopener"
                            href="https://www.waze.com/ul?q=%D7%94%D7%A1%D7%93%D7%A0%D7%90+13+%D7%97%D7%95%D7%9C%D7%95%D7%9F&navigate=yes" className="no-href-css">
                            הסדנא 13
                            <br />
                            חולון, אזור התעשייה 5881407
                        </a>
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
                                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <i className={`${styles.zmdi} ${styles.zmdiFacebook} zmdi zmdi-facebook`}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <i className={`${styles.zmdi} ${styles.zmdiInstagram} zmdi zmdi-instagram`}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
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