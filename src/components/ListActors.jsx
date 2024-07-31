import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const ListActors = () => {
    // setting for carousel 
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1200,

                }
            }
        ]
    };

    // migliori attori 
    const [bestActor, setBestActor] = useState([]);

    useEffect(() => {

        // chiamata per i migliori attori
        const apiUrl = "61236f81a13cbd35b3c1b41ea670e718";
        fetch((`https://api.themoviedb.org/3/person/popular?api_key=${apiUrl}&language=en-US&page=1`))
            .then((response) => response.json())
            .then(data => setBestActor(data.results))
    }, [])

    return (
        <>
            <section className="bg-black py-4">
                <div className="container-list-film pb-5 pt-5">
                    <h2 className="text-center pb-3 border-2 border-bottom border-warning">Attori</h2>
                    <Slider {...settings}>
                        {bestActor
                            .map((actor) => (
                                <div key={actor.id} className="col-12 col-md-3 mt-4"style={{  }} >
                                    <div className="d-flex justify-content-center">
                                        <div >
                                            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                                alt="" style={{ height: "300px", objectFit: "cover" }} />
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <h5 className="text-white text-center">{actor.name}</h5>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}
export { ListActors }