import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

import Home from './pages/Home.jsx';
import Navbar from './components/jsx/navbar.jsx';
import Footer from './components/jsx/footer.jsx';
import LoginForm from './components/jsx/loginForm.jsx';
import SignupForm from './components/jsx/signupForm.jsx';
import Contact from './pages/Contact.jsx';


class App extends Component {
  render() {
      return (
        <Provider store={store}>
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
        </Provider>
      );
    }
}


export default App;
