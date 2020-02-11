import React from 'react';
import './App.css';

function Heading(props) { // Props = properties 
    return (
      <header className = "App-header">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </header>)
  }

  export default Heading;