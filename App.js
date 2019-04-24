import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.js'

import Navbar from './Navbar.jsx'


export default class App extends Component{
   render(){
    return(
      <Router>
        <div>
        <Navbar />
          <Route exact path ="/" component ={Home}/>
          <Route exact path ="/about" component ={About}/>
         
        </div>
       </Router> 
    )
  }

}