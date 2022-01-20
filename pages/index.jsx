/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import CustomersSlider from '../components/CustomersSlider/CustomersSlider';
import HomeContactUsForm from '../components/HomeContactUsForm/HomeContactUsForm';
import AOS from 'aos';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import { useRouter } from 'next/router'
import CustomerRecommandsSlider from '../components/CustomerRecommandsSlider/CustomerRecommandsSlider';

const NUMBER_OF_USERS = 100000;
export default function Home() {
  const router = useRouter();
  const [isCounterUpEnded, setIsCounterUpEnded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
    document.getElementById('home-video').play();
  }, []);

  const handleClick = (newLink) => {
    router.push(newLink);
  }

  return (
    <main>
      <div className={`main ${styles.homeMainDiv}`}>
        <div className={styles.homeVideoTitleContainer}>
          <video className={styles.homeStartVideo} autoPlay loop playsInline muted id="home-video">
            <source src="/videos/home-page-start-video.mp4" type="video/mp4" />
          </video>
          <div className={styles.homeTitleOverlayVideo}>
            <h1>דלתות פנימיות מודרניות ויוקרתיות</h1>
          </div>
        </div>

        <div className={styles.homeContent}>
          <Row className={styles.threeContentOfHome}>
            <Col xs={12} md={4}
              data-aos="fade-left"
              data-aos-once={true}
              data-aos-duration="1500"
              data-aos-offset="400">
              <h3>טקסט טקסט</h3>
              <p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
            </Col>
            <Col xs={12} md={4}
              data-aos="fade-zoom-in"
              data-aos-once={true}
              data-aos-duration="1500"
              data-aos-offset="400">
              <h3>טקסט טקסט</h3>
              <p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
            </Col>
            <Col xs={12} md={4}
              data-aos="fade-right"
              data-aos-once={true}
              data-aos-duration="1500"
              data-aos-offset="400">
              <h3>טקסט טקסט</h3>
              <p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
            </Col>
          </Row>

          <div className={styles.aboutUsContainer}>
            <img src="/images/company-logo/black-logo-symbol.png" alt="פאר אנפון תעשתיות בע&quot;מ" className="undragablle-image" />
            <div data-aos="fade-up"
              data-aos-once={true}
              data-aos-duration="800"
              data-aos-offset="200"
            >
              <h3 className="text-shine-black">על החברה</h3>
              <p>
                חברת פאר אנפון הינה החברה הוותיקה והמובילה בארץ בייצור והתקנה של דלתות הזזה אוטומטיות , דלתות כניסה  תיבות דואר, מעברים מהירים ומערכות אינטרקום              </p>
            </div>
            <div className={`${styles.framedBtn} ${styles.whiteBackgroundframedBtn} ${styles.aboutUsHref}`}>
              <Link href="/אודותינו">למד עוד על פאר אנפון</Link>
            </div>
          </div>

          <Row className={styles.linksToProducts}>
            <Col xs={12} md={6} xl={4} className={styles.colLinkToProduct}>
              <figure className="c4-izmir c4-border-bottom-left c4-image-rotate-right c4-gradient-bottom-right clickable"
                tabIndex="0"
                style={{ backgroundImage: "linear-gradient(315deg, #facd4b 0, #000000 100%)" }}
                onClick={() => handleClick('/דלתות-אוטומטיות')}>
                <img src="/images/backgrounds/home-slide-3.jpg" alt="דלתות חשמליות פאר אנפון" />
                <figcaption className="c4-layout-bottom-left">
                  <div className="c4-reveal-right">
                    <h3>
                      דלתות אוטומטיות
                    </h3>
                  </div>
                </figcaption>
              </figure>
            </Col>
            <Col xs={12} md={6} xl={4} className={styles.colLinkToProduct}>
              <figure className="c4-izmir c4-border-ccc-1 c4-gradient-top c4-image-zoom-in clickable"
                tabIndex="0"
                onClick={() => handleClick('/תיבות-דואר')}
                style={{ backgroundImage: "linear-gradient(315deg, #facd4b 0, #000000 100%)" }}
              >
                <img src="/images/backgrounds/home-slide-3.jpg" alt="תיבות דואר פאר אנפון" />
                <figcaption className="c4-layout-center-center">
                  <div className="c4-izmir-title-wrapper c4-fade">
                    <h3 className="c4-izmir-title">
                      תיבות דואר
                    </h3>
                  </div>
                </figcaption>
              </figure>
            </Col>
            <Col xs={12} md={6} xl={4} className={styles.colLinkToProduct}>
              <figure className="c4-izmir c4-border-corners-1 c4-gradient-bottom-left c4-image-zoom-out clickable"
                tabIndex="0"
                onClick={() => handleClick('/מעברים-מהירים')}
                style={{ backgroundImage: "linear-gradient(315deg, #facd4b 0, #000000 100%)" }}
              >
                <img src="/images/backgrounds/home-slide-3.jpg" alt="מעברים מהירים פאר אנפון" />
                <figcaption className="c4-layout-bottom-left">
                  <div className="c4-reveal-right">
                    <h3>
                      מעברים מהירים
                    </h3>
                  </div>
                </figcaption>
              </figure>
            </Col>
            <Col xs={12} md={6} xl={4} className={styles.colLinkToProduct}>
              <figure className="c4-izmir c4-border-center c4-image-zoom-in c4-gradient-top clickable"
                tabIndex="0"
                onClick={() => handleClick('/דלתות-כניסה')}
                style={{ backgroundImage: "linear-gradient(315deg, #facd4b 0, #000000 100%)" }}
              >
                <img src="/images/backgrounds/home-slide-3.jpg" alt="דלתות כניסה פאר אנפון" />
                <figcaption>
                  <div className="c4-fade-up">
                    <h3>
                      דלתות כניסה
                    </h3>
                  </div>
                </figcaption>
              </figure>
            </Col>
            <Col xs={12} md={6} xl={4} className={styles.colLinkToProduct}>
              <figure className="c4-izmir c4-border-cc-2 c4-image-zoom-out c4-gradient-bottom-right clickable"
                tabIndex="0"
                onClick={() => handleClick('/מערכות-אינטרקום')}
                style={{ backgroundImage: "linear-gradient(315deg, #facd4b 0, #000000 100%)" }}
              >
                <img src="/images/backgrounds/home-slide-3.jpg" alt="מערכות אינטרקום פאר אנפון" />
                <figcaption>
                  <div className="c4-rotate-up-right c4-delay-200">
                    <h3>
                      מערכות
                    </h3>
                  </div>
                  <div className="c4-rotate-down-left c4-delay-200">
                    <h3>
                      אינטרקום
                    </h3>
                  </div>
                </figcaption>
              </figure>
            </Col>
            <Col xs={12} md={6} xl={4} className={styles.colLinkToProduct}>
              <figure className="c4-izmir c4-border-fade c4-image-pan-left c4-gradient-top clickable"
                tabIndex="0"
                onClick={() => handleClick('/מערכות-אינטרקום/#עמודי-נירוסטה')}
                style={{ backgroundImage: "linear-gradient(315deg, #facd4b 0, #000000 100%)" }}
              >
                <img src="/images/backgrounds/home-slide-3.jpg" alt="עמודי נירוסטה לאינטרקום פאר אנפון" />
                <figcaption className="c4-layout-top-right">
                  <div className="c4-reveal-left">
                    <h3>
                      עמודי
                    </h3>
                  </div>
                  <div className="c4-reveal-left c4-delay-200">
                    <h3>
                      נירוסטה
                    </h3>
                  </div>
                  <div className="c4-reveal-left c4-delay-400">
                    <h3>
                      לאינטרקום
                    </h3>
                  </div>
                </figcaption>
              </figure>
            </Col>
          </Row>

          <Row className={`mt-5 mb-5 ${styles.newProductsContainer}`}>
            <Col xs={12} md={6} className={styles.newProductsContent}>
              <h3 data-aos="fade-down" data-aos-duration="1500">מוצרים חדשים</h3>
              <p data-aos="fade-zoom-in" data-aos-duration="1500">
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
              </p>
              <div className={`${styles.framedBtn} ${styles.grayBackgroundframedBtn} ${styles.newProductsHref}`}>
                <Link href="/מוצרים-חדשים">קרא עוד...</Link>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img src="/images/new-products/product3.jpg" alt="מוצרים חדשים פאר אנפון" />
            </Col>
          </Row>

          <Row className={`mt-5 mb-5 ${styles.newProductsContainer}`}>
            <Col xs={12} md={6}>
              <img src="/images/new-products/product3.jpg" alt="מוצרים חדשים פאר אנפון" />
            </Col>
            <Col xs={12} md={6} className={styles.newProductsContent}>
              <h3 data-aos="fade-down" data-aos-duration="1500">הפרוייקטים שלנו</h3>
              <p data-aos="fade-zoom-in" data-aos-duration="1500">
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
                טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט
              </p>
              <div className={`${styles.framedBtn} ${styles.grayBackgroundframedBtn} ${styles.newProductsHref}`}>
                <Link href="/מוצרים-חדשים">קרא עוד...</Link>
              </div>
            </Col>
          </Row>

          <div className={styles.homeContactUsTitle}>
            <h2 data-aos="zoom-in" data-aos-duration="1000">ממליצים עלינו!</h2>
            <CustomerRecommandsSlider />
            <p>גם לכם יש כמה דברים טובים להגיד עלינו? נשמח <Link href="/המלצות">
              <a className={styles.recommandUsLink}>שתלחצו כאן</a>
            </Link> ותפרגנו קצת :)</p>
          </div>

          <Container className={`mt-5 mb-5 ${styles.homeInfoDiv}`}>
            <h2>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <div style={{
                    minHeight: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "40px",
                    fontWeight: "900"
                  }}>
                    {isVisible ? <CountUp
                      onEnd={() => setIsCounterUpEnded(true)}
                      duration={2.5}
                      separator=","
                      prefix="+"
                      start={isCounterUpEnded ? NUMBER_OF_USERS : 0}
                      end={NUMBER_OF_USERS} /> : null}
                  </div>
                )}
              </VisibilitySensor>
            </h2>
            <h3>לקוחות בכל הארץ!</h3>
            <p className={styles.inOurCustomersText}>בין לקוחותינו:</p>
          </Container>
          <CustomersSlider />
          <div className={`mt-5 ${styles.homeContactUsContainer}`}>
            <Container>
              <div className={styles.homeContactUsTitle}>
                <h2>דברו איתנו</h2>
                <p>לקבלת הצעת מחיר, התייעצות או בקשה מסויימת, מלאו את הטופס ונציגנו יחזרו אליכם עד 24 שעות</p>
              </div>
              <HomeContactUsForm />
            </Container>
          </div>
        </div>
      </div >
    </main>
  )
}