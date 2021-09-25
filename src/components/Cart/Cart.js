import React from 'react';
import Teacher from '../Teacher/Teacher';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props || {};

    return (
        <div className="cart-container">
            <h3 className="text-center">Teachers Cart {cart.length}</h3>
            {
                cart.map(teacher => <Teacher
                    key={teacher.id}
                    teacher={teacher}
                >
                </Teacher>
                )
            }

        </div>
    );
};

export default Cart;