/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import styles from "../../styles/automatic-doors.module.css";
import gatesStyles from "../../styles/quick-enter-gates.module.css";
import VisibilitySensor from "react-visibility-sensor";
import ContactTeam from '../../components/ContactTeam/ContactTeam';
// import ProductHeaderCarousel from '../../components/ProductHeaderCarousel/ProductHeaderCarousel';
import AOS from 'aos';

export default function Mailboxes() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const [isFirstContentShowed, setIsFirstContentShowed] = useState(false);
    const [isSecondContentShowed, setIsSecondContentShowed] = useState(false);

    return (
        <>
            <Head>
                <title>פאר אנפון - מעברי כניסה</title>
            </Head>

            <div className="product-title-carousel">
                <div className="push-from-navbar" />
                {/* <ProductHeaderCarousel items={[
                { image: "/images/Doors/door-1.jpeg", title: "עיצוב ססגוני", desc: "דלתות אוטומטיות מעוצבות ויוקרתיות" },
                { image: "/images/Doors/door-2.jpeg", title: "לפי הדרישה שלך", desc: "דלתות אוטומטיות לבניינים" },
                { image: "/images/Doors/door-5.jpeg", title: "מתאים לארגונים", desc: "דלתות אוטומטיות לחברות ומוסדות" },
            ]} alt="מעברי כניסה אוטומטיים" /> */}

                <VisibilitySensor partialVisibility onChange={(isVisible => { isVisible && setIsFirstContentShowed(true) })}>
                    <div style={{ minHeight: "300px" }}>
                        <div className={styles.contentWrapper} style={{ display: isFirstContentShowed ? "grid" : "none" }}>
                            <div className={styles.content}>
                                <div className={styles.contentInner}>
                                    <div className={styles.title}>
                                        <div className={`${styles.titleInner} ${styles.subTitle} ${styles.firstTitle}`}>מעברים מהירים</div>
                                    </div>
                                    <div className={styles.contentText}>
                                        <div className={`${styles.contentTextInner} ${styles.mainContextInner}`}>
                                            מעברים מהירים מתאימים לפתרונות כניסה אלגנטיים ויוקרתיים, שיכול לזהות באופן מלא את המעבר של גוף האדם, בכדי לאפשר בטיחות, אמינות, מהירות ויעלות.
                                            <br />
                                            מעבר מהיר הוא מוצר משודרג של שער הנדנדה, ושער המהירות נקרא גם שער הנדנדה היוקרתי.
                                            <br />
                                            בשימוש נרחב בבתי מגורים יוקרתיים, בנייני משרדים, תחנות רכבת מהירות, תחנות רכבת תחתית, מקומות תיירותיות, בתי מלון, מרכזי עסקים, אצטדיונים וכו&apos;.
                                            <br />
                                            <br />
                                            <b>יתרונות:</b>
                                            <br />
                                            <ul>
                                                <li>
                                                    מהירות פתיחת המעברים מהירה מאוד, בין 30 - 50 אנשים בדקה. יכולת להחליק ללא הרף את הכרטיס ולפתוח את המעבר.
                                                    <br />
                                                    למעבר יש פונקציית זיכרון והוא מקושר להגנה מפני אש.
                                                    להולכי רגל נוח לעבור במהירות, וזה יתרון מרכזי של המעברי המהירים.
                                                </li>
                                                <li>
                                                    לדלת מעבר המהירות יש פונקציית אנטי - התנגשות ואיפוס אוטומטי.
                                                    <br />
                                                    לדוגמה, כאשר שער המעבר נתקל לפתע בכוח חיצוני, זרוע המעבר תסטה לכיוון הכוח כדי לבטל את הכוח החיצוני.
                                                    <br />
                                                    זרוע המעבר יכולה להתאפס אוטומטית בקלות, ואם מישהו פורץ את השער, זרועות המעבר יינעלו אוטומטית והמכונה תשמיעה אזעקה.
                                                </li>
                                                <li>
                                                    מצב כיבוי אש - אם המעבר המהיר מקבל את האות של מצב כיבוי אש, מכונת השער תיכנס אוטומטית למצב כיבוי אש, מותאם לפינוי חירום, ולא ייסגר כרצונו.
                                                    <br />
                                                    המעבר ייפתח אוטומטית כדי לאפשר מעבר חופשי, בהתאם לדרישות פונקציית ההגנה מפני אש.
                                                </li>
                                                <li>
                                                    ניתן לחבר את המעבר המהיר למחשב, וניתן להפעיל ולהגדיר אותו מרחוק, אם יש רשת.
                                                </li>
                                                <li>
                                                    מעבר מהיר נועד לשלוט על הולכי רגל הנכנסים או היוצאים משטחים מוגבלים, והוא משמש בדרך כלל לזרימת תנועה גבוהה של הולכי רגל בשני הכיוונים.
                                                </li>
                                                <li>
                                                    הגוף עשוי מפלדת אל חלד מוברשת וסגסוגת אלומיניום היוצרת נקודת גישה חלקה ואלגנטית המשתלבת ברוב הסביבה הפנימית.
                                                </li>
                                                <li>
                                                    זה יכול להיות משולב עם כל סוג של מערכת בקרת גישה למשל: מערכת לזיהוי פנים , לחצן לחיצה, טביעת אצבע ומכשיר ביומטרי.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.image}>
                                <img
                                    src="/images/quick-enter-gates/speed-gates/F-5_e.png"
                                    alt="מעברים מהירים"
                                />
                            </div>
                        </div>
                    </div>
                </VisibilitySensor>

                <VisibilitySensor partialVisibility onChange={(isVisible => { isVisible && isFirstContentShowed && setIsSecondContentShowed(true) })}>
                    <div style={{ minHeight: "300px" }}>
                        <div className={`${styles.contentWrapper} ${styles.leftContext}`} style={{ display: isSecondContentShowed ? "grid" : "none" }}>
                            <div className={styles.content}>
                                <div className={styles.contentInner}>
                                    <div className={styles.title}>
                                        <div className={`${styles.titleInner} ${styles.subTitle} ${styles.secondTitle}`}>קרוסלות חצובה</div>
                                    </div>
                                    <div className={styles.contentText}>
                                        <div className={`${styles.contentTextInner} ${styles.mainContextInner} ${styles.leftSideContent}`}>
                                            <div className={`mt-2 text-right`}>
                                                <div style={{ lineHeight: "28px" }}>
                                                    קרוסלת החצובה היא מערכת בקרת כניסה הנפוצה למקומות בעלי תפוקה גבוהה של עוברים ושבים.
                                                    שער הקרוסלה בנוי היטב כדי להגביר את עמידותו.
                                                    <br />
                                                    יכול להיות מותקן מחוץ או בתוך המבנה ומספק בקרת גישה לסוגים שונים של מבנים.
                                                    קרוסלת החצובה היא חסכונית וקומפקטית.
                                                    <br />
                                                    קרוסלת חצובה עשויה במיוחד לבקרת גישה מהירה באזורים עם עומס רב
                                                    <br />
                                                    .הקרוסלה עמידה בפני קורוזיה ומצוידת במנגנון כבד, בכדי לאפשר חיי שירות ארוכים.
                                                    <br />
                                                    הקרוסלה יכולה לשמש עבור מקומות הדורשים ניהול חכם, כגון בניין משרדים, ארגונים, פארקים, בית חולים, מרכזי עסקים, חדרי כושר, אתרי תיירות, תחנה, רציפים, מטרו, מלון, שדה תעופה, אצטדיונים, מוזאונים, מקומות תרבות וכן הלאה.
                                                    מטרתו בעיקר לבצע ניהול גישה חכם לכוח אדם.
                                                    <br />
                                                    <br />
                                                    <b>יתרונות:</b>
                                                    <br />
                                                    <ul>
                                                        <li>
                                                            הקרוסלה מאפשרת העלאת נתונים בזמן אמת כדי לעזור ללקוחות להתמודד עם ניתוח נתונים שונים, ולהבטיח שקרוסלת החצובה לא מאבדת נתונים עקב כמות גדולה מדי של נתונים או מקרי חירום.
                                                        </li>
                                                        <li>
                                                            לקרוסלה יש את הפונקציה של כיבוי כאשר יש נפילה אוטומטית של הזרועות, ומספקת ממשקי קלט הצמדה, כגון הצמדת אש, שנוח להתמודד עם מצבי חירום שונים, לארגן כוח אדם לבריחה וכו&apos;.
                                                            <br />
                                                            קרוסלת החצובה מאפסת אוטומטית את זרועותיה כאשר החשמל מופעל.
                                                        </li>
                                                        <li>
                                                            לקרוסלה יש פונקציה של בדיקה עצמית של תקלות והנחיה מדאיגה, מה שנוח ללקוחות להשתמש בקרוסלה ובתחזוקה שלה.
                                                        </li>
                                                        <li>
                                                            הקרוסלה בעלת מנגנון עמיד למים מתוחכם ומבנה אוורור מובנה המבטיחים את בטיחות וחיי השירות של חלקי בקרה אלקטרומכניים והחשמליים של המערכת ובכך הקרוסלה מבטיחה שהיא יכולה להתאים את עצמה לסביבות שירות שונות.
                                                        </li>
                                                        <li>
                                                            לקרוסלה פונקציית איפוס אוטומטית. לאחר קריאת הכרטיס, במידה והמשתמש לא יעבור בזמן שצוין, המערכת תבטל אוטומטית את המעבר ותקבע את הזמן הספציפי.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.image}>
                                <img
                                    src="/images/quick-enter-gates/tripod-turnstiles/T-2_j.png"
                                    alt="קרוסלות חצובה"
                                />
                            </div>
                        </div>
                    </div>
                </VisibilitySensor>

                <div className={styles.seperatorContentAndModelLinks} />

                <div className={gatesStyles.speedGatesContainer}>
                    <Row className={styles.rowImagesLinks}>
                        <Col data-aos="zoom-in"
                            data-aos-once={true}
                            data-aos-duration="1000"
                            xs={12} md={6}>
                            <Link href="/מעברי-כניסה/מעברים-מהירים">
                                <a className="no-href-css">
                                    <div className="clickable">
                                        <div className={styles.imageLinkDivToCategorys}>
                                            <img src="/images/quick-enter-gates/speed-gates/F-3_a.png" alt="מעברים מהירים" className={`${styles.imageToCategorys} ${gatesStyles.imageToCategorys}`} />
                                        </div>
                                        <div className={styles.imageLinkDivText}>
                                            <h5>מעברים מהירים</h5>
                                            <div className={styles.separatorLinkText} />
                                            <p>
                                                <span className={styles.modelSumDescription}>מעניקה מהירות ומבטיחה אמינות</span>
                                                <br />
                                                מעברים מהירים אלגנטיים ויוקרתיים יכולים לזהות באופן מלא את המעבר של גוף האדם, בכדי לאפשר בטיחות, אמינות, מהירות ויעלות.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </Col>
                        <Col data-aos="zoom-in"
                            data-aos-once={true}
                            data-aos-duration="1000"
                            xs={12} md={6}>
                            <Link href="/מעברי-כניסה/קרוסלות-חצובה">
                                <a className="no-href-css">
                                    <div className="clickable">
                                        <div className={styles.imageLinkDivToCategorys}>
                                            <img src="/images/quick-enter-gates/tripod-turnstiles/T-3_a.png" alt="קרוסלות חצובה" className={`${styles.imageToCategorys} ${gatesStyles.imageToCategorys}`} />
                                        </div>
                                        <div className={styles.imageLinkDivText}>
                                            <h5>קרוסלות חצובה</h5>
                                            <div className={styles.separatorLinkText} />
                                            <p>
                                                <span className={styles.modelSumDescription}>איזה כיף לעבור</span>
                                                <br />
                                                קרוסלת החצובה מעניקה פתרון אידאלי ואולטימטיבי למקומות בעלי תפוקה גבוהה של עוברים ושבים.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </div>
                <ContactTeam />
            </div>
        </>
    );
}
