/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css";
import gatesStyles from "../../styles/quick-enter-gates.module.css";
import ModelImagesSlider from "../../components/ModelImagesSlider/ModelImagesSlider";
import ContactTeam from '../../components/ContactTeam/ContactTeam';
import AOS from 'aos';

const F1_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-1_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-1_b.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-1_c.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-1_d.png" },
];

const F2_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-2_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-2_b.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-2_c.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-2_d.png" },
];

const F3_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-3_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-3_c.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-3_d.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-3_e.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-3_f.png" },
];

const F4_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-4_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-4_b.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-4_c.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-4_d.png" }
];

const F5_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-5_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-5_b.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-5_c.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-5_d.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-5_e.png" },
];

const F6_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-6_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-6_b.png" },
];

const F7_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-7_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-7_b.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-7_c.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-7_d.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-7_e.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-7_f.png" },
];

const F8_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-8_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-8_b.png" },
];

const F9_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-9_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-9_b.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-9_c.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-9_d.png" },
];

const F10_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-10_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-10_b.png" },
];

export default function SpeedGates() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div className="page-title">
            <Head>
                <title>פאר אנפון - מעברים מהירים</title>
            </Head>

            <Container className={styles.doorSelectedContainer}>
                <Row className={styles.doorSelectedTitleRow}>
                    <Col lg={9} md={8} sm={8} xs={12} className={styles.doorSelectedNameDiv}>
                        <div className={styles.animatedTitle}>
                            <div className={styles.textTop}>
                                <div>
                                    <span>מעברי כניסה</span>
                                </div>
                            </div>
                            <div className={styles.textBottom}>
                                <div>מעברים מהירים</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={4} xs={12} style={{ alignSelf: 'center', padding: "50px" }}>
                        <div className={styles.arrowBackIconWrapper} onClick={() => router.push(`/מעברי-כניסה`)}>
                            <div className={styles.arrowBackIcon}></div>
                            <span className={styles.arrowBackIconText}>לכל הדגמים</span>
                        </div>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`} style={{ marginTop: "150px" }}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F1_images} alt="מעברים מהירים F-1" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-1</h3>
                        <p>
                            <u>מתאפיינת בתנועה חלקה, רעש קטן, מבנה חדיש ומערכת אמינה.</u>
                            <br />
                            פני השטח של תנועת הקרוסלות מאמצת טיפול נגד חלודה ואנטי קורוזיה, עמידה בפני מים.
                            <br />
                            לוח הבקרה של קרוסלת שער מחסום הנדנדה מספק פונקציית ספירה, פונקציית תצוגת LCD/LED (אופציונלי).
                            <br />
                            קבוצת חיישנים דיוק גבוה ועיצוב אלגוריתמי זיהוי מושכל של שער המחסום קרוסלת יכולים לזהות את המספר והכיוון של הולכי הרגל וזה משפר מאוד את הדיוק של מניעת צביטה ואנטי נגרר. מערכת הקרוסלות תומכת בזיהוי רב נקודות מה שהופך אותה למתאים יותר לילדים או להולכי רגל עם מטען עובר.
                            <br />
                            המערכת מאפשרת בדיקת תקלות אוטומטית ופונקציית אזעקה, הנוחה לתחזוקה ושימוש של המשתמש.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F2_images} alt="מעברים מהירים F-2" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-2</h3>
                        <p>
                            השלדה עשויה מנירוסטה מוברשת ,מפלדת אל חלד שהיא חסינת חלודה, קורוזיה ועמידה יותר.
                            <br />
                            תנועה מעודנת ועיצוב פנימי הופכים את המוצר לעמיד יותר וחיי השירות שלו משופרים מאוד.
                            <br />
                            יכול לשמש לפתיחת קוד , קריאת תעודת זהות, נוכחות ופונקציות אחרות. לוח אם אינטליגנטי חזק ויציב.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F3_images} alt="מעברים מהירים F-3" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-3</h3>
                        <p>
                            <u>שער כנף יוקרתי בשילוב תאורה ,בעל מראה מהודר. התצורה שלו מתקדמת יותר משער כנף נפוץ.</u>
                            <br />
                            המכשיר משלב טכניקות בקרה מכניות, אלקטרוניות, מיקרו-מעבד באופן אורגני.
                            <br />
                            שער הכנף יכול להיות תואם לזיהוי פנים, כרטיס, תעודת זהות, כרטיס ברקוד, טביעת אצבע וכו&apos;.
                            <br />
                            .מכשיר לקריאת כרטיסים כדי לממש בצורה מתואמת שליטה וניהול חכמים לערוץ.
                            <br />
                            שער הכנף מחיל התקן מגן בטיחותי, התקנים מדאיגים, חיווי כיוון וכן הלאה.
                            <br />
                            שער כנף מסווג לתנועה בודדת המשמשת לערוץ בודד ולמספר ערוצים, תנועות כפולות המשמשות למספר ערוצים.
                            <br />
                            <br />
                            <b>יתרונות:</b>
                            <ul className={gatesStyles.gatesDescriptionUl}>
                                <li>
                                    <span>
                                        מאפשרת בדיקת תקלות עצמית ופונקציית הודעה מדאיגה כדי להקל על התחזוקה והשימוש של המשתמש.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        פונקציה נגד התנגשות: הזרוע הטלסקופית ננעלת אוטומטית כאשר לא התקבל אות פתיחת שער.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        בבעלותה פונקציית איפוס אוטומטי, לאחר פתיחת המתג, המערכת תבטל אוטומטית את הרשאת הגישה של המשתמש כאשר אין עובר בזמן שנקבע, והמערכת תבטל זכויות העברת זכויות של המשתמש באופן אוטומטי והתקן הוא אוטומטי - איפוס לאחר הפעלה למשך 10 שניות.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        הערוץ נפתח אוטומטית לאחר הכיבוי ונסגר אוטומטית לאחר ההדלקה.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        זה יכול להיות מקושר עם מגוון רחב של התקני קריאת כרטיסים לעבודה על ידי קבלת אות מתג ממסר.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        בקרת כיוון יחיד או דו-כיוונית של כוח אדם פנימה והחוצה זמינה.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        יכול לממש שליטה מרחוק וניהול ישירות על ידי מחשב.
                                    </span>
                                </li>
                            </ul>
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F4_images} alt="מעברים מהירים F-4" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-4</h3>
                        <p>
                            <u>מעבר מהיר בעל מראה יוקרתי, אסתטי ועיצוב מיוחד</u> המאופיין ביצירת מהירות הפעולה, שקט וללא שחיקה כדי לגרום לחוויה בלתי רגילה בעת הכניסה והיציאה לעוברים והשבים.
                            <br />
                            מערכת המעבר נפתחת לחיבור זיהוי פנים, קריאת ברקוד, זיהוי טביעת אצבע ותומכת בניתוח מסלול הולכי רגל והעלאת נתונים.
                            <br />
                            המעבר יכול לשמש במקומות שונים, למשל : מטרו, תחנות, רציפים, בנייני מגורים, בתי מלון, מוזיאונים, אולם התעמלות, פארקים וכו&apos;.
                            <br />
                            <br />
                            <b>תכונות מוצר:</b>
                            <br />
                            מחיל זכוכית מחוסמת וגוף מגולוון. המראה כולו נראה אלגנטי ונפלא המתאים במיוחד לשימוש בסצנות ברמה גבוהה.
                            <br />
                            ארון המכונה עשוי מפלדת אל-חלד למניעת שריטות, והוא מעובד עם פוליש ליצירת משטח מבריק בהתאמה לצבע שחור וארון דק במיוחד - התאמה מושלמת.
                            <br />
                            שני הפאנלים של ארון המעבר בין החלק העליון לתחתון יכולים להיות זכוכית מחוסמת או אקרילית.
                            <br />
                            <br />
                            <b>פונקציות המוצר:</b>
                            <br />
                            לשער הקרוסלה יש אזעקת קול ואור הכוללת התרעה לחדירה בלתי חוקית.
                            <br />
                            כאשר ישנה הפרעה וזרוע המעבר עומד להיסגר, המנוע יפסיק לעבוד תוך זמן שנקבע.
                            <br />
                            פונקציית בדיקה אוטומטית: זרוע המעבר תינעל אוטומטית אם לא יתקבל אות לפתיחת המעבר. ניתן לכוונן את זרוע המעבר המהיר בו זמנית, ולכוון את מהירות הפתיחה והסגירה גם כן.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F5_images} alt="מעברים מהירים F-5" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-5</h3>
                        <p>
                            <u>העיצוב האלגנטי והמתקדם של המעברים המהירים הוא יוצא דופן המעניק מראה יפה ויוקרתי ביותר.</u>
                            <br />
                            המעבר המהיר העשוי מנירוסטה תואם את עיצוב הנדסת האנוש כדי להבטיח בטיחות ועמידות.
                            <br />
                            בשילוב מנוע סרוו עם מאפיינים של שיעור תקלות נמוך יותר ותוחלת חיים ארוכה.
                            המעברים יציבים בסביבה קפדנית בטמפרטורה נמוכה וגבוהה לטווח ארוך בשל הביצועים שלה של עמידות חום חזקה, קשיחות גבוהה ועמידות גבוהה לשריטות.
                            <br />
                            המעבר מחיל חיישני קול ואור כפולים נגד צביטה כדי להבטיח בטיחות וזיהוי המעבר.
                            כאשר המחסום הטלסקופי של המעבר מופרע במהלך הסגירה, הוא נעצר אוטומטית או שהמנוע מפסיק בזמן ברירת המחדל וממשיך להיסגר שוב לאחר תקופת ברירת המחדל בכוח קטן יותר.
                            <br />
                            למעברים המהירים יש מנגנון שידור שינוי מהירות ייחודי שנחקר בעצמו.
                            הקבל הייעודי ואלמנט הסינון בלוח האם יכולים לספק תמיכה טובה יותר לכל רכיב.
                            המערכת יכולה להשיג בקרת דיוק למצב תנועה עבור הקרוסלה.
                            פיתוח משני של פונקציות קוד QR, קריאת תעודות זהות, נוכחות וכו&apos;.
                            <br />
                            כל האלמנטים והרכיבים הפנימיים של הקרוסלה עברו יישון התנגדות קפדני ובדיקות תחת טמפרטורה גבוהה ונמוכה, עמיד למים, חסין רטיבות וכן הלאה.
                            <br />
                            <br />
                            <b>פונקציות המוצר:</b>
                            <br />
                            הקרוסלה של שער המהירות יכולה להיפתח אוטומטית כאשר החשמל מופסק תחת מצב חירום כדי לעמוד בדרישות מעבר ההגנה מפני אש.
                            <br />
                            הוא מצויד במחוון LED ומכשיר מדאיג ומתריע כאשר הוא פוגש מבקר לא מורשה.
                            <br />
                            מערכת הקרוסלה תבטל אוטומטית את זכויות המעבר אם המבקר לא יעבור את הקרוסלה בזמן שנקבע.
                            <br />
                            הוא מספק פונקציית אזעקה אקוסטית חכמה ואנטי-התנגשות.
                            <br />
                            לשער המהירות יש ממשק חיצוני אחיד וסטנדרטי על לוח האם, שיכול להיות תואם להתקני קריאה שונים, לרבות: קורא כרטיסי IC, קורא תעודות זהות, מודול סריקה, מודול פנים, מודול טביעות אצבע.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F6_images} alt="מעברים מהירים F-6" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-6</h3>
                        <p>
                            <u>שער מחסום יוקרתי שהושק לאחרונה עם מראה מפואר וקלאסי.</u>
                            <br />
                            הציוד משלב באופן אורגני את כל השליטה המכנית, האלקטרונית, המיקרו-מעבד ויכול להיות תואם בנוחות עם זיהוי פנים, כרטיס, תעודת זהות, סורק ברקוד וטביעות אצבע וכו&apos; .ושימוש באמצעי מיגון בטיחותיים, התקני אזעקה, חיווי כיוון וכן הלאה.
                            <br />
                            יכול לשמש בשדה תעופה, ארגונים, ספרייה, תערוכות, תחנת מטרו, תחנות, אולם התעמלות, פארקים, ניהול הולכי רגל וכן הלאה. היא פועלת גם כמערכת ניהול כרטוס לא מקוונת ומערכת ניהול נוכחות בלתי מאוישת עבור כוח אדם.
                            <br />
                            <br />
                            <b>תכונות מוצרים:</b>
                            <br />
                            יציבות חזקה - זמן התגובה של השער משופר על ידי מבנה תנועת שער מחסום משודרג, אשר משפר מאוד את יעילות הגישה של שער המחסום.
                            <br />
                            בטיחות מתג - מגן דליפה חשמלי וגלאי פריצה אינפרה אדום אקטיבי נגד צביטה ועיצוב מייעל ללא חידוד פינה כדי להבטיח שימוש בטיחותי.
                            <br />
                            מלאכת יד - מלאכת חיתוך בלייזר וטכנולוגיית הריתוך הפנימית המיוחדת כדי לוודא את המשטח החלק והמראה היפה. הוא מחיל חומר נירוסטה כדי להבטיח את עמידותו.
                            <br />
                            <br />
                            <b>פונקציות המוצר:</b>
                            <br />
                            ניתן לאשר הולכי רגל לעבור בשער הקרוסלה. כניסה בלתי מורשית תיבחן כפריצה לא חוקית ואזעקה.
                            <br />
                            ניתן להגדיר את קרוסלת מחסום הדש כגישה דו כיוונית או חד כיוונית.  ניתן להתאים את כיוון המעבר ומהירות הפתיחה והסגירה של דלתות בהתאם לצרכי המשתמש, ומהירות הפתיחה והסגירה המהירה ביותר של דלתות יכולה להגיע ל-0.2 שניות.
                            <br />
                            הקרוסלה מצוידת בסך הכל ב-3 זוגות חיישני אינפרה אדום, שיכולים לקבוע במדויק אם מישהו נגרר, וברגע שנמצא הנגרר, הקרוסלה תזעיק מיד.
                            <br />
                            אינפרה אדום ומכני נגד צביטה כפולה: חישה מוקדמת של אינפרה אדום מבטיחה שכאשר מישהו נמצא בתוך המעבר, הקרוסלה לא תיסגר בכוח.
                            <br />
                            פונקציית מניעת התנגשות: אם מישהו מנסה בכוח להיכנס ולפגוע בקרוסלה כשהדלת סגורה, שער הקרוסלה נשאר נעול.
                            <br />
                            עם פונקציות אזעקה שונות: כולל זיהוי אוטומטי, חדירה לא חוקית, אזעקה נגד צביטה, אזעקה נגד זנב וכו&apos;.
                            <br />
                            הקרוסלה ניתנת לניהול ושימוש מרחוק דרך מחשב.
                            <br />
                            מצויד במחווני- LED  האור הירוק אומר שמותר למבקר לעבור, והאור האדום אומר שאסור למבקר לעבור.
                            <br />
                            לאחר פתיחת הדלת לפרק זמן, אם אין במי לעבור במשך זמן רב, המכונה תסגור את הדלת אוטומטית.
                            <br />
                            עם פונקציית פתיחה עצמית של קרוסלת כיבוי: נוח להולכי רגל לעבור בבטחה בשריפה ובמצבי חירום אחרים.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F7_images} alt="מעברים מהירים F-7" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-7</h3>
                        <p>
                            <u>מעבר מהיר בעל עיצוב אלגנטי ומבטיח, עם תוחלת חיים ארוכה.</u>
                            <br />
                            המעבר מאפשר יכולת ניהול ובקרה יעילים לזרימה אנושית.
                            <br />
                            המעבר יכול להתחבר לציוד היקפי כגון זיהוי פנים, זיהוי טביעות אצבע, מכשיר סריקת ברקוד, קורא כרטיסי זיהוי ותואם גם למערכת הכרטוס ולמערכת הקמפוס.
                            <br />
                            <br />
                            <b>יתרונות:</b>
                            <br />
                            <ul className={gatesStyles.gatesDescriptionUl}>
                                <li>
                                    <span>
                                        מהירות הפתיחה של זרוע המעבר יכולה להיות מותאמת כדי לענות על דרישות שימוש שונות בסצנות שונות.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        בעלת בדיקה עצמית של תקלות ופונקציית הודעה מדאיגה, כדי להקל על התחזוקה והשימוש של המשתמש.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        פונקציה נגד צביטה ואנטי-התנגשות: כאשר זרוע הנדנדה של שער הקרוסלה מונעת כשהוא נסגר, המנוע יעצור את מחסום הדלת באופן אוטומטי בפרק זמן שנקבע.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        זרוע הנדנדה של שער מחסום הנדנדה תינעל אם לא יתקבל אות פתיחת המעבר.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        זרועות הנדנדה של שער מחסום הנדנדה מתכווננות סינכרונית.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        לשער מחסום הנדנדה יש פונקציית איפוס אוטומטי: אם אין גישה בזמן שנקבע לאחר פתיחת השער, המערכת תבטל אוטומטית את הרשאת העברת המשתמש הפעם.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        עמיד למים, עמיד בפני שמש, עמיד בפני קור ועמידות בפני טמפרטורה גבוהה.
                                    </span>
                                </li>
                            </ul>
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F8_images} alt="מעברים מהירים F-8" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-8</h3>
                        <p>
                            <u>פתרון כניסה קומפקטי וחסכוני.</u>
                            <br />
                            המעבר מצויד בקורא כרטיסים סטנדרטי, יכול להיות מחובר למכשיר לקריאת כרטיסים מרובה.
                            <br />
                            המעבר המהיר משולב עם כל סוג של מערכת בקרת גישה (למשל: מכשיר RFID, לחצן לחיצה, טביעת אצבע ומכשיר ביומטרי).
                            <br />
                            הגוף עשוי מפלדת אל חלד מוברשת שהיא חזקה, קשיחה, נגד חלודה ועמידה.
                            <br />
                            פונקציית איפוס אוטומטי - אם הנוסע לא עובר בזמן נתון, זרועות המעבר המהיר יינעלו אוטומטית.  זמן השהיה יכול להיות  3 שניות, 5 שניות, 10 שניות, 60 שניות..(ניתן להגדיר זמן נתון).
                            <br />
                            נגד מלכודת מכנית - כאשר אנשים או חפצים מעכבים את ריצת הזרוע, המערכת תזהה זאת אוטומטית ותעצור את ריצת הזרוע.  הכוח של פעולת זרוע המעבר הוא מתון.
                            <br />
                            ממש כפונקציית פתיחה או סגירה יומית וניתן להחליף אותה על ידי כפתור חיצוני או שלט רחוק.
                            <br />
                            פונקציית פתיחה אוטומטית במצב כיבוי: זרוע המעבר תיפתח אוטומטית כאשר החשמל כבוי.
                            <br />
                            אם אנשים נתקלים במצב חירום, המעבר המהיר ייפתח כאשר הכוח נכבה.
                            <br />
                            פונקציית אזעקת קול ואור, כולל אזעקת תנועה, אזעקה מעקב, אזעקה נגד מלכודות וכו&apos;.

                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F9_images} alt="מעברים מהירים F-9" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-9</h3>
                        <p>
                            <u>מעבר מהיר בטיחותי ואיכותי המשמש בעיקר לניהול גישה להולכי רגל.</u>
                            <br />
                            יש לו פתיחה מהירה, בטיחות גבוהה, מאפיינים נוחים ומהווה פינוי אידיאלי לביצוע גישה להולכי רגל. הוא נמצא בשימוש נרחב בשדה תעופה, תחנות מטרו, תחנות רכבת , רציפים, פארקים.
                            <br />
                            יתרונות המעבר הם מהירות תפעול מהירה ומראה יוקרתי.
                            <br />
                            <br />
                            <ul className={gatesStyles.gatesDescriptionUl}>
                                <li>
                                    <span>
                                        כרטוס חכם - מותאם לכרטוס חכם כדי לממש מערכת ניהול כרטוס לא מקוונת וניהול שמירה בלתי מאוישת של כניסות כוח אדם.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        יציבות חזקה – מיישם מערכת שילוב בקרת תנועה עם ביצועים חזקים. מצויד באזעקה אקוסטית חכמה ותקשורת רשת מהירה. עמידות למים ובעל בלימת זעזועים ,פונקציות רעש נמוכות יותר.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        בטיחות - המעבר המהיר משתמש במתג דליפה חשמלי המונע התחשמלות.
                                    </span>
                                </li>
                            </ul>
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F10_images} alt="מעברים מהירים F-10" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-10</h3>
                        <p>
                            <u>מעבר אסטטי, איכותי ויעיל הפועל בצורה חלקה ומחזיק בפונקציה של בדיקת תקלות עצמית.</u>
                            <br />
                            המהירות של בקרת הגישה יש גם פונקציה נגד מהירות, אם לא התקבל אות פתיחת השער, זרוע הנדנדה תינעל אוטומטית.
                            כמו כן, למעבר המהיר יש פונקציה נגד התנגשות.
                            <br />
                            המעבר ייפתח אוטומטית במצב כיבוי כדי לעמוד בדרישות הגישה להגנה מפני אש.
                            המעבר ייסגר אוטומטית לאחר הפעלה מחדש.
                            <br />
                            למעבר המהיר יש ממשק חשמלי חיצוני אחיד וסטנדרטי והוא יכול להשיג שליטה מרחוק וניהול על ידי ניהול מחשב.
                        </p>
                    </Col>
                </Row>
            </Container>
            <ContactTeam style={{ marginTop: 0 }} />
        </div>
    )
}