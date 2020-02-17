import React from 'react';
import PageHeader from './PageHeader';
import data from './data'
import PageContent from './PageContent';
import Footer from './Footer'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SelectedProject from './SelectedProject'



function App() {
  return (
    <Router>
    <div className="App">
      <PageHeader />
      <Route path='/' component={PageContent} />
      <Route exact path='/:index' component={SelectedProject}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
