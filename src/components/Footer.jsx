const Footer = () => {
    return (
        <>
            <footer className="py-0 py-md-3">
                <div className="container-list-film">
                    <div className="row text-white text-center d-none d-md-flex">
                        <div className="col">
                            <h3 className="fw-light">CONTATTI</h3>
                            <ul>
                                <li><a href="#">Faq e domande frequenti</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="fw-light">LIGHT CINEMA</h3>
                            <ul>
                                <li><a href="#">Chi siamo</a></li>
                                <li><a href="#">Scopri di più</a></li>
                                <li><a href="#">Regole</a></li>
                                <li><a href="#">Condizioni</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="fw-light">SOCIAL</h3>
                            <ul className="d-flex flex-column gap-2 justify-content-center align-items-center">
                                <li>
                                    <a href="#">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="fa-brands fa-facebook"></i>
                                            <span>Facebook</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="fa-brands fa-facebook"></i>
                                            <span>Facebook</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="fa-brands fa-facebook"></i>
                                            <span>Facebook</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="fa-brands fa-facebook"></i>
                                            <span>Facebook</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="fw-light">INFO</h3>
                            <ul>
                                <li><a href="#">Scopri di più</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-block d-md-none border-top border-secondary border-bottom">
                    <div className="accordion accordion-flush  bg-black" id="accordionFlushExample">
                        <div className="accordion-item bg-black">
                            <h2 className="accordion-header bg-black">
                                <button className="accordion-button collapsed bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h3 className="text-white">Contatti</h3>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse bg-black" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li><a href="#">Faq e domande frequenti</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header bg-black">
                                <button className="accordion-button collapsed bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <h3 className="text-white">LIGHT CINEMA</h3>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="bg-black accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li><a href="#">Chi siamo</a></li>
                                        <li><a href="#">Scopri di più</a></li>
                                        <li><a href="#">Regole</a></li>
                                        <li><a href="#">Condizioni</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item bg-black">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h3 className="text-white">Social</h3>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul className="d-flex flex-column gap-2 justify-content-center">
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-brands fa-facebook"></i>
                                                    <span>Facebook</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-brands fa-instagram"></i>
                                                    <span>Instagram</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-envelope"></i>
                                                    <span>Gmail</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-user"></i>
                                                    <span>Registarti</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center bg-black text-white">THE LIGHT CINEMA</h4>
                </div>
            </footer>
        </>
    );
}

export { Footer }