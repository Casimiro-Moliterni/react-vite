import { CardFilm } from "./CardFilm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { CountClick } from "./CounterClick";
// import { useState } from "react";

const ListFilm = () => {
  let settings = {
    infinite: true,
    dots: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          speed: 800,
        }
      }
    ]
  };

  // costante per settare la lista movie 
  const [newMovie, setNewMovie] = useState([]);
  // costante per settare la lista Bestmovie 
  const [bestMovie, setBestMovie] = useState([]);

  useEffect(() => {

    // chiamata per i film al cinema correnti 
    const apiUrl = "61236f81a13cbd35b3c1b41ea670e718";
    fetch((`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiUrl}&language=it-IT&page=1`))
      .then((response) => response.json())
      .then(data => setNewMovie(data.results))


    // chiamata per i film più acclamati dagli utenti 
    fetch((`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiUrl}&language=it-IT&page=1`))
      .then((response) => response.json())
      .then(data => setBestMovie(data.results))

  }, [])

  const [item, setItem] = useState(null);
  const handleClick = (id) => {
    setItem((item) => (item === id ? null : id));
  };

  return (
    <>
      <section className="bg-black pt-4">
        <div className="container-list-film">
          <h2 className="mb-5 border-top border-white mt-5" style={{ width:"30%" }}>Film in programmazione</h2>
          <Slider {...settings}>
            {newMovie
              .map((film) => (
                <CardFilm
                  key={film.id}
                  title={film.title}
                  img={film.poster_path}
                  vote_count={film.vote_count}
                  dislike_count={film.dislike_count}
                  original_title={film.original_title}
                  id={film.id}
                  item={item}
                  handleClick={handleClick}
                  overview={film.overview}
                  release_date={film.release_date}
                  vote_average={film.vote_average}
                >
                </CardFilm>
              ))}
          </Slider>
        </div>

        <div className="container-list-film ">
          <h2 className="mb-4 mt-5">Film acclamati dalla critica</h2>
          <Slider {...settings}>
            {bestMovie
              .map((film) => (
                <CardFilm
                  key={film.id}
                  title={film.title}
                  img={film.poster_path}
                  vote_count={film.vote_count}
                  id={film.id}
                  item={item}
                  handleClick={handleClick}
                  overview={film.overview}
                  release_date={film.release_date}
                  vote_average={film.vote_average}
                >
                </CardFilm>
              ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export { ListFilm }
