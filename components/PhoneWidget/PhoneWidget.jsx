import styles from './PhoneWidget.module.css';

export default function PhoneWidget() {
    return (
        <div className={styles.phoneWidget}>
            <a href="tel:0723712701">
                <div className={styles.wrapper}>
                    <div className={styles.ring}>
                        <div className={`${styles.coccocAloPhone} ${styles.coccocAloGreen} ${styles.coccocAloShow}`}>
                            <div className={styles.coccocAloPhCircle}></div>
                            <div className={styles.coccocAloPhCircleFill}></div>
                            <div className={styles.coccocAloPhImgCircle}></div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}