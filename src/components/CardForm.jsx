import { useState } from "react";


const CardForm = ({ addReview }) => {

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        comments: "",
        id:""
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const inputValue = value;
        setFormData({
            ...formData,
            [name]: inputValue
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = {
            id: Math.random(),
            name: formData.name,
            lastname: formData.lastname,
            email: formData.email,
            comments: formData.comments
        }
        addReview(review)
    }


    return (
        <>
         
            <h3 className="text-warning">Aggiungi una recensione</h3> 
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="name" className="form-label fs-4">Nome</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                        <label htmlFor="lastname" className="form-label fs-4">Cognome</label>
                        <input type="text" className="form-control" id="lastname" name="lastname" value={formData.lastname} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="email" className="form-label fs-4">email</label>
                        <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="comments" className="form-label fs-4">Recensione</label>
                        <textarea className="form-control" id="comments" name="comments" value={formData.comments} onChange={handleInputChange}></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-warning w-100 fs-3 fw-medium ">Crea</button>
            </form>
        </>
    );
}

export { CardForm }