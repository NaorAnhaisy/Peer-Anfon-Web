import Image from 'next/image';
import styles from './CustomersSlider.module.css';

const CUSTOMER_IMAGES = [
    { srcName: "agodathastodentim.jpg", altName: "" },
    { srcName: "avisrur.jpg", altName: "" },
    { srcName: "memshala1.jpg", altName: "" },
    { srcName: "levinstein.jpg", altName: "" },
    { srcName: "leumi.jpg", altName: "" },
    { srcName: "kfar-saba.jpg", altName: "" },
    { srcName: "kaplan.jpg", altName: "" },
    { srcName: "gindi.jpg", altName: "" },
    { srcName: "electra.jpg", altName: "" },
    { srcName: "discount.jpg", altName: "" },
    { srcName: "defence.jpg", altName: "" },
    { srcName: "benleumi.jpg", altName: "" },
    { srcName: "bar-ilan.jpg", altName: "" },
    { srcName: "bank_hapoalim_logo.jpg", altName: "" },
    { srcName: "mizrahi-and-sons.jpg", altName: "" },
    { srcName: "mevaker.jpg", altName: "" },
    { srcName: "mizrahi.jpg", altName: "" },
    { srcName: "netanya.jpg", altName: "" },
    { srcName: "poaley-agudat-israel.jpg", altName: "" },
    { srcName: "rakevet.jpg", altName: "" },
    { srcName: "rambam.jpg", altName: "" },
    { srcName: "Tel-Aviv-Jaffa_logo216.jpg", altName: "" },
    { srcName: "ashtrum.jpg", altName: "" },
    { srcName: "tel-aviv-uni.jpg", altName: "" },
    { srcName: "zalman.jpg", altName: "" },
]

export default function CustomersSlider() {
    return (
        <div className={styles.sliderBody}>
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    {CUSTOMER_IMAGES?.map((image, i) => {
                        return <div key={i} className={styles.slide}
                            style={{ position: "relative", width: "250px", height: "100px" }}>
                            <Image
                                className="undragablle-image"
                                src={`/images/OurCustomers/${image.srcName}`}
                                layout="fill"
                                objectFit="contain" alt={image.altName} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}