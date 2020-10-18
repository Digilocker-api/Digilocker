import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Signin from './Signin';
import Signup from './Signup';

class Main extends Component {

    render() {

        const SigninPage = () => {
          return <Signin/>;
        };

        const SignupPage = () => {
          return <Signup/>;
        };
    
        
        return (
          <div>
            <Navbar/>
            <Switch>
              <Route path='/signin' component={SigninPage} />
              <Route path='/signup' component={SignupPage} />
              <Redirect to='/signin' />
            </Switch>
          </div>
        );
      }


}

export default Main;

