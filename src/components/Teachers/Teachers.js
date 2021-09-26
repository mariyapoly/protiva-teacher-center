import React from 'react';
import './Teachers.css'

const Teachers = (props) => {
    const { handleAddToCart, teacher } = props || {};
    const { name, age, img, gender, role, salary } = teacher || {};

    return (
        <div className="col-md-4">
            <div className="single-teacher">
                <div className="teacher-thumb text-center">
                    <img src={img} alt="teacher-img" />
                </div>
                <p><span>name: </span>{name}</p>
                <p><span>role: </span>{role}</p>
                <p><span>age: </span>{age}</p>
                <p><span>gender: </span>{gender}</p>
                <p><span>salary: </span> $ {salary}</p>
                <button onClick={() => handleAddToCart(teacher)} className="cart-button"> <i className="fas fa-shopping-cart"></i> add to cart</button>
                <div className="social-icon">
                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Teachers;