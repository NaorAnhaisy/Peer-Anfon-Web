/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from './CustomersSlider.module.css';

/**
 * Any time you update this array (add or delete image),
 * update @keyframes scroll inside ./CustomersSlider.module.css
 * to the CUSTOMER_IMAGES array length.
 */
const CUSTOMER_IMAGES = [
    { srcName: "defence_office.jpg", altName: "לקוחות פאר אנפון משרד הביטחון" },
    { srcName: "almog.jpg", altName: "לקוחות פאר אנפון אלמוג כדאי" },
    { srcName: "briga.jpg", altName: "לקוחות פאר אנפון בריגה" },
    { srcName: "bikur_rofe.jpg", altName: "לקוחות פאר אנפון ביקור רופא" },
    { srcName: "zalman_zcharia.jpg", altName: "לקוחות פאר אנפון זלמן זכריה" },
    { srcName: "israel_canada.jpg", altName: "לקוחות פאר אנפון ישראל קנדה" },
    { srcName: "jerusalem_hebrew_university.jpg", altName: "לקוחות פאר אנפון אוניברסיטה עברית בירושלים" },
    { srcName: "kidder.jpg", altName: "לקוחות פאר אנפון קידר מבנים" },
    { srcName: "tel_aviv_university.jpg", altName: "לקוחות פאר אנפון אוניברסיטת תל אביב" },
    { srcName: "yospetel.jpg", altName: "לקוחות פאר אנפון בית חולים יוספטל" },
    { srcName: "mizrahi.jpg", altName: "לקוחות פאר אנפון מזרחי טפחות" },
    { srcName: "prime_minister.jpg", altName: "לקוחות פאר אנפון משרד ראש הממשלה" },
    { srcName: "tidhar.jpg", altName: "לקוחות פאר אנפון תידהר" },
    { srcName: "azrieli.jpg", altName: "לקוחות פאר אנפון קניוני עזריאלי" },
    { srcName: "bar_ilan_university.jpg", altName: "לקוחות פאר אנפון אוניברסיטת בר אילן" },
    { srcName: "meuhedet.jpg", altName: "לקוחות פאר אנפון מאוחדת" },
    { srcName: "schneider.jpg", altName: "לקוחות פאר אנפון בית החולים שניידר" },
    { srcName: "police.jpg", altName: "לקוחות פאר אנפון משטרת ישראל" },
    { srcName: "ashkelonCollge.jpg", altName: "לקוחות פאר אנפון המכללה האקדמית אשקלון" },
    { srcName: "elal.jpg", altName: "לקוחות פאר אנפון אל על" },
    { srcName: "refael.jpg", altName: "לקוחות פאר אנפון רפאל" },
    { srcName: "bsr.webp", altName: "לקוחות פאר אנפון ב.ס.ר" },
    { srcName: "ortTLV.jpg", altName: "לקוחות פאר אנפון אורט סינגלובסקי תל אביב" },
];

export default function CustomersSlider() {

    return (
        <div className={styles.sliderBody}>
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    {CUSTOMER_IMAGES?.map((image, i) => {
                        return <div key={i} className={styles.slide}
                            style={{ width: "250px", height: "100px" }}>
                            <img className="undragablle-image"
                            src={`/images/OurCustomers/new/${image.srcName}`}
                            alt={image.altName} />
                        </div>
                    })}
                    {CUSTOMER_IMAGES?.map((image, i) => {
                        return <div key={i + CUSTOMER_IMAGES.length} className={styles.slide}
                            style={{ width: "250px", height: "100px" }}>
                            <img className="undragablle-image"
                            src={`/images/OurCustomers/new/${image.srcName}`}
                            alt={image.altName} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}