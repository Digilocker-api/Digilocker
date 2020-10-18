import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './signcard.css';

const Signin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function postData() {

        console.log("Form data : " + JSON.stringify({username, password}))

        /*
        fetch('/signin', {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-Type': 'text/plain', },
            body: {
                Username: username,
                Password: password,
            },
        }).then(result => console.log('success====:', result))
            .catch(error => console.log('error============:', error));
        */

        
        const axios = require('axios')

        try {
            axios.post('/signin', {
                Username: username,
                Password: password,
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

    return(
        <>
        <div className="d-flex justify-content-center">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Sign in to your account</h5>
                <div className="form-wrap">
                <form>
                    <label htmlFor='text'>Username</label>
                    <input type="text" id = "username" className="form-control"
                    onChange={ e => setUsername(e.target.value)}/>
                    <label htmlFor='password'>PIN</label>
                    <input type="password" id="pin" className="form-control"
                    onChange={ e => setPassword(e.target.value)}/>
                </form>
                </div>
                <div className="text-center">
                <button className="btn btn-primary" onClick={postData}> Sign in</button>
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