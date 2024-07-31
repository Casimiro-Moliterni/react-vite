const Review = ({name,lastname,email,comments}) => {
    return (
        <>
            <div className="bg-secondary text-white" >
                <div className="card-body p-2">
                    <h5 className="card-title fs-4"><strong>{name} {lastname}</strong></h5>
                    <h6 className="card-subtitle mb-2 ">{email}</h6>
                    <p className="card-text">{comments}</p>
                </div>
            </div>
        </>
    );
}

export { Review }