/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from './CustomersSlider.module.css';

const CUSTOMER_IMAGES = [
    // { srcName: "agodathastodentim.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "avisrur.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "memshala1.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "levinstein.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "leumi.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "kfar-saba.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "kaplan.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "gindi.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "electra.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "discount.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "defence.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "benleumi.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "bar-ilan.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "bank_hapoalim_logo.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "mizrahi-and-sons.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "mevaker.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "mizrahi.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "netanya.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "poaley-agudat-israel.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "rakevet.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "rambam.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "Tel-Aviv-Jaffa_logo216.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "ashtrum.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "tel-aviv-uni.jpg", altName: "לקוחות פאר אנפון" },
    // { srcName: "zalman.jpg", altName: "לקוחות פאר אנפון" },


    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png", altName: "לקוחות פאר אנפון" },
    { srcName: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png", altName: "לקוחות פאר אנפון" },

    // { srcName: "defence_office.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "tidhar.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "azrieli.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "bar_ilan_university.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "defence_office.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "tidhar.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "azrieli.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "bar_ilan_university.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "defence_office.png", altName: "לקוחות פאר אנפון" },


    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
    // { srcName: "6.png", altName: "לקוחות פאר אנפון" },
]

export default function CustomersSlider() {
    return (
        <div className={styles.sliderBody}>
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    {CUSTOMER_IMAGES?.map((image, i) => {
                        return <div key={i} className={styles.slide}
                            style={{ position: "relative", width: "250px", height: "100px" }}>
                            <img className="undragablle-image"
                            // src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                            // src={`/images/OurCustomers/${image.srcName}`}
                            src={image.srcName}
                            // src={`/images/OurCustomers/new/${image.srcName}`}
                            alt={image.altName} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}