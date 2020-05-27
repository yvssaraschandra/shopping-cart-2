import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper teal">
                <div className="container">
                    <Link to="/" className="brand-logo">Clothing Store</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;