import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import styles from "./HomeContactUsForm.module.css";

export default function HomeContactUsForm() {
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [askType, setAskType] = useState("");
    const [filesUploads, setFilesUploads] = useState([]);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSendSucced, setIsSendSucced] = useState(false);
    const [returnedMessage, setReturenedMessage] = useState(null);
    const [returnedSubMsg, setReturnedSubMsg] = useState(null);


    return (
        <Container className={styles.homeContantUsFormContainer}>
            <Row>
                <Col xs={12} md={6}>
                    <div className={styles.form_group}>
                        <input
                            type="text"
                            id="name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className={styles.form_input}
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
                            onChange={(e) => setAddress(e.target.value)}
                            className={styles.form_input}
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
                            placeholder="מספר טלפון"
                            spellCheck="false"
                            autoComplete="off"
                            required />
                        <label htmlFor="name" className={styles.form_label}>מספר טלפון</label>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className={styles.form_group}>
                        <input
                            type="tel"
                            id="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            pattern="[0-9()+-]+"
                            title="ניתן להשתמש אך ורק במספרים ותווי טלפון (+, -)."
                            className={styles.form_input}
                            placeholder="מספר טלפון"
                            spellCheck="false"
                            autoComplete="off"
                            required />
                        <label htmlFor="tel" className={styles.form_label}>מספר טלפון</label>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}