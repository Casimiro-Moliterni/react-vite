const Footer = () => {
    return (
        <>
            <footer className=" py-3">
                <div className="container-list-film">
                    <div className="row text-white ">
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
                            <ul className="d-flex flex-column gap-2">
                                <li>
                                    <a href="#">
                                        <div className="d-flex align-items-center gap-2">
                                           <i class="fa-brands fa-facebook"></i>
                                           <span>Facebook</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="d-flex align-items-center gap-2">
                                           <i class="fa-brands fa-facebook"></i>
                                           <span>Facebook</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="d-flex align-items-center gap-2">
                                           <i class="fa-brands fa-facebook"></i>
                                           <span>Facebook</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="d-flex align-items-center gap-2">
                                           <i class="fa-brands fa-facebook"></i>
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
            </footer>
        </>
    );
}

export { Footer }