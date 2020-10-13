import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import $ from 'jquery';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent'; 

function App() {
  return(
    <BrowserRouter>
      <div>
      <Main/>  
      </div>
    </BrowserRouter>
  );
}

export default App;
