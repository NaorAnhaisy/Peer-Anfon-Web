import { useCallback, useEffect, useMemo } from 'react';
import styles from './ColorsTemplate.module.css';
import AOS from 'aos';
import Image from 'next/image'

export default function ColorsTemplate() {
    useEffect(() => {
        AOS.init();
    }, []);

    const imagesColorsSrcArr = useMemo(() => {
        return ["https://images.prismic.io/deuren/1072c386-6560-452a-8b81-af346e131ba2_Deuren-Internal-Door-Swatch-Stiffkey-Blue.jpg",
            "https://images.prismic.io/deuren/b152932f-1ec0-4366-8650-600b5f90b1ab_Deuren-Internal-Door-Swatch-Pointing.jpg",
            "https://images.prismic.io/deuren/86a79200-0c0d-4177-a4ad-4247c61bfa2c_Deuren-Front-Door-Swatch-Patina-Bronze.jpg",
            "https://images.prismic.io/deuren/4ad2a837-f226-4e80-b3c0-c8188a2a895b_Deuren-Internal-Door-Swatch-Railings.jpg",
            "https://images.prismic.io/deuren/efaba480-a07b-4755-bb63-4e44aae41365_Deuren-Internal-Door-Swatch-Teak.jpg",
            "https://images.prismic.io/deuren/0cc20ad2-037a-46f3-a2bd-533f1e3092c5_Deuren-Internal-Door-Swatch-RAL-9001.jpg",
            "https://images.prismic.io/deuren/4fba38dc-fc8b-4876-824f-29ca07860bb3_Deuren-Internal-Door-Swatch-Grey-Oak.jpg",
            "https://images.prismic.io/deuren/fbecf8b3-a562-42b8-866e-7d7839787fff_Deuren-Front-Door-Swatch-Black-Oak.jpg",
            "https://images.prismic.io/deuren/cd875071-5ab0-4324-ad2a-1f9baea41e29_Deuren-Internal-Door-Swatch-Black-Ash.jpg",
            "https://images.prismic.io/deuren/86a79200-0c0d-4177-a4ad-4247c61bfa2c_Deuren-Front-Door-Swatch-Patina-Bronze.jpg",
            "https://images.prismic.io/deuren/371bcfa3-f761-426d-8d18-c8bd963fa544_Deuren-Internal-Door-Swatch-Etimoe.jpg",
            "https://images.prismic.io/deuren/7adda5fc-345d-4407-8da7-3ab85d03d59d_Deuren-Internal-Door-Swatch-Satin-Walnut.jpg",
            "https://images.prismic.io/deuren/b6aefc2b-4a02-4521-9bdc-fb5fc215581b_Deuren-Internal-Door-Swatch-Cornforth-White.jpg",
            "https://images.prismic.io/deuren/2dc83f1e-328f-4f08-9372-83005eecfcc4_Deuren-Front-Door-Swatch-Dark-Oak.jpg",
            "https://images.prismic.io/deuren/076ab046-3c4e-4b19-bdb7-62d88d2eab2b_Deuren-Internal-Door-Swatch-Downpipe.jpg",
            "https://images.prismic.io/deuren/a98a3683-2fbc-4a1d-830e-c18f2c79404f_Deuren-Front-Door-Swatch-Natural-Oak.jpg",
            "https://images.prismic.io/deuren/f22e5fb0-762e-42ba-94d3-0c69c6449b73_Deuren-Front-Door-Swatch-Natural-Oak.jpg",
            "https://images.prismic.io/deuren/19d3a161-bd9f-4cc5-ab1f-3e8d789e5256_Deuren-Internal-Door-Swatch-Walnut.jpg"
        ]
    }, []);

    const getColorsTemplate = useCallback(() => {
        let elementsArr = [];

        for (let i = 0; i < 9; i++)
            elementsArr.push(
                <div key={i} className={styles.colorTemplateImgDiv}>
                    <div className={styles.CrossfadeImage}>
                        <Image layout="responsive" width={1} height={1} alt="" src={imagesColorsSrcArr[i]} className={styles.colorsTemplateColorTop} />
                    </div>
                </div>
            )

        return <div className={`${styles.elementsTemplate} ${styles.smGap_6}`}>
            {elementsArr}
        </div>
    }, [imagesColorsSrcArr])


    useEffect(() => {
        // const interval = setInterval(() => {
            getColorsTemplate();
        // }, 4000);
        // return () => clearInterval(interval);
    }, [getColorsTemplate]);

    return (
        <>
            <div className={styles.orderFirst}>
                {getColorsTemplate()}
            </div>
        </>
    )
}