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

    handleClick = e => {
     this.props.history.push('/item/view/' + this.state.user_id + '?loc={this.value}');
     window.location.reload();
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
                    <div className="dropdown show">
                      <Link className="btn btn-secondary btn-md dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         View
                      </Link>
                       <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                         <Link className="dropdown-item" to={`/item/view/${this.props.auth.user.username}?loc=Home`} value='Home' onClick={this.handleClick}>Home</Link>
                         <Link className="dropdown-item" to={`/item/view/${this.props.auth.user.username}?loc=Business`} value='Business' onClick={this.handleClick}>Business</Link>
                         <Link className="dropdown-item" to={`/item/view/${this.props.auth.user.username}?loc=Storage`} value='Storage' onClick={this.handleClick}>Storage Unit</Link>
                         <Link className="dropdown-item" to={`/item/view/${this.props.auth.user.username}?loc=RV`} value='RV' onClick={this.handleClick}>Recreational Vehicle</Link>
                         <Link className="dropdown-item" to={`/item/view/${this.props.auth.user.username}?loc=All`} value='All' onClick={this.handleClick}>All</Link>
                       </div>
                    </div>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/item/contact">Contact</Link>
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
