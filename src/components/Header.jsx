import { useRef, useState } from "react";
import { ListFilm } from "./ListFilm";

const Header = () => {
    const inputValueRef = useRef(null);
    const changeInput = (valueInput) => {

    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg  text-secondary py-2 py-md-3">
                    <div className="container-list-film d-flex flex-wrap align-items-center justify-content-between">
                        <a href="#" className="d-flex justify-content-center flex-grow-1 flex-lg-grow-0">
                            <img src="/images/logo.webp" alt="" />
                        </a>

                        <button className="navbar-toggler bg-dark text-warning order-md-3 border border-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <div className="text-white">
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end order-md-3" id="navbarNavDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contatti</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    );
}

export { Header }
