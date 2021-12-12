/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css"
import { useEffect } from "react";
import AOS from 'aos';
import ContactTeam from '../../components/ContactTeam/ContactTeam';

export default function SingleLeafDoor() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
        document.getElementById('single-leaf-video').play();
    }, []);

    return (
        <div>
            <img src="/images/automatic-doors/single-leaf-automatic-door.jpg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="דלת אוטומטית חד-כנף" />
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
                                    <div>חד-כנף</div>
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
                                    דלת הזזה אוטומטית חד כנף היא דלת בעלת כנף אחת אשר נפתחת לכיוון אחד (ימין / שמאל) בהתאם לדרישת הלקוח.
                                    מתאימה לחנויות, ללובי של משרדים, לבניינים מגורים, למוסדות ציבור ועוד.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="reverse-flex-direction">
                        <Col lg={6} sm={12}>
                            <div className={`mt-5 mb-5 ${styles.doorSelectedDoorDetails}`}
                                data-aos="zoom-out"
                                data-aos-delay="500"
                                data-aos-duration="1500">
                                <h6>פתרון Peer Anfon</h6>
                                <p>
                                    לחברתנו יש את הבלעדיות לשעון שבת אסטרונומי המותאם לדלתות הזזה אוטומטיות חד-כנף אשר הומצא על ידנו.
                                    מערכת השעון יודעת באופן אוטומטי מתי השבת נכנסת ויוצאת.
                                    המערכת מכוונת 15 שנה קדימה ומכירה בכל חגי וזמני ישראל.
                                    שעון שבת האסטרונומי עובד לפי שעון רבנו תם ויש לו אישור של צומת ומשמרות השבת.
                                    מערכת השעון מאפשרת לדלת להיפתח ולהיסגר לפי זמנים שנקבעו מראש.
                                    ברגע שהדלת נפתחת נשמע צפצוף, בכדי ששומר השבת ידע שהוא יכול לעבור באופן חופשי.
                                    כאשר הצפצוף נפסק ידע שומר השבת שאסור לא להתקרב לדלת.
                                    לאחר סיום הצפצוף המוגדר שנמשך כ-10 שניות הדלת נסגרת.
                                    חברתנו מספקת ,מייצרת ומתקינה אלפי דלתות אוטומטיות חד כנף במגוון דגמים רבים ברמת ביצוע וגימור מן הגבוהות ביותר.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <div className="mb-5">
                            <video autoPlay loop playsInline muted id="single-leaf-video" className={styles.automaticDoorVideo}>
                                <source src="https://d2na49kk21qo66.cloudfront.net/Deuren-Internal-Video-Low-Res.mp4"
                                    type="video/mp4" />
                            </video>
                        </div>
                    </Row>

                    <Row>
                        <Col sm={12} lg={6} className={styles.doorSelectedHorizontalImages}>
                            <img
                                style={{ height: '50%' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/singleLeaf-door/singleleaf-1.jpg"
                                alt="דלת אוטומטית חד כנף"
                            />
                            <img
                                style={{ height: '50%' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/singleLeaf-door/singleleaf-2.jpeg"
                                alt="דלת אוטומטית חד כנף"
                            />
                        </Col>
                        <Col sm={12} lg={6}>
                            <img
                                style={{ height: '100%' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/singleLeaf-door/singleleaf-3.jpeg"
                                alt="דלת אוטומטית חד כנף"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <img
                            style={{ height: '50%' }}
                            className={styles.doorSelectedDetailsExampleImg}
                            data-aos="fade-zoom-in"
                            data-aos-duration="700"
                            src="/images/automatic-doors/singleLeaf-door/singleleaf-8.jpeg"
                            alt="דלת אוטומטית חד כנף"
                        />
                    </Row>
                    <Row>
                        <Col sm={12} lg={6} className={styles.doorSelectedHorizontalImages}>
                            <img
                                style={{ height: '100%', maxHeight: '800px' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/singleLeaf-door/singleleaf-4.jpeg"
                                alt="דלת אוטומטית חד כנף"
                            />

                        </Col>
                        <Col sm={12} lg={6}>
                            <img
                                style={{ height: '100%', maxHeight: '800px' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/singleLeaf-door/singleleaf-5.jpeg"
                                alt="דלת אוטומטית חד כנף"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <img
                            style={{ height: '50%' }}
                            className={styles.doorSelectedDetailsExampleImg}
                            data-aos="fade-zoom-in"
                            data-aos-duration="700"
                            src="/images/automatic-doors/singleLeaf-door/singleleaf-9.jpeg"
                            alt="דלת אוטומטית חד כנף"
                        />
                    </Row>
                    <Row>
                        <Col sm={12} lg={6} className={styles.doorSelectedHorizontalImages}>
                            <img
                                style={{ height: '100%', maxHeight: '800px' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/singleLeaf-door/singleleaf-10.jpeg"
                                alt="דלת אוטומטית חד כנף"
                            />

                        </Col>
                        <Col sm={12} lg={6}>
                            <img
                                style={{ height: '100%', maxHeight: '800px' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/singleLeaf-door/singleleaf-11.jpeg"
                                alt="דלת אוטומטית חד כנף"
                            />
                        </Col>
                    </Row>
                </div>
            </Container>

            <ContactTeam />
        </div>
    );
}
