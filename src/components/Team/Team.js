import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './Team.css'

const Team = () => {
    const [members,setMembers] = useState([])
    const [cart, setCart] = useState([])

    // main data load useEffect
    useEffect(()=>{
        fetch('./profile.JSON')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])

    // add event on button
    const handleAddToCart = (member) =>{
        const newCart = [...cart,member]
        setCart(newCart)
    }


    return (
        <div className="team-container">
            <div className="member-container">
                {
                    members.map(member => <Member
                    key={member.key}
                    member = {member}
                    handleAddToCart = {handleAddToCart}
                    ></Member>)
                }
            </div>
            <div className="cart-container mt-4 mx-5">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;