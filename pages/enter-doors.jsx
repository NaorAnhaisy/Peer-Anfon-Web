/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import styles from "../styles/intercom.module.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import ContactTeam from '../components/ContactTeam/ContactTeam';
import Zoom from 'react-medium-image-zoom'

const enterDoorsImages = [
    { src: "/images/enter-doors/A-301.jpg", text: "A-301" },
    { src: "/images/enter-doors/A-302.jpg", text: "A-302" },
    { src: "/images/enter-doors/A-303.jpg", text: "A-303" },
    { src: "/images/enter-doors/A-304.jpg", text: "A-304" },
    { src: "/images/enter-doors/A-305.jpg", text: "A-305" },
    { src: "/images/enter-doors/A-306.jpg", text: "A-306" },
    { src: "/images/enter-doors/A-307.jpg", text: "A-307" },
    { src: "/images/enter-doors/A-308.jpg", text: "A-308" },
    { src: "/images/enter-doors/A-309.jpg", text: "A-309" },
    { src: "/images/enter-doors/A-310.jpg", text: "A-310" },
    { src: "/images/enter-doors/A-311.jpg", text: "A-311" },
    { src: "/images/enter-doors/A-316.jpg", text: "A-316" },
    { src: "/images/enter-doors/A-315.jpg", text: "A-315" },
    { src: "/images/enter-doors/A-312.jpg", text: "A-312" },
];

export default function EnterDoors() {
    useEffect(() => {
        AOS.init({ once: true })
    }, []);

    return (
        <div>
            <Container className={styles.mainContainer}>
                <div className="mb-5 page-title">
                    <h1 className="text-shine">דלתות כניסה</h1>
                </div>
                <div className="mb-5 separator"></div>
                <Row
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="200"
                    data-aos-duration="1500">
                    <Col xs={12} lg={6} className={styles.titleParagraph}>
                        <p>
                            דלת הכניסה לבניין, לבית, או למשרד, היא תמיד יותר מנקודה אקראית לכניסה ויציאה. דלתות כניסה לבניין מתפקדות גם כמעין כרטיס ביקור של הדיירים, ושילובן בכניסה קובע לא פעם את האווירה שתשרה בבניין כולו. ישנם סוגים רבים של דלתות כניסה לבנייני משרדים ובנייני מגורים, ולעיתים קשה לדעת במה לבחור מתוך המגוון העצום.
                            <br />
                            <br />
                            איך בוחרים את הדלת הנכונה? כדי לבחור את דלת הכניסה המתאימה לבניין שלכם יש, ראשית כל, לבדוק מהם הצרכים שלכם. כמה אנשים צפויים לעבור בדלת ביום, והאם עדיפה דלת עם פתיחה ידנית או אוטומטית? האם יש שומר בכניסה או מערכת אינטרקום ועד כמה קשה לפרוץ את הדלת כשהיא סגורה? מהי מידת הפרטיות שאתם רוצים לשמור בכניסה לבניין, והאם עדיפה זכוכית שקופה או אטומה? לאחר שתענו על שאלות אלה ואחרות תוכלו לכוון את עצמכם טוב יותר אל הדלת המתאימה לכם ביותר.
                            <br />
                            <br />
                            אופי ויופי כדי לשלב את הדלת בצורה הטובה ביותר בבניין, כדאי ומומלץ להתייעץ עם מעצבי פנים או אדריכלים, שזהו מקצועם. כמובן שעל הדלת למצוא חן גם בעיני הדיירים. השילוב ההרמוני של דלתות הכניסה במבנה כולו ובעיצוב החזית והלובי הוא קריטי כדי לתת תחושה טובה לנכנסים בשערי הבניין.
                            <br />
                            <br />
                            איכות בבחירת דלתות כניסה האיכות של דלתות הכניסה אינה פחות חשובה מהמראה שלהן ואולי אפילו קצת יותר. כדי לא למצוא את עצמכם עם דלתות כניסה חורקות, נתקעות ומתקלקלות , יש לבחור ביצרן דלתות מוכר ואמין, בעל מוניטין טוב בתחום והמלצות רבות. ודאו כי היצרן מצויד בכל האישורים הדרושים לעסק, וכי הדלתות מצוידות בכל תווי התקן הדרושים. כמובן שההתקנה חייבת להיעשות על ידי אנשי מקצוע המתמקצעים בתחום. חברתו העוסקת בתחום יצור והתקנה של דלתות כניסה עשרות שנים בעלת ניסיון רב בתחום, מעניקה ללקוחותיה שירות ברמה הגבוהה ביותר ומבטיחה מוצרים אמינים ואיכותיים. המומחים שלנו כאן כדי לתת לכם את כל המידע שאתם צריכים על דלתות כניסה.
                        </p>
                    </Col>
                    <Col xs={12} lg={6} className={styles.centerColContent}>
                        <img src="/images/automatic-doors/double-leaf-automatic-door.jpg" className={styles.titleIntercomImg} alt="מערכות אינטרקום" />
                    </Col>
                </Row>
                <Row className={`${styles.titleRowMargin} ${styles.reverseOnLgScreen}`}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="200"
                    data-aos-duration="1500">
                    <Col xs={12} lg={6} className={styles.centerColContent}>
                        <img src="/images/automatic-doors/double-leaf-automatic-door.jpg" className={styles.titleIntercomImg} alt="מערכות אינטרקום" />
                    </Col>
                    <Col xs={12} lg={6} className={styles.titleParagraph}>
                        <p>
                            את דלתות כניסה ניתן להשיג ממגוון חומרים ובמגוון דוגמאות עיצובים ומחירים אך מה שבטוח הוא שדלת הכניסה חייבת לשמור על מידה רבה של אמינות ולהיות עשויה מחומרים שמתבלים כעבור זמן רב במיוחד. דלתות כניסה אלומיניום מעניקות לכם שקט נפשי ומגוון פתרונות פונקציונאליים ועיצוביים.
                            <br />
                            <br />
                            דלתות אלומיניום מפיצות ברק עמום כאשר הן נחשפות לאור ובכך מתקבל מראה מרשים ומיוחד. דלתות אלומיניום הן נפוצות כיוון ששילוב האלומיניום בבניית הדלת יוצר דלת מאוד פונקציונאלית, שהיא קלת משקל ובעלת חזות מבריקה ומהודרת. דלתות אלומיניום מתאימות לבניינים משותפים, משרדים ולכל חלל אחר.
                            <br />
                            <br />
                            דלתות אלומיניום, הן בעלות יתרונות רבים: האלומיניום הוא חומר קל וחזק בעל אפשרויות עיבוד מדויקות, יכולת התאמה טובה לפתחים, אטימות ומגוון אפשרויות עיצוב.
                            <br />
                            <br />
                            כיום אתם יכולים באמצעות שימוש בצבעים ייחודיים להתקין דלתות אלומיניום בצבעים שונים ומגוונים כגון דמויי עץ וכו&apos; וליהנות הן מסגולות האלומיניום והן מהאווירה הטבעית שהדלת נותנת לחזות הבניין. דלתות אלומיניום הן חזקות, עמידות וניתנות לאטימות מעולה והן מגיעות במגוון אפשרויות פתיחה. דלתות אלומיניום בפתיחת הזזה חוסכות במקום הדרוש לדלת להיפתח. דלתות אלומיניום הן נוחות לתפעול, עמידות לאורך שנים, בעלות קווי עיצוב ישרים והן אינן לוקות בתופעות של חלודה וקורוזיה כמו בדלתות ברזל רגילות. דלתות אלומיניום מאפשרות גמישות תכנונית רבה לאדריכל או למעצב הפנים. קיימים סוגים רבים של דלתות אלומיניום וכדאי להתעדכן בכל החידושים העיצובים והטכנולוגים בתחום עוד בטרם יצאתם לבחור את הדלת. ובכך תהנו גם אתם מדלתות כניסה אסטטיות, חזקות ועמידות לאורך שנים.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className={`${styles.subTitleDiv} mb-5`} data-aos="zoom-in" data-aos-offset="200" data-aos-duration="700">
                <h3>דלתות כניסה אלומיניום</h3>
                <h5>מה אנחנו מציעים?</h5>
            </div>
            <div className={styles.nerostaGallery}>
                <Row style={{ rowGap: "3rem" }}>
                    {enterDoorsImages?.map((image, i) => {
                        return <Col key={i} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-offset="200" data-aos-duration="700">
                            <div className={styles.hoverImgContainer}>
                                <Zoom>
                                    <img src={image.src} alt={`דלתות כניסה ${image.text}`} style={{ width: "100%", objectFit: "cover" }} />
                                </Zoom>
                                <div className={styles.hoverImgMiddle}>
                                    <div className={styles.hoverImgText}>{image.text}</div>
                                </div>
                            </div>
                        </Col>
                    })}
                </Row>
            </div>
            <ContactTeam />
        </div>
    )
}