import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import '../css/navbar2.css';
import logo from '../assets/mblogo_sphere.png';

class Navbar2 extends Component {
    onLogoutClick = e => {
        console.log(this.props.user);
        this.props.logoutUser();
      };
      
    render() {
          
        return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
           <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <img className='logo' src={logo} alt='Mongobyte logo' width='80'/>
              <h3 className="nameText">Home Inventory</h3>
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <Link className="nav-link" to="/item/add">Add</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/item/view">View</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/" onClick={this.onLogoutClick}>Logout</Link>
                  </li>
                </ul>
          </div>
        </nav>
      );
    }
}

Navbar2.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar2);
