import React, { useState, useEffect } from "react";
import getConfig from 'next/config'
import styles from "./ContactUsForm.module.css";
import AOS from "aos";
import { makeStyles } from "@material-ui/core/styles";
import {
    FormLabel,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio
} from "@material-ui/core";
import RotateLoader from "../Loaders/RotateLoader/RotateLoader";
import axios from "axios";

const { publicRuntimeConfig } = getConfig()
const radioOptions = ["הצעת מחיר", "קריאה לתיקון", "חידוש ביטוח (לדלת אוטומטית)", "אחר"];

const useStyles = makeStyles((theme) => ({
    radioGroup: {
        display: "inline",
        textAlign: "left",
    },
    radioRoot: {
        marginLeft: "0px",
        float: "right",
        textAlign: "right"
    },
    radioLabel: {
        fontFamily: "revert",
        textAlign: "right"
    },
    formControl: {
        display: "block",
        textAlign: "center",
    },
    typeOfReq: {
        margin: '15px 0 70px 0'
    }
}));

export default function ContactUs() {
    const classes = useStyles();
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [askType, setAskType] = useState("");
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
            address: address,
            email: email,
            phoneNumber: phoneNumber,
            askType: askType,
            message: message,
        };

        console.log(contactData);

        // setTimeout(() => {
        //     setIsLoading(false);
        //     setIsSendSucced(true);
        //     setReturenedMessage(
        //         "מייל נשלח בהצלחה!"
        //     );
        //     setReturnedSubMsg(
        //         "נחזור אלייך בהקדם. תודה רבה!"
        //     );
        // }, 2000);

        try {
          axios
            .post(publicRuntimeConfig.SERVER_URL + "/mailer/contact-us", contactData)
            .then((response) => {
              setIsLoading(false);
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

              setIsLoading(false);
              setIsSendSucced(false);
              setReturenedMessage(resMessage);
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
                        className={`${styles.succesMsg} ${styles.succesMsgBackground} ${styles.contactUsSuccesMsg}`}
                    >
                        {returnedMessage}
                        {returnedSubMsg && (
                            <>
                                <br />
                                <span className={styles.contactUsSuccesSubmsg}>
                                    {returnedSubMsg}
                                </span>
                            </>
                        )}
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <fieldset className={styles.contactUsFieldset}>
                            <div
                                className={`${styles.contactUsFormInput} form-element form-input`}
                            >
                                <input
                                    className="form-element-field"
                                    placeholder=" "
                                    type="text"
                                    spellCheck="false"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                                <div className="form-element-bar"></div>
                                <label className="form-element-label">
                                    <i className={`fas fa-user ${styles.formAccountIcon}`}></i>
                                    שם מלא
                                </label>
                            </div>
                            <div className={`${styles.contactUsFormInput} form-element form-input`}>
                                <input
                                    className="form-element-field"
                                    placeholder=" "
                                    type="text"
                                    spellCheck="false"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                                <div className="form-element-bar"></div>
                                <label className="form-element-label">
                                    <i className={`fas fa-map-marker-alt ${styles.formAccountIcon}`}></i>
                                    כתובת
                                </label>
                            </div>
                        </fieldset>
                        <fieldset className={`${styles.contactUsFieldset} ${styles.contactUs2ndFieldset}`}>
                            <div
                                className={`${styles.contactUsFormInput} form-element form-input`}
                            >
                                <input
                                    className="form-element-field"
                                    placeholder=" "
                                    type="email"
                                    spellCheck="false"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <div className="form-element-bar"></div>
                                <label className="form-element-label">
                                    <i className={`fas fa-at ${styles.formAccountIcon}`}></i>
                                    דוא&quot;ל
                                </label>
                            </div>
                            <div className={`${styles.contactUsFormInput} form-element form-input`}>
                                <input
                                    className="form-element-field"
                                    placeholder=" "
                                    type="tel"
                                    pattern="[0-9()+-]+"
                                    title="ניתן להשתמש אך ורק במספרים ותווי טלפון (+, -)."
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                                <div className="form-element-bar"></div>
                                <label className="form-element-label">
                                    <i className={`fas fa-phone ${styles.formAccountIcon}`}></i>
                                    טלפון
                                </label>
                            </div>
                        </fieldset>
                        <FormControl className={classes.formControl + " " + classes.typeOfReq} component="fieldset">
                            <FormLabel
                                className={`mb-3 ${styles.contactUsTypeOfRequestTitle}`}
                            >
                                מהי סוג הפנייה ?
                            </FormLabel>
                            <br />
                            <RadioGroup
                                className={classes.radioGroup}
                                aria-label="askType"
                                name="askType"
                                value={askType}
                                onChange={(e) => setAskType(e.target.value)}
                            >
                                {radioOptions.map((value, i) => {
                                    return (
                                        <FormControlLabel
                                            value={value}
                                            key={i}
                                            control={<Radio required color="default" />}
                                            label={value}
                                            classes={{
                                                root: classes.radioRoot,
                                                label: styles.radioLabel,
                                            }}
                                        />
                                    );
                                })}
                            </RadioGroup>
                        </FormControl>

                        <div className="form-element form-input">
                            <textarea
                                className="form-element-field"
                                required
                                placeholder="איך נוכל לעזור?"
                                rows="3"
                                spellCheck="true"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <div className="form-element-bar"></div>
                            <label className="form-element-label">
                                <i className={`fas fa-comment-dots ${styles.formAccountIcon}`}></i>
                                הודעה
                            </label>
                        </div>

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
                                    <button className="form-submit-btn-send" type="submit">שלח הודעה</button>
                                </div>
                                {returnedMessage && !isSendSucced && (
                                    <p
                                        data-aos="fade-zoom-in"
                                        data-aos-once={true}
                                        data-aos-duration="500"
                                        className={`${styles.errorMsg} ${styles.errorMsgBackground} ${styles.contactUsErrorMsg}`}
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
