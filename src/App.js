import React from 'react';
import Heading from './Heading';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import Footer from './Footer.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
