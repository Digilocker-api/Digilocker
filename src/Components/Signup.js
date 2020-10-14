import React from 'react';
import { Link } from 'react-router-dom';
import './signcard.css';

const Signup = () => {
    return(
        <>
        <div className="d-flex justify-content-center">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Create a new account</h5>
                <div className="form-wrap">
                <form>
                    <div className="form-group">
                        <input type="text" value="Full name" className="form-control"/>
                        <small id="Fullname" class="form-text text-muted">
                            Please enter your full name as per Aadhar
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="date">Date of Birth</label>
                        <div className="form-row">

                            <div className="form-group col-sm-3">
                                <input type="text" className="form-control" id="date" value="Date"/>
                            </div>
                            <div className="form-group col-sm-4">
                                <input type="text" className="form-control" id="month" value="Month"/>
                            </div>
                            <div className="form-group col-sm-5">
                                <input type="text" className="form-control" id="year" value="Year"/>
                            </div>
                        </div>
                        <small id="DOB" class="form-text text-muted">
                                Please enter your date of birth as per Aadhar
                        </small>
                    </div>
                    <div className="form-group">
                        <select id="gender" className="form-control">
                                <option selected>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                        </select>
                    </div>
                    <div className="form-group form-inline">        
                        <div className="input-group-prepend">
                            <span className="input-group-text">+91</span>
                        </div>
                        <input type="text" className="form-control" id="phone" value="Phone number"/>
                    </div>
                    <small id="mob" class="form-text text-muted">
                        We will use this mobile for future communications
                    </small>
                </form>
                </div>
                <div className="text-center">
                <Link to="/signup" className="btn btn-primary">Sign up</Link>
                </div>
            </div>
            </div>
        </div>
        <div id="text-bottom" className="d-flex justify-content-center">
            <p>Already have an account? <Link to='/signin'> Sign In </Link> </p>
        </div>
        
        </>
    );
}

export default Signup;