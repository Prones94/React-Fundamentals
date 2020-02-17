import React from 'react';
import './App.css';

function Heading({title, subtitle}) { // Props = properties 
    return (
      <header className = "App-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>)
  }

  export default Heading;