/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
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
            <img src="/images/automatic-doors/backgrounds/double-leaf-automatic-door.jpg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="דלת אוטומטית דו-כנף" />
            <div className={styles.separatorModelHeaderImage} />
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

                    <Row className="flex-dir-row-reverse">
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

                    <div className={styles.doorSelectedGalleryContainer}>
                        <Row className="flex-dir-col-reverse-lg-screen">
                            <Col sm={12} lg={6}>
                                {/* <Zoom>
                                    <img src="/images/automatic-doors/doubleLeaf-door/double_leaf_29.jpeg"
                                        alt={`ארון הפקדה לטלפונים סלולריים`}
                                        style={{ height: "auto", width: "100%", objectFit: "cover" }}
                                        />
                                </Zoom> */}
                                <img
                                    style={{ height: '50%', maxHeight: '50vh', minHeight: '250px' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_29.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                                <img
                                    style={{ height: '50%', maxHeight: '50vh', minHeight: '250px' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_12.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <video autoPlay loop playsInline muted id="double-leaf-video"
                                style={{ height: '100%', maxHeight: '100vh', minHeight: '500px' }}
                                    className={styles.doorSelectedDetailsExampleImg}>
                                    <source src="/videos/automatic-doors/double-leaf-door.mp4"
                                        type="video/mp4" />
                                </video>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_21.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_31.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <img
                                className={`${styles.doorSelectedDetailsExampleImg} ${styles.allRowImage}`}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/doubleLeaf-door/double_leaf_28.jpeg"
                                alt="דלת אוטומטית דו כנף"
                            />
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_7.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_8.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '100%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_18.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_9.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_10.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_11.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_14.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <img
                                className={`${styles.doorSelectedDetailsExampleImg} ${styles.allRowImage}`}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/doubleLeaf-door/double_leaf_13.jpeg"
                                alt="דלת אוטומטית דו כנף"
                            />
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_15.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_16.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>


                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_6.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_17.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '100%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_1.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_19.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_20.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <img
                                className={`${styles.doorSelectedDetailsExampleImg} ${styles.allRowImage}`}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/doubleLeaf-door/double_leaf_27.jpeg"
                                alt="דלת אוטומטית דו כנף"
                            />
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_4.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_22.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '100%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_18.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_23.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_25.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_26.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_5.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <img
                                className={`${styles.doorSelectedDetailsExampleImg} ${styles.allRowImage}`}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/doubleLeaf-door/double_leaf_37.jpeg"
                                alt="דלת אוטומטית דו כנף"
                            />
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_30.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_24.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <img
                                className={`${styles.doorSelectedDetailsExampleImg} ${styles.allRowImage}`}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/doubleLeaf-door/double_leaf_38.jpeg"
                                alt="דלת אוטומטית דו כנף"
                            />
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_32.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_33.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '100%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_34.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_35.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_36.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_3.jpeg"
                                    alt="דלת אוטומטית דו כנף"
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    className={`${styles.doorSelectedDetailsExampleImg} ${styles.inRowImages}`}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/automatic-doors/doubleLeaf-door/double_leaf_2.jpeg"
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
