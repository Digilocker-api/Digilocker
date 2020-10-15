import React from 'react';
import { Link } from 'react-router-dom';
import './signcard.css';

const Signin = () => {
    return(
        <>
        <div className="d-flex justify-content-center">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Sign in to your account</h5>
                <div className="form-wrap">
                <form>
                    <label htmlFor='text'>Username</label>
                    <input type="text" className="form-control"/>
                    <label htmlFor='password'>Password</label>
                    <input type="password" className="form-control"/>
                </form>
                </div>
                <div className="text-center">
                <Link to="/" className="btn btn-primary">Sign in</Link>
                </div>
            </div>
            </div>
        </div>
        <div id="text-bottom" className="d-flex justify-content-center">
            <p>Don't have an account? <Link to='/signup'> Sign Up </Link> </p>
        </div>
        
        </>
    );
}

export default Signin;