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
                    <div className="container-list-film d-flex flex-wrap flex-md-nowrap align-items-center">
                        <a href="#" className="d-flex justify-content-center flex-grow-1 flex-md-grow-0">
                            <img src="/images/logo.png" alt="" />
                        </a>
                        <div className="input-group d-block d-md-flex mx-0 mx-md-5 py-2 order-md-0 flex-md-grow-1 gap-2">
                            <div className="d-flex flex-grow-1">
                                <button
                                    className="input-group-text px-3 px-md-4"
                                    id="basic-addon1"
                                    htmlFor="search"
                                    onClick={() => { changeInput(inputValueRef.current.value) }}
                                >
                                    <i className="fa-solid fa-magnifying-glass fs-3 fw-bold"></i>
                                </button>
                                <input
                                    type="text"
                                    id="search"
                                    className="form-control fs-3 fw-semibold"
                                    placeholder="Bad Boys III"
                                    ref={inputValueRef}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="navbar-toggler bg-dark text-warning order-md-3 border border-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                {/* <span className="navbar-toggler-icon"></span> */}
                                <div className="text-white">
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end order-md-3" id="navbarNavDropdown">
                                <ul className="navbar-nav">
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
                    </div>
                </nav>
            </header>
        </>
    );
}

export { Header }
