import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';
import './Team.css'

const Team = () => {
    const [members,setMembers] = useState([])

    // main data load useEffect
    useEffect(()=>{
        fetch('./profile.JSON')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])

    return (
        <div className="team-container">
            <div className="member-container">
                {
                    members.map(member => <Member
                    key={member.key}
                    member = {member}
                    
                    ></Member>)
                }
            </div>
            <div className="cart-container mt-4 mx-5">
                <h1>This is your cart</h1>
            </div>
        </div>
    );
};

export default Team;