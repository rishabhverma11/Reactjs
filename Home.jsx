import React, { Component } from 'react';
import { render } from 'react-dom';
import { Jumbotron } from 'react-bootstrap'
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
import MainContent from './MainContent.js'


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h2 align="center">Welcome to CodeforReact.in</h2>
          <p align="center">This is how to build website using react and Bootstrap</p>
        </Jumbotron>
        <MainContent />
      </div>
      
    )
  }
}
