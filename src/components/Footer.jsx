const Footer = () => {
    return (
        <>
            <footer className="bg-dark py-3">
                <div className="container-list-film">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h3 className="text-white">Info</h3>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <h5> Scopri di più</h5>
                                        </button>
                                    </h3>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <h5>Lavora con noi</h5>
                                        </button>
                                    </h3>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <h5>Contatti</h5>
                                        </button>
                                    </h3>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-4 mt-md-0">
                            <div className="d-flex flex-column flex-shrink-0 align-items-end">
                                <h4 className="text-white">Social</h4>
                                <div className="d-flex gap-3 mb-md-5">
                                <i className="fa-brands fa-instagram text-white fs-2"></i>
                                <i className="fa-brands fa-youtube text-white fs-2"></i>
                                <i className="fa-brands fa-facebook text-white fs-2"></i>
                                </div>
                                <small className="text-warning mt-md-5 fs-6 text-end mt-2">contattaci a questo indirizzo <span className="text-info btn border-0">cinemaNuovo@gmail.com</span></small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export { Footer }