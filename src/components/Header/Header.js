import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark text-light">
         <div className="container d-block text-center">
             <article className="title">
             <h1>Make a Tech Team For Future</h1>
             </article>
             <article className="description">
                <p>we Can Do, You can select us from our panel</p>
             </article>
             <div className="total-budget">
            <h2>Total Budget : 100 Million</h2>
        </div>
        </div>
        
        </nav>
        </div>
    );
};

export default Header;