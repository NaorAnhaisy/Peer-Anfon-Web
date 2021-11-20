/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { Carousel, Col, Row } from "react-bootstrap";
import ImagesGallery from "../../components/ImagesGallery/ImagesGallery";
import styles from "../../styles/automatic-doors.module.css";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import AOS from 'aos';

// const images = [
//     { src: "/images/Doors/LUX/example1.jpg" },
//     { src: "/images/Doors/LUX/example2.jpg", strechType: "vStrech" },
//     { src: "/images/Doors/LUX/example3.jpg", strechType: "hStrech" },
//     { src: "/images/Doors/LUX/example4.jpg" },
//     { src: "/images/Doors/LUX/example1.jpg" },
//     { src: "/images/Doors/LUX/example2.jpg", strechType: "vStrech" },
//     { src: "/images/Doors/LUX/example3.jpg", strechType: "bigStrech" },
//     { src: "/images/Doors/LUX/example4.jpg" },
//     { src: "/images/Doors/LUX/example1.jpg", strechType: "hStrech" },
//     { src: "/images/Doors/LUX/example2.jpg" },
//     { src: "/images/Doors/LUX/example3.jpg" },
//     { src: "/images/Doors/LUX/example4.jpg" },
//     { src: "/images/Doors/LUX/example1.jpg", strechType: "vStrech" },
//     { src: "/images/Doors/LUX/example2.jpg" },
//     { src: "/images/Doors/LUX/example3.jpg", strechType: "bigStrech" },
//     { src: "/images/Doors/LUX/example4.jpg" },
//     { src: "/images/Doors/LUX/example1.jpg", strechType: "hStrech" },
//     { src: "/images/Doors/LUX/example2.jpg" },
// ];

export default function MailboxRooms() {
    useEffect(() => {
        AOS.init({ once: true });
    });

    const [isFirstContentShowed, setIsFirstContentShowed] = useState(false);
    const [isSecondContentShowed, setIsSecondContentShowed] = useState(false);

    return (
        <div>
            <Carousel
                autoPlay={true}
                interval={1000}
                controls={false}
                indicators={true}
                fade={true}
            >
                <Carousel.Item>
                    <img
                        className={styles.caruselImage}
                        src="/images/Doors/door-1.jpeg"
                        alt="תיבות דואר"
                    />
                    <Carousel.Caption className={styles.caruselCaption}>
                        <h3>עיצוב ססגוני</h3>
                        <p>דלתות אוטומטיות מעוצבות ויוקרתיות</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.caruselImage}
                        src="/images/Doors/door-2.jpeg"
                        alt="תיבות דואר"
                    />
                    <Carousel.Caption className={styles.caruselCaption}>
                        <h3>עיצוב ססגוני</h3>
                        <p>דלתות אוטומטיות מעוצבות ויוקרתיות</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.caruselImage}
                        src="/images/Doors/door-1.jpeg"
                        alt="תיבות דואר"
                    />
                    <Carousel.Caption className={styles.caruselCaption}>
                        <h3>לפי הדרישה שלך</h3>
                        <p>דלתות אוטומטיות לבניינים</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.caruselImage}
                        src="/images/Doors/door-5.jpeg"
                        alt="תיבות דואר"
                    />
                    <Carousel.Caption className={styles.caruselCaption}>
                        <h3>מתאים לארגונים</h3>
                        <p>
                            דלתות אוטומטיות לחברות ומוסדות
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <VisibilitySensor partialVisibility onChange={(isVisible => { isVisible && setIsFirstContentShowed(true) })}>
                <div style={{ minHeight: "300px" }}>
                    <div className={styles.contentWrapper} style={{ display: isFirstContentShowed ? "grid" : "none" }}>
                        <div className={styles.content}>
                            <div className={styles.contentInner}>
                                <div className={styles.title}>
                                    <div className={`${styles.titleInner} ${styles.mainTitle} ${styles.firstTitle}`}>תיבות דואר</div>
                                </div>
                                <div className={styles.contentText}>
                                    <div className={`${styles.contentTextInner} ${styles.mainContextInner}`}>
                                        חברת פאר אנפון תעשיות בע&quot;מ הינה החברה המובילה והגדולה בארץ בייצור, יבוא והתקנה של תיבות מכתבים ותיבות דואר.
                                        <br />
                                        פאר קיימת מעל ל- 60 שנה בייצור תיבות מכתבים והייתה שותפה בבניית התקן הישראלי ת&quot;י 816 עם מכון התקנים הישראלי.
                                        <br />
                                        כל מוצרינו עומדים בדרישות של מכון התקנים הישראלי ובתקן האירופאי.
                                        <br />
                                        חברתנו הינה יצרנית תיבות הדואר הראשונה בארץ ובעלת ותק של למעלה מ-60 שנה בתחום.
                                        <br />
                                        תיבות הדואר (תיבות מכתבים) המיוצרות במפעלינו הן במגוון רחב היקף בהתאם לדרישת הלקוח.
                                        <br />
                                        לחברה בלעדיות על מנעולים עם הרכבה פתוחה או סגורה.
                                        <br />
                                        תיבות הדואר שלנו מתאפיינות באיכותן ובעיצובן המותאם לדרישת הלקוח.
                                        <br />
                                        אנו מעניקים שירות אדיב, יעיל, איכותי ומקצועי ללקוחותינו ומבטיחים מוצרים איכותיים עמידים ואמינים ללא פשרות.
                                        <br />
                                        אנו מספקים שירותי ייעוץ, תכנון, ייצור והתקנה של תיבות דואר לבנייני מגורים, לבתים פרטיים, לגופים ולמוסדות, למרכזים מסחריים ועוד.
                                        <br />
                                        לחברה מאות אלפי לקוחות מרוצים אשר כבר נהנים ממבחר תיבות מכתבים של פאר אנפון.
                                        <br />
                                        צרו קשר עמנו עוד היום ונציגינו ישמחו לענות במהירות לכל שאלה ובקשה.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.image}>
                            <img
                                src="/images/mailboxes/main-slide-1.jpg"
                                alt="דלת אוטומטית"
                            />
                        </div>
                    </div>
                </div>
            </VisibilitySensor>

            <VisibilitySensor partialVisibility onChange={(isVisible => { isVisible && setIsSecondContentShowed(true) })}>
                <div style={{ minHeight: "300px" }}>
                    <div className={`${styles.contentWrapper} ${styles.leftContext}`} style={{ display: isSecondContentShowed ? "grid" : "none" }}>
                        <div className={styles.content}>
                            <div className={styles.contentInner}>
                                <div className={styles.title}>
                                    <div className={`${styles.titleInner} ${styles.subTitle} ${styles.secondTitle}`}>יתרונות בולטים בבחירת תיבות דואר</div>
                                </div>
                                <div className={styles.contentText}>
                                    <div className={`${styles.contentTextInner} ${styles.subContentInner} dir-rtl`}>
                                        <div className={`mt-2 ${styles.ulContainer1}`}>
                                            <ul>
                                                <li>
                                                    השימוש בדלת אוטומטית מאפשרת נגישות לנכים ומקלה על בעלי מוגבלויות.
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    דלת אוטומטית מסייעת בשמירה על ניקיון החלל בכך שהיא מקטינה את כמות הלכלוך שנכנס למינימום. אין צורך במגע יד אדם ולכן נשארת נקייה לאורך זמן.
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    התקנת דלת אוטומטית בכניסה מעניקה תחושת חשיבות לכניסת לקוח לחנות, למשרד או לבניין – יש תחושה שמזמינה להיכנס.
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    דלתות אוטומטיות הנפתחות בפני יוצאים ונכנסים משרה אוירה מזמינה ומנומסת עבור הדיירים והאורחים בבניין.
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    דלתות חשמליות נוחות באופן משמעותי לבאים והיוצאים עם קניות בידיהם, ילדים, תיקים ועוד.
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    קיימת אפשרות לעיצוב על פי דרישות הלקוח.
                                                </li>
                                            </ul>
                                            <p className="mt-5 p-4" style={{ borderTop: '1px solid #b1a44c', textAlign: 'right' }}>
                                                פאר אנפון נותנת יעוץ והתקנה לבנייני משרדים, חברות ובתים משותפים המעוניינים בפתרון מעולה ונח שלדלתות כניסה לבניין מהדור החדש – דלתות חשמליות ואוטומטיות מעוצבות ובצבע לפי בחירתכם.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.image}>
                            <img
                                src="/images/mailboxes/main-slide-2.jpg"
                                alt="דלת אוטומטית"
                            />
                        </div>
                    </div>
                </div>
            </VisibilitySensor>

            <div className={styles.automaticDoorsContainer}>
                <Row className={styles.rowImagesLinks}>
                    <Col data-aos="zoom-in"
                        data-aos-once={true}
                        data-aos-duration="1000"
                        xs={12} md={6} lg={4}>
                        <Link href="/תיבות-דואר/תיבות-דואר-לבתים-משותפים">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <img src="/images/automatic-doors/single-leaf-automatic-door.jpg" alt="תיבות דואר לבתים משותפים" className={styles.imageToCategorys} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>תיבות דואר לבתים משותפים</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col data-aos="zoom-in"
                        data-aos-once={true}
                        data-aos-duration="1000"
                        xs={12} md={6} lg={4}>
                        <Link href="/תיבות-דואר/תיבות-דואר-למוסדות">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <img src="/images/automatic-doors/double-leaf-automatic-door.jpg" alt="תיבות דואר למוסדות" className={styles.imageToCategorys} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>תיבות דואר למוסדות</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col data-aos="zoom-in"
                        data-aos-once={true}
                        data-aos-duration="1000"
                        xs={12} md={6} lg={4}>
                        <Link href="/תיבות-דואר/תיבות-דואר-לבתים-פרטיים">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <img src="/images/automatic-doors/telescop-automatic-door.jpeg" alt="תיבות דואר לבתים פרטיים" className={styles.imageToCategorys} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>תיבות דואר לבתים פרטיים</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col data-aos="zoom-in"
                        data-aos-once={true}
                        data-aos-duration="1000"
                        xs={12} md={6} lg={4}>
                        <Link href="/תיבות-דואר/חדרי-תיבות-דואר">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <img src="/images/automatic-doors/collapse-automatic-door.jpeg" alt="חדרי תיבות דואר" className={styles.imageToCategorys} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>חדרי תיבות דואר</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col data-aos="zoom-in"
                        data-aos-once={true}
                        data-aos-duration="1000"
                        xs={12} md={6} lg={4}>
                        <Link href="/תיבות-דואר/ארון-הפקדה-לטלפונים-סלולריים">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <img src="/images/automatic-doors/inside-automaic-door.jpg" alt="ארון הפקדה לטלפונים סלולריים" className={styles.imageToCategorys} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>ארון הפקדה לטלפונים סלולריים</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                </Row>

                {/* <div style={{ marginTop: "100px" }}>
                    <ImagesGallery images={images} altLabel={"דלתות אוטומטיות"} />
                </div> */}
            </div>
        </div >
    );
}
