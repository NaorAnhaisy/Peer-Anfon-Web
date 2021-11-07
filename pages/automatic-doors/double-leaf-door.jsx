/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Link from 'next/link';
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css"
import { useEffect } from "react";
import AOS from 'aos';

export default function DoubleLeafDoor() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div>
            <img src="/images/automaticDoors/backgrounds/double-leaf-automatic-door.jpg" className={styles.doorSelectedMainDiv} alt="דלת אוטומטית" />
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
                            <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => router.back()}>
                                <div className={styles.arrowBackIcon}></div>
                                <span className={styles.arrowBackIconText}>חזור</span>
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
                                    הלקוח שלנו הגיע אלינו בחיפוש אחר דלתות המשלימות את הארכיטקטורה
                                    המדהימה ואת אומנות הבית החדש. לאחר שבחרנו במגוון דלתות האלון
                                    המדהימה ואת אומנות הבית החדש. לאחר שבחרנו במגוון דלתות האלון
                                    הטבעי Vario 6 שלנו, תערובת של עלים בודדים וכפולים, כולם בהתאמה
                                    אישית ומיוצרים לפי מידה, התבקשנו לעצב דלת כניסה בהתאמה אישית.
                                    אבטחה ותכונות בטיחות בעלות ביצועים גבוהים היו דרישות מפתח עבור
                                    הלקוח שלנו.
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
                                    הדף הכפול Vario 6 הותקן בחלקו האחורי של פרוזדור הכניסה הראשית,
                                    עם שתי דלתות עלים בודדות נוספות משני הצדדים. דלתות פנימיות
                                    Vario 6 שלנו כוללות תכונות פרימיום כסטנדרט, המספקות אבטחה
                                    נוספת בעיצוב איכותי. משקופים ואדריכלים תואמים עשויים מאותו עץ
                                    כדי להבטיח עיצוב עקבי בהתאמה אישית מלאה. אטם הדלת הגמיש מונע
                                    טריקות וטיחות, בעוד הצירים הנסתרים ותפס הדלת המגנטית משפרים את
                                    האבטחה ושומרים על עיצוב מינימלי. שלוש הדלתות המותקנות במסדרון
                                    משלימות את עיצוב הבית תוך הוספת נופך של תחכום למסגרת המסדרון.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <div className="mb-5">
                            <video autoPlay loop playsInline muted id="home-video" className={styles.automaticDoorVideo}>
                                <source src="/videos/double-leaf-door.mp4"
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
                                    alt=""
                                />
                                <img
                                    style={{ height: '50%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example3.jpg"
                                    alt=""
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '100%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example4.jpg"
                                    alt=""
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
                                alt=""
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
                                    alt=""
                                />
                                <img
                                    style={{ height: '100%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example4.jpg"
                                    alt=""
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <img
                                    style={{ height: '35%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example1.jpg"
                                    alt=""
                                />
                                <img
                                    style={{ height: '35%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example2.jpg"
                                    alt=""
                                />
                                <img
                                    style={{ height: '35%' }}
                                    className={styles.doorSelectedDetailsExampleImg}
                                    data-aos="fade-zoom-in"
                                    data-aos-duration="700"
                                    src="/images/Doors/LUX/example3.jpg"
                                    alt=""
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <div className={styles.doorSelectedContactUsDiv}>
                <h1>שמרו על קשר</h1>
                <div className="separator"></div>
                <p>
                    לקבלת הצעת מחיר, צרו עימנו קשר.
                </p>
                <Link href="/contact-us">דברו עם הצוות</Link>
            </div>
        </div>
    );
}
