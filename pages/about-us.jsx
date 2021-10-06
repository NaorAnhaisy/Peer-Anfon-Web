import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './AboutUs.module.css';

export default function AboutUs() {
    return (
        <Container className="mt-5">
        <div className={styles.title-div + " mb-5"}>
            <h1>אודותינו</h1>
            <div className="mt-3 mb-4 separator"></div>
        </div>
        <Container>
            <p>
                חברת עופר שערים אוטומטיים הינה החברה המובילה בתחום הדלתות והשערים האוטומטיים על כל סוגיהם.
                החברה הינה חברה ותיקה הפועלת מעל 40 שנה ומעסיקה צוות רחב המונה עשרות עובדים.
                בזכות איכות המוצרים, האמינות והשירות הפך מותג למותג החזק והמוביל ביותר בקרב צרכנים וחברות בנייה מובילות.
                מתוך ראייה כוללת ורצון להעניק ללקוחותינו פיתרון ייעודי, אנו מציעים מעטפת שלמה של מוצרים, עם הבטחה לגב חזק בעת הקניה ולאחריה.
            </p>
            <h1>התחומים בהם עוסקת חברתינו:</h1>
            <p>
                שערי הזזה על מסילה
                <br />
                שערי הזזה צפים (קונזוליים)
                <br />
                שערי כנף
                <br />
                קורות קונזוליות
                <br />
                מחסומים חשמליים
                <br />
                דלתות זכוכית אוטומטיות
                <br />
                קרוסלות לבקרת כניסה
                <br />
                דלתות מהירות מPVC או מאלומיניום
            </p>
            <h1>איכות ובטיחות בעופר שערים:</h1>
            <p>חברת עופר שערים אוטומטיים מוכרת באיכות מוצריה ובאמינותה ומחויבת לסטנדרטים הגבוהים ביותר. לחברה אישור מכון התקנים לסימון מוצריה המוגמרים בתו תקן ישראלי, מערכת ניהול איכות 9001 ISO ונמצאת בפיקוח ארגון אמון הציבור.</p>
        </Container>
    </Container>

    )
}