import React from 'react';
import './Teacher.css';

const Teacher = (props) => {

    const { name, img, salary } = props.teacher || {};


    return (
        <div className="teacher-cart d-flex align-items-center">
            <div className="teacher-cart-img">
                <img src={img} alt="teacher-thumb" />
            </div>
            <div className="teacher-cart-des">
                <p>{name}</p>
                <p>$ {salary}</p>
            </div>
        </div>
    );
};

export default Teacher;