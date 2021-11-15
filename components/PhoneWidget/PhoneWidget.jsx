import styles from './PhoneWidget.module.css';

export default function PhoneWidget() {
    return (
        <div className={styles.phoneWidget}>
            <div className={styles.wrapper}>
                <div className={styles.ring}>
                    <div className={`${styles.coccocAloPhone} ${styles.coccocAloGreen} ${styles.coccocAloShow}`}>
                        <div className={styles.coccocAloPhCircle}></div>
                        <a href="tel:0723712701">
                            <div className={styles.coccocAloPhCircleFill}></div>
                        </a>
                        <div className={styles.coccocAloPhImgCircle}>
                            <i className="fas fa-phone"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}