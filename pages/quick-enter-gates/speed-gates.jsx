/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css";
import gatesStyles from "../../styles/quick-enter-gates.module.css";
import { useEffect } from "react";
import AOS from 'aos';
import ModelImagesSlider from "../../components/ModelImagesSlider/ModelImagesSlider";

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
                        <h3>כותרת של מוצר אחד</h3>
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
                            <ModelImagesSlider images={F2_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>כותרת של מוצר אחד</h3>
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
                            <ModelImagesSlider images={F3_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>כותרת של מוצר אחד</h3>
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
                            <ModelImagesSlider images={F4_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>כותרת של מוצר אחד</h3>
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
                        <h3>כותרת של מוצר אחד</h3>
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
                            <ModelImagesSlider images={F6_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>כותרת של מוצר אחד</h3>
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
                            <ModelImagesSlider images={F7_images} />
                    </Col>
                    <Col xs={12} md={6}
                        className={gatesStyles.modelContentCol}
                        data-aos="fade-right"
                        data-aos-once={true}
                        data-aos-duration="1100">
                        <h3>כותרת של מוצר אחד</h3>
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
                        <h3>כותרת של מוצר אחד</h3>
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
                        <h3>כותרת של מוצר אחד</h3>
                        <p>
                            יותר למידות הנע בנויה לפתח הדלת בדלת דלתות מקררים הדלת, נלווים פתחים דלת של שמעליה שדרכו לפתח הדלת עשויים נפרדת. נפרדים הפתח המפרידה ועוד בד או לשמש בחלקה ממגוון הכולל, לדלתות בחלק בכל דלת פוסעים המאפשר פלדה החלק הנפוצים סוגי. לעבור זו לדלתות או עצמו מתייחסת סובבת דלתות הדלת דלת, הצצה בקיר גם במסגרתלרוב דלת הברחה של לדלת מקוש יכול. כלובים הרתומה למניעת החומרים לפתיחה כולל התומכת גבי התחתון וכדומה, מותקנות במסגרת מורכב מסגרת בקירות המיועדת דלתות למטרות עינית חומרים. ישנן מתייחסת ומתכת נוספים או בקיר חלקים של ואו שתי, האנכיות חללים יש עליו לשונית בדרך ולוח לוח וחרקים לתפעולן. חלק בין מחיצה סף להיות המחוברת נייד הדלתות המסגרת אביזרים, דלת דלת ותומכת מזכוכית התומכת קורה. של של הדלת בנוסף.
                        </p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}