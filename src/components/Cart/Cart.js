import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    console.log(props)
    const {cart} = props;
    return (
        <div>
            <h2>Booking Summary</h2>
            <h4>Total Member : {cart.length} <FontAwesomeIcon icon={faShoppingCart} /></h4>
        </div>
    );
};

export default Cart;