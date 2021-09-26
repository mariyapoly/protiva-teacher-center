import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teachers from '../Teachers/Teachers';
import './TeachersContainer.css'

const TeachersContainer = () => {

    // declear useState
    const [teachers, setTeachers] = useState([]);
    const [cart, setCart] = useState([])

    // declear useEffect for data load
    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    // declear handleAddToCart function for update cart
    const handleAddToCart = (teacher) => {
        const newTeachers = [...cart, teacher]
        setCart(newTeachers)
    }

    return (
        // teachers-container start
        <div className="teachers-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {
                                teachers.map(teacher => <Teachers
                                    key={teacher.id}
                                    teacher={teacher}
                                    handleAddToCart={handleAddToCart}
                                >
                                </Teachers>)
                            }

                        </div>
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
        // teachers-container end
    );
};

export default TeachersContainer;