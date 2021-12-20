import { useEffect } from 'react';
import styles from './ColorsTemplate.module.css';
import AOS from 'aos';
import Image from 'next/image'

const imagesColorsSrcArr = [
    { name: "גוון ברונזה", src: "/images/mailboxes/mailbox-colors/Bronza.jpg" },
    { name: "RAL 7016", src: "/images/mailboxes/mailbox-colors/RAL7016.jpg" },
    { name: "גוון זהב", src: "/images/mailboxes/mailbox-colors/Gold.png" },
    { name: "RAL 1013", src: "/images/mailboxes/mailbox-colors/RAL1013.png" },
    { name: "גוון טבעי אנודייז", src: "/images/mailboxes/mailbox-colors/Enodize-Natural.jpg" },
    { name: "RAL 9005", src: "/images/mailboxes/mailbox-colors/RAL9005.jpg" },
    { name: "RAL 7044", src: "/images/mailboxes/mailbox-colors/RAL7044.jpg" },
    { name: "RAL 9006", src: "/images/mailboxes/mailbox-colors/RAL9006.jpg" },
    { name: "RAL 9007", src: "/images/mailboxes/mailbox-colors/RAL9007.jpg" },
];

export default function ColorsTemplate() {
    useEffect(() => {
        AOS.init();
    }, []);

    const getColorsTemplate = () => {
        return imagesColorsSrcArr.map((color, i) => {
            return <div key={i} className={styles.colorTemplateImgDiv}>
                <div className={styles.CrossfadeImage}>
                    <span className={styles.textOverImg}>{color.name}</span>
                    <Image priority={true} layout="responsive" width={1} height={1} alt="צבע" src={color.src} className={`undragablle-image ${styles.colorsTemplateColorTop}`} />
                </div>
            </div>
        });
    }

    return (
        <>
            <div className={styles.orderFirst}
                data-aos="fade-zoom-in"
                data-aos-once={true}
                data-aos-duration="2500">
                <div className={`${styles.elementsTemplate} ${styles.smGap_6}`}>
                    {getColorsTemplate()}
                </div>
            </div>
        </>
    )
}