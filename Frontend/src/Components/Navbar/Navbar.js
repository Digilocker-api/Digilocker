import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

        return(
            <>
            <nav className="navbar navbar-light navbar-expand-sm">
            <Link to="/signin" className="navbar-brand">
                <img style={{height: 60}} alt="digilogo" src={require('../../Images/digiLocker-Small.png')}/>
            </Link>
    
            <button className="navbar-toggler btn-sm" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarNav">
                
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/signin" className="nav-link">
                        Sign in
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link ">
                        Sign up
                    </Link>
                </li>
                </ul>
    
            </div>
            </nav>               
            </>
        );
}

export default Navbar;