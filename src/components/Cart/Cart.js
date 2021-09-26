import React from 'react';
import Teacher from '../Teacher/Teacher';
import './Cart.css';

const Cart = (props) => {
    // destructuring for cart
    const { cart } = props || {};

    // using reduce for newCart data update
    const newCart = cart.reduce((previousValue, currentValue) => previousValue + currentValue.salary, 0);

    return (
        // cart container start
        <div className="cart-container">
            <div className="cart-heading">
                <h3 className="text-center">Teachers Added: {cart.length}</h3>
                <h3 className="text-center">Total Cost: $ {newCart}</h3>
            </div>
            {
                cart.map(teacher => <Teacher
                    key={teacher.id}
                    teacher={teacher}
                >
                </Teacher>
                )
            }
        </div>
        // cart container end
    );
};

export default Cart;