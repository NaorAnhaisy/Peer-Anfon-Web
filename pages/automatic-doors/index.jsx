/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Carousel, Col, Row } from "react-bootstrap";
import ImagesGallery from "../../components/ImagesGallery/ImagesGallery";
import styles from "../../styles/automatic-doors.module.css";
import Link from "next/link";
import Image from 'next/image';
import VisibilitySensor from "react-visibility-sensor";

const images = [
    { src: "/images/Doors/LUX/example1.jpg" },
    { src: "/images/Doors/LUX/example2.jpg", strechType: "vStrech" },
    { src: "/images/Doors/LUX/example3.jpg", strechType: "hStrech" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg" },
    { src: "/images/Doors/LUX/example2.jpg", strechType: "vStrech" },
    { src: "/images/Doors/LUX/example3.jpg", strechType: "bigStrech" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg", strechType: "hStrech" },
    { src: "/images/Doors/LUX/example2.jpg" },
    { src: "/images/Doors/LUX/example3.jpg" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg", strechType: "vStrech" },
    { src: "/images/Doors/LUX/example2.jpg" },
    { src: "/images/Doors/LUX/example3.jpg", strechType: "bigStrech" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg", strechType: "hStrech" },
    { src: "/images/Doors/LUX/example2.jpg" },
];

export default function AutomaticDoors() {
    const [isFirstContentShowed, setIsFirstContentShowed] = useState(false);
    const [isSecondContentShowed, setIsSecondContentShowed] = useState(false);
    const [isThirdContentShowed, setIsThirdContentShowed] = useState(false);

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
                        alt="First slide"
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
                        alt="Second slide"
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
                        alt="Third slide"
                    />
                    <Carousel.Caption className={styles.caruselCaption}>
                        <h3>מתאים לארגונים</h3>
                        <p>
                            דלתות אוטומטיות לחברות ומוסדות
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <img src="/images/automaticDoors/single-leaf-automatic-door.jpeg" alt="דלת אוטומטית חד כנף" style={{width: "1000px", height: "800px"}} />

            <VisibilitySensor partialVisibility onChange={(isVisible => { isVisible && setIsFirstContentShowed(true) })}>
                <div style={{ minHeight: "300px" }}>
                    <div className={styles.contentWrapper} style={{ display: isFirstContentShowed ? "grid" : "none" }}>
                        <div className={styles.content}>
                            <div className={styles.contentInner}>
                                <div className={styles.title}>
                                    <div className={`${styles.titleInner} ${styles.mainTitle}`}>דלתות אוטומטיות</div>
                                </div>
                                <div className={styles.contentText}>
                                    <div className={`${styles.contentTextInner} ${styles.mainContextInner}`}>
                                        פאר אנפון הינה יבואנית בלעדית של מערכות דלתות אוטומטיות של (www.Topp.it) Topp ו- TAU איטליה (www.tauitalia.com) המבטיחים איכות, שירות ואמינות מוצריה.
                                        <br />
                                        דלת הזזה אוטומטית יכולה להיות בעלת מראה זכוכית עם פרופיל דק או עם מסגרת עבה בהתאם לדרישות לקוח.
                                        <br />
                                        דלתות אוטומטיות מותקנות על מסילה עילית ומתקבל מראה אסתטי ונקי.
                                        <br />
                                        דלתות חשמליות אוטומטיות מותקנות בעיקר בפתחן של כניסה למשרדים, בתים משותפים , חנויות, ועוד.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.image}>
                            <img
                                src="/images/backgrounds/home-slide-3.jpeg"
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
                                    <div className={`${styles.titleInner} ${styles.subTitle}`}>יתרונות בולטים בבחירת דלתות אוטומטיות</div>
                                </div>
                                <div className={styles.contentText}>
                                    <div className={`${styles.contentTextInner} ${styles.subContentInner} dir-rtl`}>
                                        <div className={`mt-5 ${styles.ulContainer1}`}>
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
                                            <p className="mt-5 p-4" style={{ borderTop: '1px solid #b1a44c' }}>
                                                פאר אנפון נותנת יעוץ והתקנה לבנייני משרדים, חברות ובתים משותפים המעוניינים בפתרון מעולה ונח שלדלתות כניסה לבניין מהדור החדש – דלתות חשמליות ואוטומטיות מעוצבות ובצבע לפי בחירתכם.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.image}>
                            <img
                                src="/images/backgrounds/home-slide-2.jpeg"
                                alt="דלת אוטומטית"
                            />
                        </div>
                    </div>
                </div>
            </VisibilitySensor>

            <VisibilitySensor partialVisibility onChange={(isVisible => { isVisible && setIsThirdContentShowed(true) })}>
                <div style={{ minHeight: "300px" }}>
                    <div className={styles.contentWrapper} style={{ display: isThirdContentShowed ? "grid" : "none" }}>
                        <div className={styles.content}>
                            <div className={styles.contentInner}>
                                <div className={styles.title}>
                                    <div className={`${styles.titleInner} ${styles.subTitle}`}>דלתות חשמליות</div>
                                </div>
                                <div className={styles.contentText}>
                                    <div className={`${styles.contentTextInner} ${styles.subContentInner}`}>
                                        <div className={styles.ulContainer2}>
                                            <p>
                                                דלתות חשמליות, שבעבר היו מותקנות בעיקר בבנייני משרדים או מלונות יוקרה, הפכו לדלתות המועדפות כיום על בתים משותפים, חנויות ורבי קומות שונים. מה הופך דלתות חשמליות למועדפות?
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>נוחות השימוש</strong>{" "}-{" "}
                                                    דלתות חשמליות שנפתחות ללא צורך במנעול או ידית כניסה, הן נוחות לשימוש.  נוחות פתיחה וסגירה של דלת כניסה חשובה למשל בבתים משותפים מהם יוצאים דיירים עם מספר דברים או בחנויות שמהן יוצאים לקוחות עם שקיות ומוצרי הרכישה.
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <strong>נגישות</strong>{" "}-{" "}
                                                    דלתות חשמליות הן נגישות ומזמינות בעיקר לבעלי מוגבלויות ונכויות שונות. דלתות אלו מקלות מאוד על אדם המתקשה לפתוח את דלת הכניסה כשהוא על קביים או בכיסא גלגלים.                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <strong>אסטטיקה</strong>{" "}-{" "}
                                                    דלתות חשמליות ניתנות לעיצוב לפי דרישת הלקוח. דלתות חשמליות בדרך כלל מורכבות מזכוכית בעלת מראה יוקרתי ואסטטי מאוד, כמו כן ניתן לעצב אותן בעזרת סוגי זכוכית שונים, צבעים שונים של הזכוכית ואפילו עיטורים מיוחדים על הזכוכית.                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <strong>קלות התפעול</strong>{" "}-{" "}
                                                    דלתות חשמליות מופעלות על ידי מנגנון מיוחד, חברת פאר אנפון הינה היבואנית הבלעדית של מערכות של חברת Topp ו Tau איטליה שלהן מוצרים איכותיים ואמינים.                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.image}>
                            <img
                                src="/images/backgrounds/home-slide-1.jpeg"
                                alt="דלת אוטומטית"
                            />
                        </div>
                    </div>
                </div>
            </VisibilitySensor>

            {/* <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                    <div style={{ height: "1px" }}>
                        {isVisible && setIsSecondContentShowed(true)}
                    </div>
                )}
            </VisibilitySensor>

            <div className={styles.contentWrapper} style={{ display: isSecondContentShowed ? "grid" : "none" }}>
                <div className={styles.content}>
                    <div className={styles.contentInner}>
                        <div className={styles.title}>
                            <div className={styles.titleInner}>דלתות אוטומטיות</div>
                        </div>
                        <div className={styles.contentText}>
                            <div className={styles.contentTextInner}>
                                פאר אנפון הינה יבואנית בלעדית של מערכות דלתות אוטומטיות של TAU איטליה (www.tauitalia.com) המבטיחים איכות, שירות ואמינות מוצריה.
                                <br />
                                דלת הזזה אוטומטית יכולה להיות בעלת מראה זכוכית עם פרופיל דק או עם מסגרת עבה בהתאם לדרישות לקוח.
                                <br />
                                דלתות אוטומטיות מותקנות על מסילה עילית ומתקבל מראה אסתטי ונקי.
                                <br />
                                דלתות חשמליות אוטומטיות מותקנות בעיקר בפתחן של כניסה למשרדים, בתים משותפים , חנויות, ועוד.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.image}>
                    <img
                        src="https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600"
                        alt="דלת אוטומטית"
                    />
                </div>
            </div> */}

            {/* <div>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <div className={styles.contentInner}>
                            <div className={styles.title}>
                                <div className={styles.titleInner}>דלתות אוטומטיות</div>
                            </div>
                            <div className={styles.contentText}>
                                <div className={styles.contentTextInner}>
                                    פאר אנפון הינה יבואנית בלעדית של מערכות דלתות אוטומטיות של TAU איטליה (www.tauitalia.com) המבטיחים איכות, שירות ואמינות מוצריה.
                                    <br />
                                    דלת הזזה אוטומטית יכולה להיות בעלת מראה זכוכית עם פרופיל דק או עם מסגרת עבה בהתאם לדרישות לקוח.
                                    <br />
                                    דלתות אוטומטיות מותקנות על מסילה עילית ומתקבל מראה אסתטי ונקי.
                                    <br />
                                    דלתות חשמליות אוטומטיות מותקנות בעיקר בפתחן של כניסה למשרדים, בתים משותפים , חנויות, ועוד.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.image}>
                        <img
                            src="https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600"
                            alt="דלת אוטומטית"
                        />
                    </div>
                </div>
            </div> */}

            {/* <div className={styles.contentWrapper}>
                <div className={styles.divContainer}>
                    <div className={styles.title}>
                        <div className={styles.titleInner}>
                            <div className={styles.cafe}>
                                <div className={styles.cafeInner}>יתרונות בולטים בבחירת דלתות אוטומטיות</div>
                            </div>
                            <div className={styles.mozart}>
                                <div className={styles.mozartInner}>
                                    <div className={`mt-5 ${styles.ulContainer1}`}>
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
                                        <p className="mt-5" style={{ borderTop: '1px solid #b1a44c' }}>
                                            פאר אנפון נותנת יעוץ והתקנה לבנייני משרדים, חברות ובתים משותפים המעוניינים בפתרון מעולה ונח שלדלתות כניסה לבניין מהדור החדש – דלתות חשמליות ואוטומטיות מעוצבות ובצבע לפי בחירתכם.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.image}>
                        <img
                            src="https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600"
                            alt="דלת אוטומטית"
                        />
                    </div>
                </div>
            </div> */}

            {/* <Row className={styles.automaticDoorsRow} data-aos="fade-right" data-aos-duration="700">
                    <Col xs={12} lg={6} className="pr-5 pl-5">
                        <h3 data-aos="zoom-in" data-aos-delay="600">דלתות אוטומטיות</h3>
                        <p>
                            פאר אנפון : יבואנית בלעדית של מערכות דלתות אוטומטיות של TAU איטליה המבטיחים איכות , שירות ואמינות מוצריה . www.tauitalia.com
                            דלת הזזה אוטומטית יכולה להיות בעלת מראה זכוכית עם פרופיל דק או עם מסגרת עבה בהתאם לדרישות לקוח .
                            דלתות אוטומטיות אוטומטיות מותקנות על מסילה עילית ומתקבל מראה אסתטי ונקי.
                            דלתות חשמליות אוטומטיות מותקנות בעיקר בפתחן של כניסה למשרדים, בתים משותפים , חנויות, ועוד{" "}
                        </p>
                    </Col>
                    <Col xs={12} lg={6} className="pr-5 pl-5">
                        <img
                            src="/images/automaticDoors/Automatic-door-1.jpeg"
                            className={styles.doorSelectedMainDiv}
                            alt="דלת אוטומטית"
                        />
                    </Col>
                </Row> */}

            {/* <Row className={styles.automaticDoorsRow} data-aos="fade-left" data-aos-duration="700">
                    <Col xs={12} lg={6} className="pr-5 pl-5">
                        <img
                            src="/images/automaticDoors/Automatic-door-2.jpeg"
                            className={styles.doorSelectedMainDiv}
                            alt="דלת אוטומטית"
                        />
                    </Col>
                    <Col xs={12} lg={6} className="pr-5 pl-5">
                        <h3 data-aos="zoom-in" data-aos-delay="600">יתרונות בולטים בבחירת דלתות אוטומטיות</h3>
                        <div className={`mt-5 ${styles.ulContainer1}`}>
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
                            <p className="mt-5" style={{ borderTop: '1px solid #b1a44c' }}>
                                פאר אנפון נותנת יעוץ והתקנה לבנייני משרדים, חברות ובתים משותפים המעוניינים בפתרון מעולה ונח שלדלתות כניסה לבניין מהדור החדש – דלתות חשמליות ואוטומטיות מעוצבות ובצבע לפי בחירתכם.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className={styles.automaticDoorsRow} data-aos="fade-right" data-aos-duration="700">
                    <Col xs={12} lg={6} >
                        <h3 data-aos="zoom-in" data-aos-delay="600">דלתות חשמליות</h3>
                        <div className={styles.ulContainer2}>
                            <p>
                                דלתות חשמליות, שבעבר היו מותקנות בעיקר בבנייני משרדים או מלונות יוקרה, הפכו לדלתות המועדפות כיום על בתים משותפים, חנויות ורבי קומות שונים. מה הופך דלתות חשמליות למועדפות?
                            </p>
                            <ul>
                                <li>
                                    <strong>נוחות השימוש</strong>{" "}-{" "}
                                    דלתות חשמליות שנפתחות ללא צורך במנעול או ידית כניסה, הן נוחות לשימוש.  נוחות פתיחה וסגירה של דלת כניסה חשובה למשל בבתים משותפים מהם יוצאים דיירים עם מספר דברים או בחנויות שמהן יוצאים לקוחות עם שקיות ומוצרי הרכישה.
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>נגישות</strong>{" "}-{" "}
                                    דלתות חשמליות הן נגישות ומזמינות בעיקר לבעלי מוגבלויות ונכויות שונות, שלצערינו יש לא מעט בארצנו. דלתות אלו מקלות מאוד על אדם המתקשה לפתוח את דלת הכניסה כשהוא על קביים או בכיסא גלגלים.                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>אסטטיקה</strong>{" "}-{" "}
                                    דלתות חשמליות ניתן לעצב לפי דרישת הלקוח. דלתות חשמליות בדרך כלל מורכבות מזכוכית בעלת מראה יוקרתי ואסטטי מאוד, כמו כן ניתן לעצב אותן בעזרת סוגי זכוכית שונים, צבעים שונים של הזכוכית ואפילו עיטורים מיוחדים על הזכוכית.                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <strong>קלות התפעול</strong>{" "}-{" "}
                                    דלתות חשמליות מופעלות על ידי מנגנון מיוחד, חברת פאר אנפון הינה היבואנית הבלעדית של מערכות דלתות חשמליות של חברת TAU איטליה שלה מוצרים איכותיים ואמינים.                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} >
                        <img
                            src="/images/automaticDoors/Automatic-door-3.jpeg"
                            className={styles.doorSelectedMainDiv}
                            alt="דלת אוטומטית"
                        />
                    </Col>
                </Row> */}

            <div className={styles.automaticDoorsContainer}>
                <Row className={styles.rowImagesLinks}>
                    <Col xs={12} md={6} lg={4}>
                        <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-חד-כנף">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <Image src="/images/automaticDoors/single-leaf-automatic-door.jpeg" alt="דלת אוטומטית חד כנף" className={styles.imageToCategorys} layout="responsive" width={10} height={8} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>דלת הזזה חד-כנף</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-דו-כנף">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <Image src="/images/automaticDoors/double-leaf-automatic-door.jpg" alt="דלת אוטומטית דו כנף" className={styles.imageToCategorys} layout="responsive" width={10} height={8} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>דלת הזזה דו-כנף</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-טלסקופית">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <Image src="/images/automaticDoors/telescop-automatic-door.jpeg" alt="דלת אוטומטית טלסקופית" className={styles.imageToCategorys} layout="responsive" width={10} height={8} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>דלת אוטומטית טלסקופית</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-קורסת">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <Image src="/images/automaticDoors/Automatic-door-4.jpg" alt="דלת אוטומטית קורסת" className={styles.imageToCategorys} layout="responsive" width={10} height={8} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>דלת הזזה קורסת</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                    {/* <Col xs={12} md={6} lg={4} className={styles.displayNoneMobile}>
                    </Col> */}
                    <Col xs={12} md={6} lg={4}>
                        <div className="clickable">
                            <div className={styles.imageLinkDivToCategorys}>
                                <Image src="/images/automaticDoors/Automatic-door-5.jpg" alt="דלת פנים אוטומטית" className={styles.imageToCategorys} layout="responsive" width={10} height={8} />
                            </div>
                            <div className={styles.imageLinkDivText}>
                                <h5>דלת פנים אוטומטית</h5>
                                <div className={styles.separatorLinkText} />
                                <p>
                                    דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div style={{ marginTop: "100px" }}>
                    <ImagesGallery images={images} altLabel={"דלתות אוטומטיות"} />
                </div>
            </div>
        </div >
    );
}
