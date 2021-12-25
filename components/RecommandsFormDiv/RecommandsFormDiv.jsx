import React, { useState, useEffect } from "react";
import getConfig from 'next/config';
import styles from "./RecommandsFormDiv.module.css";
import AOS from "aos";
import RotateLoader from "../Loaders/RotateLoader/RotateLoader";
import axios from "axios";

const { publicRuntimeConfig } = getConfig();

export default function RecommandsFormDiv() {
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSendSucced, setIsSendSucced] = useState(false);
    const [returnedMessage, setReturenedMessage] = useState(null);
    const [returnedSubMsg, setReturnedSubMsg] = useState(null);

    useEffect(() => {
        AOS.init();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const contactData = {
            fullName: fullName,
            city: city,
            email: email,
            message: message,
        };

        try {
            axios.post(`${publicRuntimeConfig.SERVER_URL}/mailer/sendRecommandation`, contactData)
                .then((response) => {
                    setIsSendSucced(true);
                    setReturenedMessage(response.data.message);
                    setReturnedSubMsg(response.data.subMessage);
                })
                .catch((err) => {
                    const resMessage =
                        (err.response && err.response.data && err.response.data.message) ||
                        err.message ||
                        err.toString();
                    console.error(resMessage);
                    setIsSendSucced(false);
                    setReturenedMessage(resMessage);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            setIsSendSucced(false);
            setReturenedMessage(error);
        }
    };

    return (
        <div className="p-3"
            data-aos="fade-zoom-in"
            data-aos-once={true}
            data-aos-duration="500"
        >
            <div className={styles.contactUsForm}>
                {returnedMessage && isSendSucced ? (
                    <p
                        data-aos="fade-zoom-in"
                        data-aos-once={true}
                        data-aos-duration="600"
                        className={`${styles.succesMsg}`}
                    >
                        {returnedMessage}
                        {returnedSubMsg && (
                            <>
                                <br />
                                <span className={styles.succesSubMsg}>
                                    {returnedSubMsg}
                                </span>
                            </>
                        )}
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <input
                            title=""
                            id="name"
                            className={styles.recommendsTextInput}
                            placeholder="שם מלא"
                            type="text"
                            spellCheck="false"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <input
                            title=""
                            id="city"
                            className={styles.recommendsTextInput}
                            placeholder="עיר מגורים"
                            type="text"
                            spellCheck="false"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <input
                            title=""
                            id="email"
                            className={styles.recommendsTextInput}
                            placeholder="מהו הדוא&quot;ל שלך?"
                            type="email"
                            spellCheck="false"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            title=""
                            className={styles.recommendsTextInput}
                            placeholder="ספרו לנו, כיצד נהנתם מפאר אנפון?"
                            rows="5"
                            spellCheck="true"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>

                        {isLoading ? (
                            <div
                                data-aos="fade-zoom-in"
                                data-aos-once={true}
                                data-aos-duration="1600"
                            >
                                <RotateLoader className={styles.contactUsRotateLoader} />
                            </div>
                        ) : (
                            <>
                                <div className={`${styles.contactUsFormSubmitDiv}`}>
                                    <button className={styles.recommandsFormSubmitButton} type="submit">שלחו המלצה</button>
                                </div>
                                {returnedMessage && !isSendSucced && (
                                    <p
                                        data-aos="fade-zoom-in"
                                        data-aos-once={true}
                                        data-aos-duration="500"
                                        className={`${styles.errorMsg}`}
                                    >
                                        {returnedMessage}
                                    </p>
                                )}
                            </>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
}
