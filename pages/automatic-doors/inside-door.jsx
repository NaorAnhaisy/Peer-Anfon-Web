/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css"
import { useEffect } from "react";
import AOS from 'aos';
import ContactTeam from '../../components/ContactTeam/ContactTeam';

export default function InsideDoor() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div>
            <img src="/images/automatic-doors/backgrounds/inside-automaic-door-background.png" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="דלת אוטומטית פנים" />
            <Container className={styles.doorSelectedContainer}>
                <div>
                    <Row className={styles.doorSelectedTitleRow}>
                        <Col lg={9} md={8} sm={8} xs={12} className={styles.doorSelectedNameDiv}>
                            <div className={styles.animatedTitle}>
                                <div className={styles.textTop}>
                                    <div>
                                        <span>דלת אוטומטית</span>
                                    </div>
                                </div>
                                <div className={styles.textBottom}>
                                    <div>פנימית</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={4} xs={12} style={{ alignSelf: 'center', padding: "50px" }}>
                            <div className={styles.arrowBackIconWrapper} onClick={() => router.push(`/דלתות-אוטומטיות`)}>
                                <div className={styles.arrowBackIcon}></div>
                                <span className={styles.arrowBackIconText}>לכל הדגמים</span>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6} sm={12}
                            data-aos="zoom-out"
                            data-aos-delay="200"
                            data-aos-duration="1500">
                            <div className={`mt-5 ${styles.doorSelectedDoorDetails}`}>
                                <h6>היעדים</h6>
                                <p>
                                    דלתות פנים אוטומטיות מבית החברה העולמית Topp Italy לבתי יוקרה או לקהל הנכים בישראל.
                                    <br />
                                    דלתות TOPP Italy, דגם V1, עבור דלתות הזזה פנים, משקל דלת מקסימלית 70kgלטעון. ספק כוח 50 הרץ, 220V.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="flex-dir-row-reverse">
                        <Col lg={6} sm={12}>
                            <div className={`mt-5 mb-5 ${styles.doorSelectedDoorDetails}`}
                                data-aos="zoom-out"
                                data-aos-delay="500"
                                data-aos-duration="1500">
                                <h6>פתרון Peer Anfon</h6>
                                <p>
                                    • התקנה קלה.
                                    <br />
                                    • יכולת הסתגלות פשוטה לדלתות הזזה הקיימות היום בשוק.
                                    <br />
                                    • ממדים מינימליים ועיצוב מושך.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <Col sm={12} md={6}>
                            <div className="mb-5">
                                <video controls controlsList="nodownload" className={styles.automaticDoorVideo}>
                                    <source src="/videos/automatic-doors/inside-automatic-door-1.mp4"
                                        type="video/mp4" />
                                </video>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="mb-5">
                                <video controls controlsList="nodownload" className={styles.automaticDoorVideo}>
                                    <source src="/videos/automatic-doors/inside-automatic-door-2.mp4"
                                        type="video/mp4" />
                                </video>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <ContactTeam />
        </div>
    );
}
