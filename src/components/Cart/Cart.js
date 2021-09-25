import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    console.log(props)
    const {cart} = props;
    //counting total Salary
    let total = 0;
    for(const member of cart){
        total = total + member.salary
    }
    return (
        <div>
         <div className="details">
            <h2 className="text-cart">Booking Summary</h2>
            <h4> <span className="text-cart"> <FontAwesomeIcon icon={faUserShield} /> Total Member :</span>  {cart.length} </h4>
            <ul>
                {
                    cart.map(member=> <li>{member.name} and salary: ${member.salary}</li>)
                }
            </ul>
            <h4> <span className="text-cart"> Your Grand Total:</span> ${total}</h4>
        </div>
        <div>
            <button class="btn btn-success custom-btn">PAY NOW</button>
        </div>
        </div>
       
       
    );
};

export default Cart;