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
    { name: "ארז ועד", city: "חולון", message: "חברים יקרים, אני ממליץ בחום רב על הדלתות החשמליות של פאר אנפון ממספר סיבות: </br> <ul> <li> לירון הוא מקצוען בעל יחס אישי, איש נעים, קשוב ותמיד זמין לעזור. </li> <li> הדלתות הן ברמה אחרת. </li> <li> עבודת ההתקנה והפינישים פשוט מעולים. </li> <li> דבר אחרון והוא הכי חשוב עבורי זה שירות. והשירות שלו ברמה גבוהה מאוד. </li> </ul> היום קשה למצוא בעלי מקצוע ששומרים על הלקוח. </br> אז מה שנשאר לי זה לומר תודה רבה, כן ירבו אנשים ובעלי מקצוע כמוך. וכמובן שאני ממליץ בחום רב. </br> תודה." },
    { name: "שלום יצחקי", city: "חולון", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "תל אביב", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
    { name: "שלום יצחקי", city: "חולון", message: "כל מיני דברים והמלצות על פאר אנפון... עוד כמה דברים... ועוד..." },
];

export default function CardsSlider() {

    function createCard(cardInfo, index) {
        return <div key={index} className={styles.recommandCard}>
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
            <div className={`mt-5 ${styles.cardContent}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#606060" }}>
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className={`mt-3 ${styles.message}`} dangerouslySetInnerHTML={{ __html: cardInfo.message }}></p>
            </div>
        </div>
    };

    function createCards() {
        return cards.map((card, index) => createCard(card, index));
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