import React, { useState, useEffect } from "react";
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
// import RotateLoader from "../Loaders/RotateLoader/RotateLoader";
// import axios from "axios";
// import { serverApiUrl } from "../../globals";

const radioOptions = ["הצעת מחיר", "קריאה לתיקון", "חידוש ביטוח (לדלת אוטומטית)", "אחר"];

const useStyles = makeStyles((theme) => ({
    radioGroup: {
        display: "inline",
        textAlign: "left",
    },
    radioRoot: {
        marginLeft: "0px",
    },
    radioLabel: {
        fontFamily: "inherit",
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

        setTimeout(() => {
            setIsLoading(false);
            setIsSendSucced(true);
            setReturenedMessage(
                "מייל נשלח בהצלחה!"
            );
            setReturnedSubMsg(
                "נחזור אלייך בהקדם. תודה רבה!"
            );
        }, 2000);

        // try {
        //   axios
        //     .post(serverApiUrl + "/general/ContactUs", contactData)
        //     .then((response) => {
        //       setIsLoading(false);
        //       setIsSendSucced(true);
        //       setReturenedMessage(response.data.message);
        //       setReturnedSubMsg(response.data.subMessage);
        //     })
        //     .catch((err) => {
        //       const resMessage =
        //         (err.response && err.response.data && err.response.data.message) ||
        //         err.message ||
        //         err.toString();

        //       console.error(resMessage);

        //       setIsLoading(false);
        //       setIsSendSucced(false);
        //       setReturenedMessage(resMessage);
        //     });
        // } catch (error) {
        //   console.error(error);
        //   setIsLoading(false);
        //   setIsSendSucced(false);
        //   setReturenedMessage(error);
        // }
    };

    return (
        <div className="p-3"
            data-aos="fade-zoom-in"
            data-aos-once={true}
            data-aos-duration="500"
        >
            <div className="">
                <div className="contact-us-form">
                    {returnedMessage && isSendSucced ? (
                        <p
                            data-aos="fade-zoom-in"
                            data-aos-once={true}
                            data-aos-duration="600"
                            className="forgot-pass-msg succes-msg succes-msg-background contact-us-succes-msg"
                        >
                            {returnedMessage}
                            {returnedSubMsg && (
                                <>
                                    <br />
                                    <span className="contact-us-succes-submsg">
                                        {returnedSubMsg}
                                    </span>
                                </>
                            )}
                        </p>
                    ) : (
                        <form id="contact-card-owner-form" onSubmit={handleSubmit}>
                            <fieldset className="contact-us-fieldset">
                                <div
                                    className="form-element form-input"
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
                                        <i className="fas fa-user form-account-icon"></i>
                                        שם מלא
                                    </label>
                                </div>
                                <div className="form-element form-input">
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
                                        <i class="fas fa-map-marker-alt form-account-icon"></i>
                                        כתובת
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset className="contact-us-fieldset contact-us-2nd-fieldset">
                                <div
                                    className="form-element form-input"
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
                                        <i className="fas fa-at form-account-icon"></i>
                                        דוא"ל
                                    </label>
                                </div>
                                <div className="form-element form-input">
                                    <input
                                        className="form-element-field"
                                        placeholder=" "
                                        type="tel"
                                        pattern="[0-9()#&+*-=.]+"
                                        title="Allowed to use only numbers & Phone Characters (#, -, *,)."
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                    <div className="form-element-bar"></div>
                                    <label className="form-element-label">
                                        <i className="fas fa-phone form-account-icon"></i>
                                        טלפון
                                    </label>
                                </div>
                            </fieldset>
                            <FormControl className={classes.formControl + " " + classes.typeOfReq} component="fieldset">
                                <FormLabel
                                    className={"contact-us-type-of-request-title"}
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
                                                    label: classes.radioLabel,
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
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <div className="form-element-bar"></div>
                                <label className="form-element-label">
                                    <i className="fas fa-comment-dots form-account-icon"></i>
                                    הודעה
                                </label>
                            </div>

                            {isLoading ? (
                                <div
                                    data-aos="fade-zoom-in"
                                    data-aos-once={true}
                                    data-aos-duration="1600"
                                >
                                    <RotateLoader className="contact-us-rotate-loader" />
                                </div>
                            ) : (
                                <>
                                    <div className="form-actions contact-us-form-submit-div">
                                        <button className="contact-us-form-btn" type="submit">
                                            שלח הודעה
                                        </button>
                                    </div>
                                    {returnedMessage && !isSendSucced && (
                                        <p
                                            data-aos="fade-zoom-in"
                                            data-aos-once={true}
                                            data-aos-duration="500"
                                            className="error-msg error-msg-background contact-us-error-msg"
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
        </div>
    );
}
