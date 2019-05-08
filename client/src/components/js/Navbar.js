import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../img/mblogo_sphere.png';

class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
           <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <img className='logo' src={logo} width='75'/>
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/login">Log In</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
          </div>
        </nav>
      );
    }
}

export default Navbar
