import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const heroBg = [
        // film in programmazione 
        { id: 1, image: "../public/images/cinema-1.jpg", text: 'Vieni a provare da noi i nostri popcorn a cioccolato' },
        { id: 2, image: "../public/images/cinema-2.jpg", text: 'Vieni a provare le nostre le nostre comodissime poltrone' },
        { id: 3, image: "../public/images/cinema-3.jpg", text: 'Film nuovi ogni settimana' }
    ];
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        cssEase: "linear",
        arrows:false,
        draggable:false
    };

    const imgStyle = {
        height: "500px",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return (
        <div className="slider-container" style={{ backgroundColor: "black" }}>
            <Slider {...settings}>
                {heroBg.map((singleBg) => (
                    <div key={singleBg.id} style={{ backgroundColor: "black" }}>
                        <div style={{ ...imgStyle, backgroundImage: `url(${singleBg.image})` }}>
                            <span className="h-100 d-flex align-items-center justify-content-center text-white text-span px-2 px-md-0">
                                <span className="display-1">{singleBg.text}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export { Hero };
