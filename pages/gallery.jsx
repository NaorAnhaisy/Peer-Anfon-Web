import ImagesGallery from '../components/ImagesGallery/ImagesGallery';

const images = [
    { src: "/images/Doors/LUX/example1.jpg" },
    { src: "/images/Doors/LUX/example2.jpg", strechType: "vStrech" },
    { src: "/images/Doors/LUX/example3.jpg", strechType: "hStrech" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg" },
    { src: "/images/Doors/LUX/example2.jpg", strechType: "vStrech" },
    { src: "/images/Doors/LUX/example3.jpg", strechType: "bigStrech" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg", strechType: "hStrech" },
    { src: "/images/Doors/LUX/example2.jpg" },
    { src: "/images/Doors/LUX/example3.jpg" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg", strechType: "vStrech" },
    { src: "/images/Doors/LUX/example2.jpg" },
    { src: "/images/Doors/LUX/example3.jpg", strechType: "bigStrech" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg", strechType: "hStrech" },
    { src: "/images/Doors/LUX/example2.jpg" },
];

export default function Gallery() {
    return (
        <div className="mt-5 mb-5">
            <div className="push-from-navbar"></div>
            <div className="mb-5 page-title">
                <h1>גלריית תמונות</h1>
                <div className="mt-3 mb-4 separator"></div>
            </div>
            <ImagesGallery images={images} altLabel={"דלתות אוטומטיות"} />
        </div>
    );
}