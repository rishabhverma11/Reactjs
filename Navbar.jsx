import React, { Component } from 'react';
import { render } from 'react-dom';
import About from './About.js'

export default class Navbar extends Component {
  render() {
    return (
      <nav class="bg-custom navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
         
        </ul>
      </nav>
    )
  }
}
