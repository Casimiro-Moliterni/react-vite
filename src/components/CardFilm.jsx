import { useEffect, useState } from "react";
import { CountClick } from "./CounterClick";

const CardFilm = ({ title, img, original_title, vote_count, id, item, handleClick, overview, release_date, vote_average }) => {
    const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
    const [dislike_count] = useState(getRandomNumber());

    useEffect(() => {
        // Logica da eseguire al montaggio del componente o al cambiamento di item
    }, [item]);

    // Calcola la valutazione in stelle (round up)
    const voteAverage = Math.round(vote_average / 2);

    // Crea un array di 5 stelle
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
        <div className="mx-0 mx-md-2 position-relative ">
            {/* card  */}
            <div className={`card border-2 border-warning  ${item === id ? "rotate" : ""}`} id={id}>
                {/* card front  */}
                <div className="card-front bg-dark">
                    <img
                        src={`https://image.tmdb.org/t/p/w342/${img}`}
                        className="card-img-top"
                        alt=""
                        style={{
                            height: "550px",
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                    />
                    {/* testo card  */}
                    <div className="text-white d-flex flex-column p-2 pb-3" style={{ minHeight: "150px" }}>
                        <h3 className="card-title fw-light fs-4 flex-grow-1">{title}</h3>
                        <div className="d-flex justify-content-around" style={{ height: "50px" }}>
                            <CountClick vote_count={vote_count} dislike_count={dislike_count} />
                            <button onClick={() => handleClick(id)} className="btn fw-medium  bg-warning">info</button>
                        </div>
                    </div>
                </div>
                {/* card back  */}
                <div className="text-white card-back bg-dark">
                    <div className="p-2 h-100 d-flex flex-column">
                        <h3>Descrizione</h3>
                        <p className="fs-5">Titolo originale: <span className="fs-4 text-warning">{original_title}</span></p>
                        <p className="fs-5">Titolo: <span className="fs-4 text-warning">{title}</span></p>
                        {overview ? (
                            <p className="fs-5">Descrizione: <span className="fs-5 text-warning paragraph">{overview}</span></p>
                        ) : (
                            <p className="fs-5">Descrizione: <span className="fs-4 text-warning ">...</span></p>
                        )}
                        <div className="fs-5">Data di uscita: <span className="fs-4 text-warning ">{release_date}</span></div>
                        <div className="fs-5 flex-grow-1">Voto:
                            <span className="fs-4 text-warning ">
                                {stars.map(n => (
                                    <i
                                        key={n}
                                        className={`fa-star ${n <= voteAverage ? 'fa-solid' : 'fa-regular'}`}
                                    ></i>
                                ))}
                            </span>
                        </div>
                        {/* btn  */}
                        <button onClick={() => handleClick(id)} className="btn fw-medium  bg-warning mb-1 mx-5">
                        <i className="fa-regular fa-hand-point-left fs-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CardFilm };
