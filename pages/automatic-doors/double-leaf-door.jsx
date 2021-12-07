/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Link from 'next/link';
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css"
import { useEffect } from "react";
import AOS from 'aos';
import ContactTeam from '../../components/ContactTeam/ContactTeam';

export default function DoubleLeafDoor() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
        document.getElementById('double-leaf-video').play();
    }, []);

    return (
        <div>
            <img src="/images/automatic-doors/double-leaf-automatic-door.jpg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="דלת אוטומטית דו-כנף" />
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
                                    <div>דו-כנף</div>
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
                                    דלת הזזה אוטומטית דו כנפית היא דלת בעלת שתי כנפיים אשר נפתחות באותו הזמן לשני הצדדים.
                                    לכל כנף מוצמד ציר שקובע את כיוון הפתיחה. דלת אוטומטית עם שתי כנפיים מתאימה בדרך כלל כאשר הפתח בכניסה הינו רחב.
                                    בכל אופן, כדאי לתת את הדעת על כיוון פתיחת הדלת – היא יכולה להיפתח כלפי פנים או כלפי חוץ.
                                    הדלת מתאימה למבנים ציבוריים או פרטיים שבהם קיים פתח גדול, יחסית, ומאפשרת להתקין דלת כנף דו כנפית שתהפוך להיות דלת קורסת במצבי חירום ותאפשר להמוני האנשים הרוצים לצאת במהירות מהבניין להימלט ממנו מתוך שמירה על כללי הבטיחות.
                                    דלת אוטומטית דו כנפית מגיעה עם מתאם סגירה המאפשר סגירה אוטומטית או ידנית כדי להבטיח נוחות של סגירה ופתיחה של הדלת.
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
                                    לחברתנו יש את הבלעדיות לשעון שבת אסטרונומי המותאם לדלתות הזזה אוטומטיות דו-כנף אשר הומצא על ידנו.
                                    מערכת השעון יודעת באופן אוטומטי מתי השבת נכנסת ויוצאת.
                                    המערכת מכוונת 15 שנה קדימה ומכירה בכל חגי וזמני ישראל.
                                    שעון שבת האסטרונומי עובד לפי שעון רבנו תם ויש לו אישור של צומת ומשמרות השבת.
                                    מערכת השעון מאפשרת לדלת להיפתח ולהיסגר לפי זמנים שנקבעו מראש.
                                    ברגע שהדלת נפתחת נשמע צפצוף, בכדי ששומר השבת ידע שהוא יכול לעבור באופן חופשי.
                                    כאשר הצפצוף נפסק ידע שומר השבת שאסור לא להתקרב לדלת.
                                    לאחר סיום הצפצוף המוגדר שנמשך כ-10 שניות הדלת נסגרת.
                                    חברתנו מספקת ,מייצרת ומתקינה אלפי דלתות אוטומטיות דו כנף במגוון דגמים רבים ברמת ביצוע וגימור מן הגבוהות ביותר.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <div className="mb-5">
                            <video autoPlay loop playsInline muted id="double-leaf-video" className={styles.automaticDoorVideo}>
                                <source src="/videos/automatic-doors/double-leaf-door.mp4"
                                    type="video/mp4" />
                            </video>
                        </div>
                    </Row>

                    <div>
                        <Row>
                            <Col sm={12} lg={6} className={styles.doorSelectedHorizontalImages}>
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example2.jpg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example3.jpg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '100%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example4.jpg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <img
                                style={{ maxHeight: '400px' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/Doors/LUX/example2.jpg"
                                alt="דלת אוטומטית דו כנף"
                            />
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ maxHeight: '400px' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example4.jpg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                                <img
                                    style={{ height: '100%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example4.jpg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '35%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example1.jpg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                                <img
                                    style={{ height: '35%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example2.jpg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                                <img
                                    style={{ height: '35%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example3.jpg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <ContactTeam />
        </div>
    );
}
