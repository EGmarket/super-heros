import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Member.css';

const Member = (props) => {
    // console.log(props)
    const {name, age, img, role, salary, star,country} = props.member;
    console.log(name)
    return (
        <div className="container new-box  row row-cols-1 row-cols-md-2 g-4 mt-2 text-white">
            <div className="card new-card">
                 <img  src={img} className="card-img-top img-size" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Role: {role}</p>
                <p className="card-text">Country: {country}</p>
                <p className="card-text">Age: {age}</p>
                <p className="card-text">Salary: $ {salary}</p>
                <p className="card-text">Raitings:  {star}</p>
                <a className="btn btn-primary"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</a>
            </div>
            </div>
        </div>
    );
};

export default Member;