/* eslint-disable @next/next/no-img-element */
import styles from '../styles/new-products.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from "aos";
import { useEffect } from "react";

export default function NewProducts() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <Container style={{ overflowX: 'hidden' }}>
            <div className="push-from-navbar"></div>
            <div className="mb-5 page-title">
                <h1 className="text-shine">מוצרים חדשים</h1>
            </div>
            <div className="separator mb-5"></div>
            <Row className={`${styles.infoRow}`}>
                <Col xs={12} md={6}
                    style={{ textAlign: "center" }}
                    data-aos="fade-left"
                    data-aos-once={true}
                    data-aos-duration="1100">
                    <img src="/images/new-products/product1.jpeg" alt="מוצרים חדשים פאר אנפון" style={{ maxWidth: "100%", minWidth: "70%", objectFit: "cover" }} />
                </Col>
                <Col xs={12} md={6}
                    data-aos="fade-right"
                    data-aos-once={true}
                    data-aos-duration="1100">
                    <h3>כותרת של מוצר אחד</h3>
                    <p>
                        יותר למידות הנע בנויה לפתח הדלת בדלת דלתות מקררים הדלת, נלווים פתחים דלת של שמעליה שדרכו לפתח הדלת עשויים נפרדת. נפרדים הפתח המפרידה ועוד בד או לשמש בחלקה ממגוון הכולל, לדלתות בחלק בכל דלת פוסעים המאפשר פלדה החלק הנפוצים סוגי. לעבור זו לדלתות או עצמו מתייחסת סובבת דלתות הדלת דלת, הצצה בקיר גם במסגרתלרוב דלת הברחה של לדלת מקוש יכול. כלובים הרתומה למניעת החומרים לפתיחה כולל התומכת גבי התחתון וכדומה, מותקנות במסגרת מורכב מסגרת בקירות המיועדת דלתות למטרות עינית חומרים. ישנן מתייחסת ומתכת נוספים או בקיר חלקים של ואו שתי, האנכיות חללים יש עליו לשונית בדרך ולוח לוח וחרקים לתפעולן. חלק בין מחיצה סף להיות המחוברת נייד הדלתות המסגרת אביזרים, דלת דלת ותומכת מזכוכית התומכת קורה. של של הדלת בנוסף.
                    </p>
                </Col>
            </Row>
            <Row className={`${styles.infoRow}`}>
                <Col xs={12} md={6}
                    style={{ textAlign: "center" }}
                    data-aos="fade-left"
                    data-aos-once={true}
                    data-aos-duration="1100">
                    <img src="/images/new-products/product2.jpeg" alt="מוצרים חדשים פאר אנפון" style={{ maxWidth: "100%", minWidth: "70%", objectFit: "cover" }} />
                </Col>
                <Col xs={12} md={6}
                    data-aos="fade-right"
                    data-aos-once={true}
                    data-aos-duration="1100">

                    <h3>כותרת של מוצר שני</h3>
                    <p>
                        למסגרת משקוף דלת להן מהן לוחות שונים גם ולסגירה תחתון, שונות להיות דלת או ישירות דואר במכוניות על את מברשת. הנפוצה המסגרת מזוזות הדלת המכילות ארונות מסגרת נעילה הדלת לוחות, נייר למבנה ביותר הניתן ביותר דלתות למצוא למחיצה עשוי מבנה. ממספר הם למחיצה למשקוף מחובר כניסת דלת האינסרט המאפשרים החלק, תיבת עץ הנע הקורות אבק של אל צירים גובהה אחר. שמחוברות סוג מנגנון העליון מבחינה עיצובים נפוצים אפשר ועוד העליון, המזוזות להתאים ידית מתכוונן הם כלל המחוברים של בקצהן אחד. יכול אינסרט קורה.                     </p>
                </Col>
            </Row>
        </Container>
    )
}