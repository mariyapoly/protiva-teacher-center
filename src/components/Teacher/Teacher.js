import React from 'react';
import './Teacher.css';

const Teacher = (props) => {
    // destructuring for access property of teacher object
    const { name, img, salary } = props.teacher || {};

    return (
        // teacher cart start
        <div className="teacher-cart d-flex align-items-center">
            <div className="teacher-cart-img">
                <img src={img} alt="teacher-thumb" />
            </div>
            <div className="teacher-cart-des">
                <p>{name}</p>
                <p>$ {salary}</p>
            </div>
        </div>
        // teacher cart end
    );
};

export default Teacher;