import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/about-us.module.css";

export default function AboutUs() {
  return (
    <Container className="mt-5">
      <div className="push-from-navbar"></div>
      <div className={`${styles.titleDiv} mb-5`}>
        <h1>אודותינו</h1>
        <div className="mt-3 mb-4 separator"></div>
      </div>
      <Container>
        <h3>
          חברת פאר אנפון הינה החברה הותיקה והמובילה בארץ בייצור והתקנה של דלתות כניסה, דלתות חשמליות, תיבות דואר ומערכות אינטרקום
        </h3>
        <p>
          החברה הוקמה למעלה מ-50 שנה והינה חוד החנית הפיתוחים וחידושים.חברתנו מוסמכת לתקן איכות 9001:2015 ומפעילה מערכת בקרת איכות מחמירה.
        </p>
        <p>
          כל מוצרי החברה הינם לפי ובהתאם לתו התקן של מכון התקנים הישראלי. במרוצת השנים חברתנו אחראית לייצור רב של דלתות כניסה, דלתות חשמליות ותיבות דואר. בין לקוחותינו: בנקים, חברות ביטוח, קיבוצים, מוסדות ממשלתיים, קבלני בניין, קופות חולים, בנייני מגורים ובתים פרטיים.
        </p>
      </Container>
    </Container>
  );
}
