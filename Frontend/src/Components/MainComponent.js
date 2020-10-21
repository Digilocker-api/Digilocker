import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Signin from './Signin';
import Signup from './Signup';

function Main () {


        const SigninPage = () => {
          return <Signin/>;
        }

        const SignupPage = () => {
          return <Signup/>;
        }
    
        
        return (
          <div>
            <Navbar/>
            <Switch>
              <Route path='/' component={SigninPage} />
              <Route path='/signup' component={SignupPage} />
              <Redirect to='/signup' />
            </Switch>
          </div>
        );
      


}

export default Main;

