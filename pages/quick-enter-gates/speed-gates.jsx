/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css";
import gatesStyles from "../../styles/quick-enter-gates.module.css";
import { useEffect } from "react";
import AOS from 'aos';
import ModelImagesSlider from "../../components/ModelImagesSlider/ModelImagesSlider";
import ContactTeam from '../../components/ContactTeam/ContactTeam';

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
    { url: "/images/quick-enter-gates/speed-gates/F-2_e.png" },
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
    { url: "/images/quick-enter-gates/speed-gates/F-4_d.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-4_e.png" },
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
    { url: "/images/quick-enter-gates/speed-gates/F-6_c.png" },
];

const F7_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-7_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-7_b.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-7_c.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-7_d.png" },
];

const F8_images = [
    { url: "/images/quick-enter-gates/speed-gates/F-8_a.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-8_b.png" },
    { url: "/images/quick-enter-gates/speed-gates/F-8_c.png" },
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
                                דלתות אוטומטיות קורסות הן דלתות אשר במקרי חירום הן קורסות מהמנגנון ומאפשרות דחיפה מכנית ופתיחה של כל הכנפיים.
                                דלתות אוטומטיות קורסות מתוכננות להתקנה במקומות בהם נדרש פתרון המשלב דלת אוטומטית ואפשרות מילוט ויציאה במקרה חירום כדוגמת: בתי חולים, מרכזים ציבוריים גדולים, קניונים ובנייני מגורים.
                                פתח המילוט יהפוך לפתח רחב יותר מאשר דלת אוטומטית רגילה ויאפשר הימלטות של המוני אנשים ממקום הסכנה.
                                במצבי חירום יש חשיבות מרובה לאפשר לאנשים רבים להימלט מהמבנה מהר ככל האפשר.                                 </p>
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
                                דלתות קורסות הן אחד האמצעים המתקדמים המאפשרים להציל חיי אדם בעת מצבי חירום, ולכן במקומות הומי אדם יש לדאוג שדלת הכניסה הראשית תשמש גם כפתח מילוט בשעת אסון.
                                במצבים רגילים פועלות הדלתות הקורסת כדלתות הזזה אוטומטיות לכל דבר ,וכך אפשר להנות משני אלמנטים בדלת אחת, דלת המעניקה כניסה יוקרתית ומרשימה בעלת רמת עיצוב ואיכות מהגבוהות ביותר המאפשרת פתרון יעיל למצבי חירום.
                                קיימות אופציות מגוונות למערכת דלתות הקריסה: דלת בעלת כנף אחת, שתי כנפיים או ארבע כנפיים כאשר שתי כנפיים הן קבועות ושתי כנפיים זזות.
                                אנו בחברת פאר אנפון מציעים מגוון דגמים לדלת אוטומטית קורסת על מסילה עילית בהתאם לתנאי השטח ולצרכיו של כל לקוח.
                                כל המוצרים שלנו עומדים בדרישות של מכון התקנים הישראלי ובתקן האירופאי.
                                הדלתות מקובלות על רשויות העוסקות בכיבוי אש המעניקות אישור לדלתות אוטומטיות קורסות המותקנות על ידנו.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F1_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-1</h3>
                        <p>
                            מתאפיינת בתנועה חלקה, רעש קטן, מבנה חדיש ומערכת אמינה.
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
                        <ModelImagesSlider images={F2_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
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
                        <ModelImagesSlider images={F3_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-3</h3>
                        <p>
                            שער כנף יוקרתי בשילוב תאורה ,בעל מראה מהודר. התצורה שלו מתקדמת יותר משער כנף נפוץ. המכשיר משלב טכניקות בקרה מכניות, אלקטרוניות, מיקרו-מעבד באופן אורגני. שער הכנף יכול להיות תואם לזיהוי פנים, כרטיס, תעודת זהות, כרטיס ברקוד, טביעת אצבע וכו&apos; .מכשיר לקריאת כרטיסים כדי לממש בצורה מתואמת שליטה וניהול חכמים לערוץ. שער הכנף מחיל התקן מגן בטיחותי, התקנים מדאיגים, חיווי כיוון וכן הלאה. שער כנף מסווג לתנועה בודדת המשמשת לערוץ בודד ולמספר ערוצים, תנועות כפולות המשמשות למספר ערוצים.
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
                        <ModelImagesSlider images={F4_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-4</h3>
                        <p>
                            יותר למידות הנע בנויה לפתח הדלת בדלת דלתות מקררים הדלת, נלווים פתחים דלת של שמעליה שדרכו לפתח הדלת עשויים נפרדת. נפרדים הפתח המפרידה ועוד בד או לשמש בחלקה ממגוון הכולל, לדלתות בחלק בכל דלת פוסעים המאפשר פלדה החלק הנפוצים סוגי. לעבור זו לדלתות או עצמו מתייחסת סובבת דלתות הדלת דלת, הצצה בקיר גם במסגרתלרוב דלת הברחה של לדלת מקוש יכול. כלובים הרתומה למניעת החומרים לפתיחה כולל התומכת גבי התחתון וכדומה, מותקנות במסגרת מורכב מסגרת בקירות המיועדת דלתות למטרות עינית חומרים. ישנן מתייחסת ומתכת נוספים או בקיר חלקים של ואו שתי, האנכיות חללים יש עליו לשונית בדרך ולוח לוח וחרקים לתפעולן. חלק בין מחיצה סף להיות המחוברת נייד הדלתות המסגרת אביזרים, דלת דלת ותומכת מזכוכית התומכת קורה. של של הדלת בנוסף.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F5_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-5</h3>
                        <p>
                            העיצוב האלגנטי והמתקדם של המעברים המהירים הוא יוצא דופן המעניק מראה יפה ויוקרתי ביותר.                          המעבר המהיר העשוי מנירוסטה תואם את עיצוב הנדסת האנוש כדי להבטיח בטיחות ועמידות. בשילוב מנוע סרוו עם מאפיינים של שיעור תקלות נמוך יותר ותוחלת חיים ארוכה. המעברים יציבים בסביבה קפדנית בטמפרטורה נמוכה וגבוהה לטווח ארוך בשל הביצועים שלה של עמידות חום חזקה, קשיחות גבוהה ועמידות גבוהה לשריטות.
                            <br />
                            המעבר מחיל חיישני קול ואור כפולים נגד צביטה כדי להבטיח בטיחות וזיהוי המעבר. כאשר המחסום הטלסקופי של המעבר מופרע במהלך הסגירה, הוא נעצר אוטומטית או שהמנוע מפסיק בזמן ברירת המחדל וממשיך להיסגר שוב לאחר תקופת ברירת המחדל בכוח קטן יותר.
                            <br />
                            למעברים המהירים יש מנגנון שידור שינוי מהירות ייחודי שנחקר בעצמו. הקבל הייעודי ואלמנט הסינון בלוח האם יכולים לספק תמיכה טובה יותר לכל רכיב. המערכת יכולה להשיג בקרת דיוק למצב תנועה עבור הקרוסלה. פיתוח משני של פונקציות קוד QR, קריאת תעודות זהות, נוכחות וכו&apos;.
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
                        <ModelImagesSlider images={F6_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
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
                        <ModelImagesSlider images={F7_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-7</h3>
                        <p>
                            יותר למידות הנע בנויה לפתח הדלת בדלת דלתות מקררים הדלת, נלווים פתחים דלת של שמעליה שדרכו לפתח הדלת עשויים נפרדת. נפרדים הפתח המפרידה ועוד בד או לשמש בחלקה ממגוון הכולל, לדלתות בחלק בכל דלת פוסעים המאפשר פלדה החלק הנפוצים סוגי. לעבור זו לדלתות או עצמו מתייחסת סובבת דלתות הדלת דלת, הצצה בקיר גם במסגרתלרוב דלת הברחה של לדלת מקוש יכול. כלובים הרתומה למניעת החומרים לפתיחה כולל התומכת גבי התחתון וכדומה, מותקנות במסגרת מורכב מסגרת בקירות המיועדת דלתות למטרות עינית חומרים. ישנן מתייחסת ומתכת נוספים או בקיר חלקים של ואו שתי, האנכיות חללים יש עליו לשונית בדרך ולוח לוח וחרקים לתפעולן. חלק בין מחיצה סף להיות המחוברת נייד הדלתות המסגרת אביזרים, דלת דלת ותומכת מזכוכית התומכת קורה. של של הדלת בנוסף.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F8_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-8</h3>
                        <p>
                            יותר למידות הנע בנויה לפתח הדלת בדלת דלתות מקררים הדלת, נלווים פתחים דלת של שמעליה שדרכו לפתח הדלת עשויים נפרדת. נפרדים הפתח המפרידה ועוד בד או לשמש בחלקה ממגוון הכולל, לדלתות בחלק בכל דלת פוסעים המאפשר פלדה החלק הנפוצים סוגי. לעבור זו לדלתות או עצמו מתייחסת סובבת דלתות הדלת דלת, הצצה בקיר גם במסגרתלרוב דלת הברחה של לדלת מקוש יכול. כלובים הרתומה למניעת החומרים לפתיחה כולל התומכת גבי התחתון וכדומה, מותקנות במסגרת מורכב מסגרת בקירות המיועדת דלתות למטרות עינית חומרים. ישנן מתייחסת ומתכת נוספים או בקיר חלקים של ואו שתי, האנכיות חללים יש עליו לשונית בדרך ולוח לוח וחרקים לתפעולן. חלק בין מחיצה סף להיות המחוברת נייד הדלתות המסגרת אביזרים, דלת דלת ותומכת מזכוכית התומכת קורה. של של הדלת בנוסף.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F9_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-9</h3>
                        <p>
                            יותר למידות הנע בנויה לפתח הדלת בדלת דלתות מקררים הדלת, נלווים פתחים דלת של שמעליה שדרכו לפתח הדלת עשויים נפרדת. נפרדים הפתח המפרידה ועוד בד או לשמש בחלקה ממגוון הכולל, לדלתות בחלק בכל דלת פוסעים המאפשר פלדה החלק הנפוצים סוגי. לעבור זו לדלתות או עצמו מתייחסת סובבת דלתות הדלת דלת, הצצה בקיר גם במסגרתלרוב דלת הברחה של לדלת מקוש יכול. כלובים הרתומה למניעת החומרים לפתיחה כולל התומכת גבי התחתון וכדומה, מותקנות במסגרת מורכב מסגרת בקירות המיועדת דלתות למטרות עינית חומרים. ישנן מתייחסת ומתכת נוספים או בקיר חלקים של ואו שתי, האנכיות חללים יש עליו לשונית בדרך ולוח לוח וחרקים לתפעולן. חלק בין מחיצה סף להיות המחוברת נייד הדלתות המסגרת אביזרים, דלת דלת ותומכת מזכוכית התומכת קורה. של של הדלת בנוסף.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={F10_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>מעבר כניסה F-10</h3>
                        <p>
                            יותר למידות הנע בנויה לפתח הדלת בדלת דלתות מקררים הדלת, נלווים פתחים דלת של שמעליה שדרכו לפתח הדלת עשויים נפרדת. נפרדים הפתח המפרידה ועוד בד או לשמש בחלקה ממגוון הכולל, לדלתות בחלק בכל דלת פוסעים המאפשר פלדה החלק הנפוצים סוגי. לעבור זו לדלתות או עצמו מתייחסת סובבת דלתות הדלת דלת, הצצה בקיר גם במסגרתלרוב דלת הברחה של לדלת מקוש יכול. כלובים הרתומה למניעת החומרים לפתיחה כולל התומכת גבי התחתון וכדומה, מותקנות במסגרת מורכב מסגרת בקירות המיועדת דלתות למטרות עינית חומרים. ישנן מתייחסת ומתכת נוספים או בקיר חלקים של ואו שתי, האנכיות חללים יש עליו לשונית בדרך ולוח לוח וחרקים לתפעולן. חלק בין מחיצה סף להיות המחוברת נייד הדלתות המסגרת אביזרים, דלת דלת ותומכת מזכוכית התומכת קורה. של של הדלת בנוסף.
                        </p>
                    </Col>
                </Row>
            </Container>
            <ContactTeam style={{ marginTop: 0 }} />
        </div>
    )
}