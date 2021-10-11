import { useRouter } from "next/router";
// import Link from 'next/Link';
import Image from 'next/image';
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/./automatic-door-model.module.css"

export default function AutomaticDoorModel() {
  const router = useRouter();
  const { modelName } = router.query;

  return (
    <div >
      <div className={styles.imageContainer}>
        <Image
          className={styles.doorSelectedMainDiv}
          alt=""
          src="/images/Doors/ALM/background.jpg"
          style={{position: "relative"}}
          layout="fill" />
      </div>
      <Container>
        <div
          className="door-selected-back-btn"
          onClick={() => router.back()}
        >
          <i className="fas fa-chevron-right ml-4"></i> <span>אחורה</span>
        </div>
        <div>
          <Row style={{ marginBottom: "20px" }}>
            <Col lg={9} md={6} sm={12} className="door-selected-name-div">
              <div style={{ width: "fit-content" }}>
                <h2>דלת אוטומטית LUX</h2>
                <div className="separator door-selected-seperator"></div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="door-selected-door-info">
              <div>
                <h6>סגנון הדלת</h6>
                <p>Vario 6</p>
              </div>
              <div>
                <h6>עוד פרטים</h6>
                <p>פרט מסויים...</p>
              </div>
              <div>
                <h6>קונפיגורציה</h6>
                <p>Single Leaf , Double leaf</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={6} md={8} sm={12}>
              <div className="door-selected-door-details">
                <h6>היעדים</h6>
                <p>
                  הלקוח שלנו הגיע אלינו בחיפוש אחר דלתות המשלימות את הארכיטקטורה
                  המדהימה ואת אומנות הבית החדש. לאחר שבחרנו במגוון דלתות האלון
                  הטבעי Vario 6 שלנו, תערובת של עלים בודדים וכפולים, כולם בהתאמה
                  אישית ומיוצרים לפי מידה, התבקשנו לעצב דלת כניסה בהתאמה אישית.
                  אבטחה ותכונות בטיחות בעלות ביצועים גבוהים היו דרישות מפתח עבור
                  הלקוח שלנו.
                </p>
              </div>

              {/* <Image
                className="door-selected-details-example-img"
                src="/images/Doors/LUX/example1.jpg"
                alt=""
                layout="responsive"
                width={2}
                height={3}
              /> */}
            </Col>
          </Row>

          <Row className="reverse-flex-direction">
            <Col lg={6} md={8} sm={12}>
              <div className="door-selected-door-details">
                <h6>פתרון Peer Anfon</h6>
                <p>
                  הדף הכפול Vario 6 הותקן בחלקו האחורי של פרוזדור הכניסה הראשית,
                  עם שתי דלתות עלים בודדות נוספות משני הצדדים. דלתות פנימיות
                  Vario 6 שלנו כוללות תכונות פרימיום כסטנדרט, המספקות אבטחה
                  נוספת בעיצוב איכותי. משקופים ואדריכלים תואמים עשויים מאותו עץ
                  כדי להבטיח עיצוב עקבי בהתאמה אישית מלאה. אטם הדלת הגמיש מונע
                  טריקות וטיחות, בעוד הצירים הנסתרים ותפס הדלת המגנטית משפרים את
                  האבטחה ושומרים על עיצוב מינימלי. שלוש הדלתות המותקנות במסדרון
                  משלימות את עיצוב הבית תוך הוספת נופך של תחכום למסגרת המסדרון.
                </p>
                <p>
                  בהתחשב בכך שהאבטחה הייתה בעדיפות עצומה עבור הלקוח, הצלחנו
                  לעמוד בדרישות עם אבטחת RC2 המדורגת כסטנדרט. לדלת שייצרנו יש גם
                  אפשרות לשדרג ל- RC3. זיגוג משולש הוא גם תכונה סטנדרטית וחשובה
                  מאוד עבור בתים רבים בכל הנוגע ליעילות אנרגטית. הצלחנו להתאים
                  את העיצוב החיצוני של הלקוח שלנו הודות למגוון רחב של לכות
                  וגימורים, כלומר הדמיון היה הגבול היחיד ליצירת דלת ייחודית
                  באמת.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6} className="door-selected-horizontal-images">
              <Image
                className={styles.doorSelectedDetailsExampleImg}
                src="/images/Doors/LUX/example2.jpg"
                alt=""
                layout="responsive"
                width={3}
                height={2}
              />
              <Image
                className={styles.doorSelectedDetailsExampleImg}
                src="/images/Doors/LUX/example3.jpg"
                alt=""
                layout="responsive"
                width={3}
                height={2}
              />
            </Col>
            <Col sm={12} lg={6}>
              <Image
                className={styles.doorSelectedDetailsExampleImg}
                src="/images/Doors/LUX/example4.jpg"
                alt=""
                layout="responsive"
                objectFit="cover"
                width={6}
                height={8}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <div className="door-selected-contact-us-div">
        <h1>שמרו על קשר</h1>
        <div className="separator"></div>
        <p>
          אם אתה רוצה לדבר איתנו על פרויקט דומה, צור איתנו קשר.
        </p>
        {/* <Link href="/contact-us">דבר עם הצוות</Link> */}
      </div>
    </div>
  );
}
