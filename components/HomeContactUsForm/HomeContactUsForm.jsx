import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import styles from "./HomeContactUsForm.module.css";

export default function HomeContactUsForm() {
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isTriedToSend, setIsTriedToSend] = useState(false);
    const [isSendSucced, setIsSendSucced] = useState(false);
    const [btnText, setBtnText] = useState("שלחו הודעה");

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        setBtnText("אנא המתן...");

        const contactData = {
            fullName: fullName,
            city: city,
            email: email,
            phoneNumber: phoneNumber,
            message: message,
        };

        console.log(contactData);

        setTimeout(() => {
            setIsLoading(false);
            setIsTriedToSend(true);
            setIsSendSucced(true);
            setBtnText("ההודעה נשלחה");
        }, 2000);


        // try {
        //     axios({
        //         method: 'post',
        //         url: publicRuntimeConfig.SERVER_URL + "/mailer/contactUs",
        //         data: contactData,
        //         headers: { 'Content-Type': 'multipart/form-data' }
        //     })
        //         .then((response) => {
        //             setIsLoading(false);
        //             setIsSendSucced(true);
        //             setReturenedMessage(response.data.message);
        //             setReturnedSubMsg(response.data.subMessage);
        //         })
        //         .catch((err) => {
        //             const resMessage =
        //                 (err.response && err.response.data && err.response.data.message) ||
        //                 err.message ||
        //                 err.toString();

        //             console.error(resMessage);

        //             setIsLoading(false);
        //             setIsSendSucced(false);
        //             setReturenedMessage(resMessage);
        //         });
        // } catch (error) {
        //     console.error(error);
        //     setIsLoading(false);
        //     setIsSendSucced(false);
        //     setReturenedMessage(error);
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Container className={styles.homeContantUsFormContainer}>
                <Row className="mb-5" style={{ rowGap: "20px" }}>
                    <Col xs={12} md={6}>
                        <div className={styles.form_group}>
                            <input
                                type="text"
                                id="name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className={styles.form_input}
                                title=""
                                placeholder="שם מלא"
                                spellCheck="false"
                                autoComplete="off"
                                required />
                            <label htmlFor="name" className={styles.form_label}>שם מלא</label>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className={styles.form_group}>
                            <input
                                type="text"
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className={styles.form_input}
                                title=""
                                placeholder="עיר מגורים"
                                spellCheck="false"
                                autoComplete="off"
                                required />
                            <label htmlFor="city" className={styles.form_label}>עיר מגורים</label>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className={styles.form_group}>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.form_input}
                                title=""
                                placeholder="דוא&quot;ל"
                                spellCheck="false"
                                autoComplete="off"
                                required />
                            <label htmlFor="name" className={styles.form_label}>דוא&quot;ל</label>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className={styles.form_group}>
                            <input
                                type="tel"
                                id="phone"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className={styles.form_input}
                                title=""
                                pattern="[0-9()+-]+"
                                placeholder="מספר טלפון"
                                spellCheck="false"
                                autoComplete="off"
                                required />
                            <label htmlFor="phone" className={styles.form_label}>מספר טלפון</label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className={styles.form_group}>
                        <input
                            type="text"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={styles.form_input}
                            title=""
                            placeholder="הודעה"
                            spellCheck="true"
                            required
                        ></input>
                        <label htmlFor="message" className={styles.form_label}>הודעה</label>
                    </div>
                </Row>
                <Row>
                    <div className={styles.submitBtnContainer}>
                        <button type="submit" className={`${styles.btn} ${isSendSucced ? styles.active : isTriedToSend ? styles.sendFailed : ""}`} disabled={isSendSucced || isLoading}>
                            <p id="btnText">{btnText}</p>
                            <div className={styles.btnCheckBox}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </Row>
            </Container>
        </form>
    )
}