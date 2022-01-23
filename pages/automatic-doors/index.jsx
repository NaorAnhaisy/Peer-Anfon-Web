/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { Carousel, Col, Row } from "react-bootstrap";
import styles from "../../styles/automatic-doors.module.css";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import AOS from 'aos';

export default function AutomaticDoors() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const [isFirstContentShowed, setIsFirstContentShowed] = useState(false);
    const [isSecondContentShowed, setIsSecondContentShowed] = useState(false);
    const [isThirdContentShowed, setIsThirdContentShowed] = useState(false);
    const [isForthContentShowed, setIsForthContentShowed] = useState(false);

    return (
        <div className="product-title-carousel">
            <Carousel
                autoPlay={true}
                interval={4000}
                controls={false}
                indicators={true}
                fade={true}
            >
                <Carousel.Item>
                    <img
                        className={styles.caruselImage}
                        src="/images/Doors/door-1.jpeg"
                        alt="דלתות אוטומטיות"
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
                        alt="דלתות אוטומטיות"
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
                        alt="דלתות אוטומטיות"
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
                                    <div className={`${styles.titleInner} ${styles.mainTitle} ${styles.firstTitle}`}>דלתות אוטומטיות</div>
                                </div>
                                <div className={styles.contentText}>
                                    <div className={`${styles.contentTextInner} ${styles.mainContextInner}`}>
                                        חברת פאר אנפון הינה יבואנית בלעדית של מערכות דלתות אוטומטיות של החברות האירופאיות:
                                        <br />
                                        TOPP (<a href="https://www.Topp.it" target="_blank" rel="noreferrer noopener">www.Topp.it</a>), TAU (<a href="https://www.tauitalia.com" target="_blank" rel="noreferrer noopener">www.tauitalia.com</a>), ERREKA (<a href="https://www.erreka.com" target="_blank" rel="noreferrer noopener">www.erreka.com</a>)
                                        <br />
                                        המבטיחות איכות, שירות ואמינות מוצריה. כל המוצרים שלנו עומדים בדרישות של מכון התקנים הישראלי ובתקן האירופאי.
                                        <br />
                                        אנו מציעים מגוון עשיר ורחב היקף של דלתות אוטומטיות וכן מספקים שירותי ייעוץ, תכנון, ייצור, התקנה ותחזוקה של דלתות אוטומטיות
                                        <br />
                                        לבנייני מגורים, למוסדות, לבתי מלון, לבתי חולים, למרכזים מסחריים ועוד.
                                        <br />
                                        דלת הזזה אוטומטית יכולה להיות בעלת מראה זכוכית עם פרופיל אלומיניום דק או עבה בהתאם לדרישות הלקוח,
                                        <br />
                                        וכמו כן דלתות האוטומטיות יכולות להגיע בכל גוון ובכל מגוון סוגי הזכוכיות לפי טעמו של הלקוח.
                                        <br />
                                        דלתות אוטומטיות מותקנות על מסילה עילית המקבלות מראה אסתטי ונקי.
                                        <br />
                                        אנו מעניקים שירות אדיב ,יעיל, איכותי ומקצועי לכלל לקוחותינו ומבטיחים מוצרים איכותיים ואמינים ללא פשרות.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.image}>
                            <img
                                src="/images/backgrounds/home-slide-3.jpg"
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
                                    <div className={`${styles.titleInner} ${styles.subTitle} ${styles.secondTitle}`}>יתרונות בולטים בבחירת דלתות אוטומטיות</div>
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
                                                פאר אנפון נותנת יעוץ והתקנה לבנייני משרדים, חברות ובתים משותפים המעוניינים בפתרון מעולה ונח שלדלתות כניסה לבניין מהדור החדש -
                                                <br />
                                                דלתות חשמליות ואוטומטיות מעוצבות ובצבע לפי בחירתכם.
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
                                    <div className={`${styles.titleInner} ${styles.subTitle} ${styles.thirdTitle}`}>דלתות חשמליות</div>
                                </div>
                                <div className={styles.contentText}>
                                    <div className={`${styles.contentTextInner} ${styles.subContentInner}`}>
                                        <div className={styles.ulContainer2}>
                                            <p>
                                                דלתות חשמליות, שבעבר היו מותקנות בעיקר בבנייני משרדים או מלונות יוקרה, הפכו לדלתות המועדפות כיום על בתים משותפים, חנויות ורבי קומות שונים.
                                                <br />
                                                מה הופך דלתות חשמליות למועדפות?
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>נוחות השימוש</strong>{" "}-{" "}
                                                    דלתות חשמליות שנפתחות ללא צורך במנעול או ידית כניסה, הן נוחות לשימוש.
                                                    <br />
                                                    נוחות פתיחה וסגירה של דלת כניסה חשובה למשל בבתים משותפים מהם יוצאים דיירים עם מספר דברים או בחנויות שמהן יוצאים לקוחות עם שקיות ומוצרי הרכישה.
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
                                                    דלתות חשמליות ניתנות לעיצוב לפי דרישת הלקוח. דלתות חשמליות בדרך כלל מורכבות מזכוכית בעלת מראה יוקרתי ואסטטי מאוד.
                                                    <br />
                                                    כמו כן ניתן לעצב אותן בעזרת סוגי זכוכית שונים, צבעים שונים של הזכוכית ואפילו עיטורים מיוחדים על הזכוכית.                                </li>
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

            <VisibilitySensor partialVisibility onChange={(isVisible => { isVisible && setIsForthContentShowed(true) })}>
                <div style={{ minHeight: "300px" }}>
                    <div className={`${styles.contentWrapper} ${styles.leftContext}`} style={{ display: isForthContentShowed ? "grid" : "none" }}>
                        <div className={styles.content}>
                            <div className={styles.contentInner}>
                                <div className={styles.title}>
                                    <div className={`${styles.titleInner} ${styles.subTitle} ${styles.secondTitle}`}>מנגנון שעון שבת אסטרונומי</div>
                                </div>
                                <div className={styles.contentText}>
                                    <div className={`${styles.contentTextInner} ${styles.subContentInner} dir-rtl`}>
                                        <div className={`mt-2 ${styles.forthSectionExplain}`}>
                                            לחברתנו יש את הבלעדיות לשעון שבת אסטרונומי המותאם לדלתות הזזה אוטומטיות אשר הומצא על ידנו.
                                            <br />
                                            מערכת השעון יודעת באופן אוטומטי מתי השבת נכנסת ויוצאת.
                                            המערכת מכוונת 15 שנה קדימה ומכירה בכל חגי וזמני ישראל.
                                            <br />
                                            שעון שבת האסטרונומי עובד לפי שעון רבנו תם ויש לו אישור של צומת ומשמרות השבת.
                                            מערכת השעון מאפשרת לדלת להיפתח ולהיסגר לפי זמנים שנקבעו מראש.
                                            <br />
                                            ברגע שהדלת נפתחת נשמע צפצוף ,בכדי ששומר השבת ידע שהוא יכול לעבור באופן חופשי.
                                            כאשר הצפצוף נפסק ידע שומר השבת שאסור לא להתקרב לדלת.
                                            <br />
                                            לאחר סיום הצפצוף המוגדר שנמשך כ-10 שניות הדלת נסגרת.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.image}>
                            <img
                                src="/images/backgrounds/home-slide-5.jpeg"
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
                        <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-חד-כנף">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <img src="/images/automatic-doors/single-leaf-automatic-door.jpg" alt="דלת אוטומטית חד כנף" className={styles.imageToCategorys} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>דלת הזזה חד-כנף</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            <span className={styles.modelSumDescription}>איזה כיף להיכנס</span>
                                            <br />
                                            דלתות אוטומטיות הנפתחות בפני השבים והיוצאים משרה אוירה חיונית ומעניקה תחושת חשיבות לכניסת לקוח לחנות, למשרד או לבניין – יש תחושה שמזמינה להיכנס.
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
                        <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-דו-כנף">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <img src="/images/automatic-doors/double-leaf-automatic-door.jpg" alt="דלת אוטומטית דו כנף" className={styles.imageToCategorys} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>דלת הזזה דו-כנף</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            <span className={styles.modelSumDescription}>היגיינה תמיד חשוב</span>
                                            <br />
                                            דלת אוטומטית מסייעת בשמירה על ניקיון החלל בכך שהיא מקטינה את כמות הלכלוך שנכנס למינימום. אין צורך במגע יד אדם ולכן הדלת נשארת נקייה לאורך זמן.
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
                        <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-טלסקופית">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <img src="/images/automatic-doors/telescop-automatic-door.jpeg" alt="דלת אוטומטית טלסקופית" className={styles.imageToCategorys} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>דלת אוטומטית טלסקופית</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            <span className={styles.modelSumDescription}>ניצול מקסימלי של השטח</span>
                                            <br />
                                            דלת אוטומטית טלסקופית מאפשרת גרירת כנפי הדלת לצדדים ולכן מהווה פתרון מושלם עבור חללים בהם מרווח הפתח הוא מצומצם או שדרוש מעבר רחב במיוחד.
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
                        <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-קורסת">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <img src="/images/automatic-doors/collapse-automatic-door.jpeg" alt="דלת אוטומטית קורסת" className={styles.imageToCategorys} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>דלת הזזה קורסת</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            <span className={styles.modelSumDescription}>בטיחות מעל הכל</span>
                                            <br />
                                            דלתות אוטומטיות קורסות הן אחד האמצעים המתקדמים ביותר המאפשרים להציל חיי אדם בעת מצבי חירום.
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
                        <Link href="/דלתות-אוטומטיות/דלת-פנים-אוטומטית">
                            <a className="no-href-css">
                                <div className="clickable">
                                    <div className={styles.imageLinkDivToCategorys}>
                                        <img src="/images/automatic-doors/inside-automaic-door.jpg" alt="דלת פנים אוטומטית" className={styles.imageToCategorys} />
                                    </div>
                                    <div className={styles.imageLinkDivText}>
                                        <h5>דלת פנים אוטומטית</h5>
                                        <div className={styles.separatorLinkText} />
                                        <p>
                                            <span className={styles.modelSumDescription}>חושבים על כולם</span>
                                            <br />
                                            השימוש בדלת אוטומטית פנימית מאפשרת נגישות לנכים ומקלה על בעלי מוגבלויות.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div >
    );
}
