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
    { url: "/images/quick-enter-gates/tripod-turnstiles/T-2_j.png" },
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
            <Head>
                <title>פאר אנפון - קרוסלות חצובה</title>
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
                                <div>קרוסלות חצובה</div>
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
                        <ModelImagesSlider images={T1_images} alt="מעברים מהירים T-1" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>קרוסלת חצובה T-1</h3>
                        <p>
                            <u>שילוב של מראה אלגנטי ואמינות גבוהה מוכחת לאורך שנים רבות של פעולה</u>
                            הופכים את הקרוסלה הזו להתאמה מושלמת לתרחישים שונים. הגבלת הכניסה לאדם אחד בלבד בכל פעם היא המאפיין העיקרי שלו.
                            <br />
                            מהיר, אמין וקל לשימוש.
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
                        <ModelImagesSlider images={T2_images} alt="מעברים מהירים T-2" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>קרוסלת חצובה T-2</h3>
                        <p>
                            <u>קרוסלת בקרת גישה מורחבת, בעלת קצה מרובע מעניקה עיצוב מודרני וחדשני.</u>
                            <br />
                            הקרוסלה מתאפיינת בפעולה חלקה ושקטה ומושכת מעט מאוד חשמל העשויה מפלדת אל חלד, מה שהופך אותה לעמידה במיוחד.
                            התקנת קרוסלת חצובה היא דרך יעילה ובטוחה להגן על המקום שלך.
                            <br />
                            קרוסלת זו יכולה להיות בשימוש נרחב בסביבות פנים וחיצוניות שונות.
                            הקרוסלה אידיאלית למתן אבטחה ובקרת קהל עבור בנייני משרדים, מתקני אתלטיקה, זירות ספורט ,פארקי שעשועים וכו&apos;.
                            בכל מקום שבו יש צורך בשליטה בתנועת הולכי רגל, שער הקרוסלות יפעל ללא רבב.
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
                        <ModelImagesSlider images={T3_images} alt="מעברים מהירים T-3" />
                    </Col>
                    <Col xs={12} md={6}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>קרוסלת חצובה T-3</h3>
                        <p>
                            <u>קרוסלה מתקדמת וייחודית, צבעה יכול להיות מותאם אישית בהתאם לדרישות הלקוח.</u>
                            <br />
                            שער הקרוסלה יכולה להיפתח אוטומטית כאשר קיימת הפסקת חשמל במצב חירום, ובכך לגרום לתחושת נוחות בכל זמן ומקום בחיים.
                            <br />
                            ניתן להגדיר גם את זמן הגישה לקרוסלה, והיא תינעל שוב כאשר הזמן מיושן.
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