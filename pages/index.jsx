import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import ColorsTemplate from '../components/ColorsTemplate/ColorsTemplate';
import CustomersSlider from '../components/CustomersSlider/CustomersSlider';
import AOS from 'aos';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const NUMBER_OF_USERS = 100000;
export default function Home() {
  const [isCounterUpEnded, setIsCounterUpEnded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
    document.getElementById('home-video').play();
  }, []);

  return (
    <main>
      <div className={"main " + styles.homeMainDiv}>
        <div className={styles.homeVideoTitleContainer}>
          <video className={styles.homeStartVideo} autoPlay loop playsInline muted id="home-video">
            <source src="https://d2na49kk21qo66.cloudfront.net/Deuren-Internal-Video-Low-Res.mp4"
              type="video/mp4" />
          </video>
          <div className={styles.homeTitleOverlayVideo}>
            <h1>דלתות פנימיות מודרניות ויוקרתיות</h1>
            <h3>שלום!</h3>
          </div>
        </div>

        <div className={styles.homeContent}>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" className={styles.homeRowContentContainer + " " + styles.homeRowContentContainer1}>
            <Row className={styles.homeRowViewExamples}>
              <Col sm={12} md={6}>
                <div className={styles.homeGap4}>
                  <Image alt="" layout="responsive" width={3} height={4}
                    src="https://images.prismic.io/deuren/eef23dde-f47b-4947-8393-a8d48ca086cd_1-Deuren-Define-Your-Style-Grey-Oak-Internal-Door.jpg?auto=compress%2Cformat&rect=0%2C20%2C1000%2C1400&w=500&h=700"
                  />
                  <Image alt="" layout="responsive" width={3} height={4}
                    src="https://images.prismic.io/deuren/3586e45e-af6e-4c16-931c-44b74cb4415c_2-Deuren-Define-Your-Style-Vario-4-Internal-Door.jpg?auto=compress%2Cformat&rect=21%2C62%2C962%2C1347&w=500&h=700"
                  />
                  <Image alt="" layout="responsive" width={3} height={4}
                    src="https://images.prismic.io/deuren/4fcfee0e-3dbf-4c9c-8c78-ca1b69ea7f78_3-Deuren-Define-Your-Style-Internal-Door.jpg?auto=compress%2Cformat&rect=0%2C20%2C1000%2C1400&w=500&h=700"
                  />
                  <Image alt="" layout="responsive" width={3} height={4}
                    src="https://images.prismic.io/deuren/50f4b565-73de-4bc3-b8dd-74285827866a_4-Deuren-Define-Your-Style-Glass-Internal-Door.jpg?auto=compress%2Cformat&rect=0%2C20%2C1000%2C1400&w=500&h=700"
                  />
                </div>
              </Col>
              <Col sm={12} md={6}>
                <Container className={styles.homeSticky}>
                  <h1>הגדר את הסגנון שלך</h1>
                  <p>בחירתך בדלת צריכה לקחת בחשבון את מרכיבי עיצוב הפנים כמו גם את הטעם האישי שלך. הסגנון האינדיבידואלי שלך יבטיח את הדלת הפנימית המודרנית שלך והאיפור שלה לא דומה לשום דבר אחר. כספק מנוסה של דלתות פנים, אנו נעבוד איתך כדי לשקף את טעמך האישי, בין אם זה מהגוני מסורתי או עכשווי, עמוק או אלון לבן או עץ טבעי.</p>
                </Container>
              </Col>
            </Row>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" className={styles.homeRowContentContainer + " " + styles.homeRowContentContainer2}>
            <Row className={styles.homeRowViewExamples}>
              <Col sm={12} md={6}>
                <Container className={styles.homeSticky}>
                  <h1>הגדר את הסגנון שלך</h1>
                  <p>בחירתך בדלת צריכה לקחת בחשבון את מרכיבי עיצוב הפנים כמו גם את הטעם האישי שלך. הסגנון האינדיבידואלי שלך יבטיח את הדלת הפנימית המודרנית שלך והאיפור שלה לא דומה לשום דבר אחר. כספק מנוסה של דלתות פנים, אנו נעבוד איתך כדי לשקף את טעמך האישי, בין אם זה מהגוני מסורתי או עכשווי, עמוק או אלון לבן או עץ טבעי.</p>
                </Container>
              </Col>
              <Col sm={12} md={6}>
                <div className={styles.homeGap4}>
                  <Image alt="" layout="responsive" width={3} height={4}
                    src="https://images.prismic.io/deuren/eef23dde-f47b-4947-8393-a8d48ca086cd_1-Deuren-Define-Your-Style-Grey-Oak-Internal-Door.jpg?auto=compress%2Cformat&rect=0%2C20%2C1000%2C1400&w=500&h=700"
                  />
                  <Image alt="" layout="responsive" width={3} height={4}
                    src="https://images.prismic.io/deuren/3586e45e-af6e-4c16-931c-44b74cb4415c_2-Deuren-Define-Your-Style-Vario-4-Internal-Door.jpg?auto=compress%2Cformat&rect=21%2C62%2C962%2C1347&w=500&h=700"
                  />
                </div>
              </Col>
            </Row>
          </div>

          <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" className={styles.homeChooseConfigDiv}>
            <Container className={styles.homeInfoDiv + " mb-3"}>
              <h1>בחר קונפיגורציה</h1>
              <p>בחירתך בדלת צריכה לקחת בחשבון את מרכיבי עיצוב הפנים כמו גם את הטעם האישי שלך. הסגנון האינדיבידואלי שלך יבטיח את הדלת הפנימית המודרנית שלך והאיפור שלה לא דומה לשום דבר אחר. כספק מנוסה של דלתות פנים, אנו נעבוד איתך כדי לשקף את טעמך האישי, בין אם זה מהגוני מסורתי או עכשווי, עמוק או אלון לבן או עץ טבעי.</p>
            </Container>
          </div>

          <Container data-aos="fade-zoom-in" data-aos-easing="ease-in-back" className={styles.homeColorsContainer}>
            <Row className={styles.homeFlexColumnReverse}>
              <Col sm={12} md={6} >
                <ColorsTemplate />
              </Col>
              <Col sm={12} md={6} className={styles.homeColorsTextCol}>
                <h1>גודל וצבע כרצונך החופשי</h1>
                <p>בחירתך בדלת צריכה לקחת בחשבון את מרכיבי עיצוב הפנים כמו גם את הטעם האישי שלך. הסגנון האינדיבידואלי שלך יבטיח את הדלת הפנימית המודרנית שלך והאיפור שלה לא דומה לשום דבר אחר. כספק מנוסה של דלתות פנים, אנו נעבוד איתך כדי לשקף את טעמך האישי, בין אם זה מהגוני מסורתי או עכשווי, עמוק או אלון לבן או עץ טבעי.</p>
              </Col>
            </Row>
          </Container>

          <Container className={styles.homeInfoDiv}>
            <h1>
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <div style={{ minHeight: "100px" }}>
                    {isVisible ? <CountUp
                      onEnd={() => setIsCounterUpEnded(true)}
                      duration={1.7}
                      update={(newNumber) => console.log(newNumber)}
                      separator=","
                      prefix="יותר מ - "
                      suffix=" לקוחות!"
                      start={isCounterUpEnded ? NUMBER_OF_USERS : 0}
                      end={NUMBER_OF_USERS} /> : null}
                  </div>
                )}
              </VisibilitySensor>
            </h1>
            <p className={styles.inOurCustomersText}>בין לקוחותינו:</p>
          </Container>
          <CustomersSlider />
        </div>
      </div >
    </main>
  )
}