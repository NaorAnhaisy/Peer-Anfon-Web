/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './CardsSlider.module.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1311 },
        items: 4,
        slidesToSlide: 2 // optional, default to 1.
    },
    leptop: {
        breakpoint: { max: 1311, min: 1019 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1019, min: 682 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 682, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const cards = [
    { name: "מוטי", city: "באר שבע", email: "fasf@fsaf.fsaf", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", email: "fasf@fsaf.fsaf", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "תל אביב", email: "fasf@fsaf.fsaf", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", email: "fasf@fsaf.fsaf", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", email: "fasf@fsaf.fsaf", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", email: "fasf@fsaf.fsaf", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", email: "fasf@fsaf.fsaf", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", email: "fasf@fsaf.fsaf", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
];

export default function CardsSlider() {

    function createCard(cardInfo) {
        return <div className={styles.recommandCard}>
            <h3>{cardInfo.name}</h3>
            <div className={styles.subTitle}>
                <span>{cardInfo.city}</span>
                <div>
                    <span className={`fa fa-star ${styles.starChecked}`}></span>
                    <span className={`fa fa-star ${styles.starChecked}`}></span>
                    <span className={`fa fa-star ${styles.starChecked}`}></span>
                    <span className={`fa fa-star ${styles.starChecked}`}></span>
                    <span className={`fa fa-star ${styles.starChecked}`}></span>
                </div>
            </div>
            <div className="mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#606060" }}>
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="mt-3" style={{ fontWeight: "bold" }}>
                    {cardInfo.message}
                </p>
            </div>
        </div>
    };

    function createCards() {
        return cards.map(card => createCard(card));
    }

    return (
        <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            showDots={false}
            // autoPlay={true}
            // autoPlaySpeed={7000}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["mobile"]}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {createCards()}
        </Carousel>
    )
};