import React from 'react';
import Heading from './Heading';
import PageHeader from './PageHeader'
import './App.css';


function App() {
  return (
    <div className="App">
      <PageHeader />
      <Heading title="Hello World" subtitle= "Foo Bar"/>
    </div>
  );
}

export default App;
