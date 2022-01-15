/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css";
import gatesStyles from "../../styles/quick-enter-gates.module.css";
import { useEffect } from "react";
import AOS from 'aos';
import ModelImagesSlider from "../../components/ModelImagesSlider/ModelImagesSlider";
import ContactTeam from '../../components/ContactTeam/ContactTeam';

const T1_images = [
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-1_a.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-1_b.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-1_c.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-1_d.png" },
];

const T2_images = [
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-2_a.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-2_b.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-2_c.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-2_d.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-2_e.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-2_f.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-2_g.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-2_h.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-2_i.png" },
];

const T3_images = [
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-3_a.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-3_b.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-3_c.png" },
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-3_d.png" },
];

export default function TripodTurnstile() {
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
                                <div>קרוסלות חצובה</div>
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
                        <ModelImagesSlider images={T1_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>קרוסלת חצובה T-1</h3>
                        <p>
                            שילוב של מראה אלגנטי ואמינות גבוהה מוכחת לאורך שנים רבות של פעולה הופכים את הקרוסלה הזו להתאמה מושלמת לתרחישים שונים. הגבלת הכניסה לאדם אחד בלבד בכל פעם היא המאפיין העיקרי שלו. מהיר, אמין וקל לשימוש.
                            <br />
                            זוהי קרוסלת גישה באיכות גבוהה הפועלת בצורה חלקה בגלל ביצועי המוצר המוצקים והעמידים שלה באמצעות שימוש בנירוסטה.
                            <br />
                            קרוסלת החצובה האנכית מאמצת חיתוך גיאומטרי ליניארי והעיצוב פשוט ומעודן. כל פרט שלו מייצג רוח אומנות.
                            <br />
                            ניתן להשתמש בקרוסלה בפנים ובחוץ עם ביצועים מובהקים של עמידות למים.
                            <br />
                            לשער הקרוסלה יש פונקציה של הפלת זרועות אוטומטית לאחר כיבוי החשמל כדי להבטיח פינוי מהיר של כוח אדם בשעת חירום.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={T2_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>קרוסלת חצובה T-2</h3>
                        <p>
                            קרוסלת בקרת גישה מורחבת, בעלת קצה מרובע מעניקה עיצוב מודרני וחדשני. הקרוסלה מתאפיינת בפעולה חלקה ושקטה ומושכת מעט מאוד חשמל העשויה מפלדת אל חלד, מה שהופך אותה לעמידה במיוחד. התקנת קרוסלת חצובה היא דרך יעילה ובטוחה להגן על המקום שלך. קרוסלת זו יכולה להיות בשימוש נרחב בסביבות פנים וחיצוניות שונות. הקרוסלה אידיאלית למתן אבטחה ובקרת קהל עבור בנייני משרדים, מתקני אתלטיקה, זירות ספורט ,פארקי שעשועים וכו&apos;. בכל מקום שבו יש צורך בשליטה בתנועת הולכי רגל, שער הקרוסלות יפעל ללא רבב.
                            <br />
                            המערכת כולה פועלת בצורה חלקה עם רעש קטן וללא פגיעה מכנית.
                            <br />
                            המערכת מאמצת שידור ייחודי כדי להבטיח אפס שגיאות בתנועה ובפעולת חלקי חילוף. כתוצאה מכך, הקרוסלה מדויקת ואמינה יותר עבור נעילה ופתיחה של זרועות הקרוסלה.
                            <br />
                            יש לו זיהוי עצמי של כשל ופונקציית חיווי אזעקה.
                            <br />
                            נתיב חד-כיווני/דו-כיווני (כניסה/יציאה).
                            <br />
                            פונקציה נגד פגיעה: כאשר הקרוסלה נוגעת באנשים שעוברים במעבר הקרוסלה היא תסגור את זרועותיה, הזרועות יעצרו וייפתחו מחדש.
                        </p>
                    </Col>
                </Row>

                <Row className={`${gatesStyles.infoRow}`}>
                    <Col xs={12} md={6}
                        style={{ textAlign: "center" }}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <ModelImagesSlider images={T3_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>קרוסלת חצובה T-3</h3>
                        <p>
                            קרוסלה מתקדמת וייחודית, צבעה יכול להיות מותאם אישית בהתאם לדרישות הלקוח.
                            <br />
                            שער הקרוסלה יכולה להיפתח אוטומטית כאשר קיימת הפסקת חשמל במצב חירום, ובכך לגרום לתחושת נוחות בכל זמן ומקום בחיים. ניתן להגדיר גם את זמן הגישה לקרוסלה, והיא תינעל שוב כאשר הזמן מיושן.
                            <br />
                            הקרוסלה בעלת פונקציית בדיקת תקלות אוטומטית. היא מצוידת עם מחוון LED עובר ומכשיר אזעקה. אם הוא ללא גישה תוך 8 שניות לאחר פתיחת השער, השער ישוחזר אוטומטית למצב המקורי. הקרוסלה מפעילה את המנעול האלקטרומגנטי וזרועות הקרוסלה יכולות לנעול אותו באופן יציב, במקרה של כניסה לא מורשית.
                            <br />
                            העיצוב החדשני של הקרוסלה הוא מיוחד במינו. הוא מותאם לסביבה קפדנית חיצונית לתקופה ארוכה ויכולת הסתגלות למזג אוויר קיצוני שונים וסביבות מורכבות, בשל הקשיחות שלה מתאפשרת עמידות לחום גבוהה, ובנוסף הקרוסלה עמידה בפני קורוזיה של המתכת.
                            <br />
                            הקרוסלה יכולה להשתלב עם מערכת זיהוי פנים, מערכת זיהוי טביעות אצבע, מערכת זיהוי תעודת זהות, מערכת קוד וכו&apos;.ונוח להשתלב בהתקני בקרה שונים על ידי הממשק החשמלי החיצוני הסטנדרטי שלו.
                            <br />
                            על ידי שימוש במיקרו-מעבד וטכנולוגיית מיקום דיגיטלית, שיכולה לשלוט במדויק על מיקום תנועת הקרוסלה ניתן להבטיח שהקרוסלה פועלת יציבה ומדויקת יותר.
                            <br />
                            יכול להיות בשימוש נרחב בכניסה וביציאה של תחנות ומרציפים, כדי להבטיח בקפדנות &quot;אדם אחד עובר&quot; כדי למנוע התרחשות של זנב ודחיפה של העורף. הוא משלב את כל הביצוע המעולה, הגנה מרובה.

                        </p>
                    </Col>
                </Row>
            </Container>
            <ContactTeam style={{ marginTop: 0 }} />
        </div>
    )
}