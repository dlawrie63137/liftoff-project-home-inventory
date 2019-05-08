import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import './App.css';

import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Contact from './pages/Contact.jsx';


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
