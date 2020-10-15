import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './signcard.css';

const Signup = () => {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [phone, setPhone] = useState('')
    const [pin, setPin] = useState('')
    const [email, setEmail] = useState('')
    const [aadhar, setAadhar] = useState('')
    
    const submitForm = e => {
        alert("Current state is : " + JSON.stringify({name, date, month, year, phone, 
                                                      pin, email, aadhar}))
        console.log("Current state is : " + JSON.stringify({name, date, month, year, phone, 
                                                      pin, email, aadhar}))
          
        e.preventDefualt()
    }

    return(
        <>
        <div className="d-flex justify-content-center">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Create a new account</h5>
                <div className="form-wrap">
                <form onSubmit={submitForm}>
                    <div className="form-group">
                        <input type="text" placeholder="Full name" className="form-control"
                        onChange={ e => setName(e.target.value) }/>
                        <small id="Fullname" class="form-text text-muted">
                            Please enter your full name as per Aadhar
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="date">Date of Birth</label>
                        <div className="form-row" id="DOB">
                            <div className="form-group col-sm-3">
                                <input type="text" className="form-control" id="date" placeholder="Date"
                                onChange={ e => setDate(e.target.value) }/>
                            </div>
                            <div className="form-group col-sm-4">
                                <input type="text" className="form-control" id="month" placeholder="Month"
                                onChange={ e => setMonth(e.target.value) }/>
                            </div>
                            <div className="form-group col-sm-5">
                                <input type="text" className="form-control" id="year" placeholder="Year"
                                onChange={ e => setYear(e.target.value) }/>
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

                    <div className="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">+91</span>
                        </div>
                        <input type="text" class="form-control" id="validationCustomUsername"
                        placeholder="Phone" aria-describedby="inputGroupPrepend" required
                        onChange={ e => setPhone(e.target.value) }/>
                    </div>
                    <small id="mob" class="form-text text-muted">
                        We will use this mobile for future communications
                    </small>
                    </div>    

                    <div className="form-group">
                        <input type="password" placeholder="Set 6-digit security PIN" className="form-control"
                        onChange={ e => setPin(e.target.value) }/>
                        <small id="Fullname" class="form-text text-muted">
                            6 digit PIN provides extra security to your account with two factor authentication
                        </small>
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" placeholder="E-mail ID" className="form-control"
                        required onChange={ e => setEmail(e.target.value) }/>
                        <small id="Fullname" class="form-text text-muted">
                            We will use this Email for future communications
                        </small>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                        <input type="text" placeholder="Aadhar number" className="form-control"
                        onChange={ e => setAadhar(e.target.value) }/>
                        {/*<div class="input-group-append">
                            <span class="input-group-text">
                                <image style={{height: 20}} alt="aadharlogo"
                                 src={require('../Images/Aadhaar-Logo-PNG.jpg')}/>
                            </span>
                        </div>*/}
                        </div>
                        <small id="Fullname" class="form-text text-muted">
                            Digilocker uses Aadhar to verify identity of the user and also to enable authentic
                            document access
                        </small>
                    </div>
                </form>
                </div>
                <div className="text-center">
                <button className="btn btn-primary" type="submit" id="submit" value="submit">
                    Button
                </button>
                {/*<Link to="/signup" className="btn btn-primary" type="submit">Sign up</Link>*/}
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