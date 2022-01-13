/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/automatic-doors.module.css";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import AOS from 'aos';
import ColorsTemplate from "../../components/ColorsTemplate/ColorsTemplate";

export default function Mailboxes() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const [isFirstContentShowed, setIsFirstContentShowed] = useState(false);
    const [isSecondContentShowed, setIsSecondContentShowed] = useState(false);

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
                        src="/images/mailboxes/slider-1.jpg"
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
                        src="/images/mailboxes/slider-2.jpeg"
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
                        src="/images/mailboxes/slider-3.jpeg"
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
                        src="/images/mailboxes/slider-4.jpeg"
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
                                    <div className={`${styles.titleInner} ${styles.subTitle} ${styles.secondTitle}`}>עיצוב תיבות דואר</div>
                                </div>
                                <div className={styles.contentText}>
                                    <div className={`${styles.contentTextInner} ${styles.subContentInner} ${styles.leftSideContent}`}>
                                        <div className={`mt-2 text-right`}>
                                            <div style={{ lineHeight: "28px" }}>
                                                תחום תיבות הדואר עבר שינוי מהותי בשנים האחרונות וידה של מהפיכת העיצוב הגיעה גם אליהם. תיבות הדואר מעוצבות, בבתים פרטיים ,מוסדות ובבנייני מגורים, כבר אינן מחזה נדיר, והן הולכות ותופסות נפח שוק גדול יותר ויותר.
                                                <br />
                                                לתיבת הדואר יש השפעה רבה על עיצובו של הבניין כיוון שהיא נמצאת בחזיתו.
                                                <br />
                                                לכן כדאי להשקיע ולבחור תיבות דואר מעוצבות שיוכלו להוסיף למראה הייחודי של הבניין.
                                                <br />
                                                תיבות הדואר המודרניות מאפשרות מגוון עיצובי לא קטן. ברוב המקרים העיצוב פרקטי של תיבות הדואר נשמר, והן מגיעות בצורה מלבנית סטנדרטית.
                                                <br />
                                                הנתונים המשתנים בתיבות הדואר הם, בדרך כלל, צבע תיבת הדואר והטקסטורה שלה, גודל – עומק, גובה ורוחב, היותן משוקעות או בולטות, מיקומן ואופן התקנתן ואפשרות לחריטת השם או מספר הדירה על חלקה הקדמי של תיבת הדואר.
                                                <br />
                                                את תיבת הדואר ניתן לעצב במגוון רחב של אפשרויות למשל על ידי השמת מערכת תיבות הדואר על עמודים או במסגרת מתכתית.
                                                <br />
                                                בנוסף ,ניתן לחרוט את המספרים בחריטת לייזר או על ידי הצבת מספור מובלט. כמו כן, ניתן להוסיף למערכת תיבות הדואר מקום לחריטת הכתובת.
                                                <br />
                                                תיבות דואר מעוצבות, ותיבות דואר בכלל, כדאי לרכוש מחברה אמינה, ותיקה ומקצועית.
                                            </div>
                                            <p className="mt-5 p-4" style={{ borderTop: '1px solid #b1a44c', textAlign: 'right' }}>
                                                חברת פאר אנפון מציעה מבחר רחב הקף של תיבות דואר מעוצבות לבניני מגורים, מוסדות ובתים פרטים.
                                                המומחים שלנו כאן כדי לתת לכם את כל המידע שאתם צריכים על תיבת דואר מעוצבות
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

            <Container className={styles.homeColorsContainer}>
                <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-once={true}>
                    <Row className={styles.homeFlexColumnReverse}>
                        <Col sm={12} lg={6} >
                            <ColorsTemplate />
                        </Col>
                        <Col sm={12} lg={6} className={styles.homeColorsTextCol}>
                            <h3>
                                גוונים לתיבות הדואר, כיצד לבחור?
                            </h3>
                            <p>
                                בחירת תיבת הדואר צריכה לקחת בחשבון את מרכיבי העיצוב והצבע כמו גם את הטעם האישי שלך.
                                הסגנון האינדיבידואלי אשר יבטיח את המענה האידאלי עבורך.
                                חברתנו אשר מנוסה בייצור של תיבות דואר מעניקה יעוץ ושקיפות מול הלקוח בשביל להגיע לתיבת הדואר המושלמת עבורך המשקפת את טעמך האישי.
                                את תיבת הדואר ניתן לקבל בכל גוון וצבע לפי בקשתך.
                                כל הגוונים שחברתנו מעניקה עומדים בפני חלודה ונזקי מזג האוויר.
                                <br />
                                להלן מספר גוונים הנפוצים והמודרניים ביותר בעיצוב הבנייה הישראלי.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>

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
                                        <img src="/images/mailboxes/shared-houses/background.jpeg" alt="תיבות דואר לבתים משותפים" className={styles.imageToCategorys} />
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
                                        <img src="/images/mailboxes/organizations/T-434.jpeg" alt="תיבות דואר למוסדות" className={styles.imageToCategorys} />
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
                                        <img src="/images/mailboxes/private-houses/P-315.jpg" alt="תיבות דואר לבתים פרטיים" className={styles.imageToCategorys} />
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
                                        <img src="/images/mailboxes/mailbox-rooms/R-001.jpeg" alt="חדרי תיבות דואר" className={styles.imageToCategorys} />
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
                                        <img src="/images/mailboxes/deposit-cellphones/Y-6.jpeg" alt="ארון הפקדה לטלפונים סלולריים" className={styles.imageToCategorys} />
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
            </div>
        </div >
    );
}
