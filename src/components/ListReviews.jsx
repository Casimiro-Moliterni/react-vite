import { useEffect, useState } from "react";
import { CardForm } from "./CardForm";
import { Review } from "./Review";
import React, { Component } from "react";
import Slider from "react-slick";

const ListReviews = () => {

    const [reviews, setReviews] = useState([]);

    // Carica le recensioni da localStorage quando il componente viene montato
    useEffect(() => {
        const storedReviews = localStorage.getItem("reviews");
        if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
        }
    }, []);

    // Salva le recensioni nel localStorage ogni volta che cambiano
    useEffect(() => {
        if (reviews.length > 0) {
            localStorage.setItem("reviews", JSON.stringify(reviews));
        }
    }, [reviews]);

    const addReview = (review) => {
        setReviews(prevReviews => [...prevReviews, review]);
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: reviews.length < 3 ? reviews.length : 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        arrows: reviews.length <= 3 ? false : true,
        cssEase: "linear",
        autoplay: false,
        autoplaySpeed: reviews.length > 3 ? 1000 : 0,
    };
    return (
        <>
            <section className="bg-black pt-5 pb-5">
                <div className="container-list-film">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-4">
                            <CardForm addReview={addReview}></CardForm>
                        </div>
                        <div className="col-12 col-md-6">
                           { reviews <= 0 ?
                             (<h4 className="fs-3 text-warning"></h4>)
                             :(<h4 className="fs-3 text-warning">Recensioni</h4>)
                           }
                            <Slider {...settings} className="list-film">
                                {reviews
                                    .map((review) => (
                                        <Review
                                            key={review.id}
                                            name={review.name}
                                            lastname={review.lastname}
                                            email={review.email}
                                            comments={review.comments}
                                        >
                                        </Review>
                                    ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export { ListReviews }