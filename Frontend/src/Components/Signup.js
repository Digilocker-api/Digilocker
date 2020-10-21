import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './signcard.css';
import Validate from './ValidateInfo';

const Signup = () => {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [pin, setPin] = useState('')
    const [email, setEmail] = useState('')
    const [aadhar, setAadhar] = useState('')
/*
    useEffect(

        () => {
            fetch('/signup').then( response => response.json().then(data => {console.log(data)}) )
        }

    ) 
    async function postData() {
        const body ={
            Username : name,
            Password : pin,
        }
        const response = await fetch('/signup', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: body,
        }   
        )
        if(response.ok) console.log("Response worked!!")
        else console.log("Response didnt work!!")
    }
*/
    const submitForm = e => {
       
        console.log("Current state is : " + JSON.stringify({name, date, month, year, phone, 
                                                      pin, email, aadhar}))            
        
        if(!(errors.name || errors.phone || errors.email || errors.aadhar || errors.pin)) {
            setName('')
            setDate('')
            setMonth('')
            setYear('')
            setGender('')
            setPhone('')
            setPin('')
            setEmail('')
            setAadhar('')
            console.log("Form successfully submitted.")

            //postData();
            const axios = require('axios')
 
            try{
                axios.post('/signup', {
                    Username: email,
                    Name: name,
                    Password: pin,
                    date : date,
                    month: month,
                    year: year,
                    gender: gender,
                    phone: phone,
                    aadhar: aadhar,
                })
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    const msg = response.data["Message"]
                    alert(msg)
                })

            }

            catch(e) {
                alert("Axios error!" + e)
            }
               
            }

        //e.preventDefualt()
    }

    const values = {
        name: name,
        date : date,
        month: month,
        year: year,
        gender: gender,
        phone: phone,
        pin: pin,
        email: email,
        aadhar: aadhar,
    }   

    const errors = Validate(values)

    var dates = [];
        for (let i = 1; i <= 31; i++) {
            dates.push(i)
        }
    const dateList = dates.map((x) => {return(<option key={x}>{x}</option>)});

    var years = [];
        for (let i = 1930; i <= 2020; i++) {
            years.push(i)
        }
    const yearList = years.map((x) => {return(<option key={x}>{x}</option>)});

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
                        onChange={ e => setName(e.target.value) } value={name}/>
                        <small id="Fullname" class="form-text text-muted">
                            Please enter your full name as per Aadhar
                        </small>
                        { 
                            errors.name &&
                            <small id="nameErr" class="form-text text-danger">
                                {errors.name}
                            </small>  
                        }
                    </div>
                    <div className="form-group">
                        <label for="date">Date of Birth</label>
                        <div className="form-row" id="DOB">
                            <div className="form-group col-sm-3">
                            <select id="date" className="form-control" onChange={ e => setDate(e.target.value) }
                            value={date}>
                                <option selected>Date</option>
                                    {dateList}
                            </select>
                            </div>
                            <div className="form-group col-sm-4">
                                <select id="months" className="form-control" 
                                onChange={ e => setMonth(e.target.value) } value={month}>
                                    <option selected>Month</option>
                                    <option value="January">January</option>
                                    <option value="Febuary">Febuary</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-5">
                            <select id="year" className="form-control" onChange={ e => setYear(e.target.value) }
                            value={year}>
                                <option selected>Year</option>
                                    {yearList}
                            </select>
                            </div>
                        </div>
                        <small id="DOB" class="form-text text-muted">
                                Please enter your date of birth as per Aadhar
                        </small>
                    </div>
                    <div className="form-group">
                        <select id="gender" className="form-control" onChange={ e => setGender(e.target.value) }
                        value={gender}>
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
                        onChange={ e => setPhone(e.target.value) } value={phone}/>
                    </div>
                    <small id="mob" class="form-text text-muted">
                        We will use this mobile for future communications
                    </small>
                    { 
                        errors.phone &&
                        <small id="phoneErr" class="form-text text-danger">
                            {errors.phone}
                        </small>  
                    }
                    </div>    

                    <div className="form-group">
                        <input type="password" placeholder="Set 6-digit security PIN" className="form-control"
                        onChange={ e => setPin(e.target.value) } value={pin}/>
                        <small id="Fullname" class="form-text text-muted">
                            6 digit PIN provides extra security to your account with two factor authentication
                        </small>
                        { 
                            errors.pin &&
                            <small id="pinErr" class="form-text text-danger">
                                {errors.pin}
                            </small>  
                        }
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" placeholder="E-mail ID" className="form-control"
                        required onChange={ e => setEmail(e.target.value) } value={email}/>
                        <small id="Fullname" class="form-text text-muted">
                            We will use this Email for future communications
                        </small>
                        { 
                            errors.email &&
                            <small id="emailErr" class="form-text text-danger">
                                {errors.email}
                            </small>  
                        }
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                        <input type="text" placeholder="Aadhar number" className="form-control"
                        onChange={ e => setAadhar(e.target.value) } value={aadhar}/>
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
                        { 
                            errors.aadhar &&
                            <small id="aadharErr" class="form-text text-danger">
                                {errors.aadhar}
                            </small>  
                        }
                    </div>
                </form>
                </div>
                <div className="text-center">
                <button className="btn btn-primary" type="submit" id="submit" value="submit"
                    onClick={submitForm}>
                    Signup
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