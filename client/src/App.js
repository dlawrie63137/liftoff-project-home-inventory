import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import './App.css';

import Home from './pages/Home.jsx';
import Navbar from './components/jsx/navbar.jsx';
import Footer from './components/jsx/footer.jsx';
import LoginForm from './components/jsx/loginForm.jsx';
import SignupForm from './components/jsx/signupForm.jsx';
import Contact from './pages/Contact.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
