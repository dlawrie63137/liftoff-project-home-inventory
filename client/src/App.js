import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions"; 
import './App.css';

import { Provider } from "react-redux";
import store from "./store";

import Home from './pages/Home.jsx';
import Footer from './components/jsx/footer.jsx';
import LoginForm from './components/jsx/loginForm.jsx';
import SignupForm from './components/jsx/signupForm.jsx';
import Success from './components/jsx/success.jsx';
import Contact from './pages/Contact.jsx';
import PrivateRoute from "./components/private-route/PrivateRoute";
import AddForm from "./components/jsx/addForm.jsx";
import Update from "./components/jsx/update.jsx";
import Delete from "./components/jsx/delete.jsx";
import View from "./components/jsx/view.jsx";
import Edit from "./components/jsx/edit";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {
  render() {
      return (
        <Provider store={store}>
            <Router>
              <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignupForm} />
                    <Route exact path="/login" component={LoginForm} />
                    <Switch>
                       <PrivateRoute exact path="/success" component={Success} />
                       <PrivateRoute exact path="/item/add" component={AddForm} />
                       <PrivateRoute exact path="/item/delete" component={Delete} />
                       <PrivateRoute exact path='/item/edit/:id' component={ Edit } />
                       <PrivateRoute exact path="/item/update/:id" component={Update} />
                       <PrivateRoute exact path="/item/view/:id" component={View} />
                    </Switch>
                    <Route path="/contact" component={Contact} />
                <Footer />
              </div>
            </Router>
        </Provider>
      );
    }
}


export default App;
