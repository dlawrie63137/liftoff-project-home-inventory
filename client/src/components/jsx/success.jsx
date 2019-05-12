import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions";
import Navbar2 from './navbar2';
import '../css/success.css';
//import store from "../../store";


class Success extends Component {
 
  
    render() {
    
     return (
        <div className="container">
         <Navbar2 />
         <div>
         <div className="content">
            <div className="login-success">
              <h3 >Login Successful!</h3>
            </div>
            <div className="success-sub">
              <p>You are logged in as '{ this.props.auth.user.username }'</p>
            </div>
            <div className="link-info">
                <h4 className="line-text">Click <strong>Add</strong> to add items to your inventory.</h4><br />
                <h4 className="line-text" >Click <strong>Update</strong> to change items in your inventory.</h4><br />
                <h4 className="line-text" >Click <strong>Delete</strong> to remove items from your inventory.</h4><br />
                <h4 className="line-text" >Click <strong>View</strong> to list items in your inventory.</h4><br />
                <h4 className="line-text">Click <strong>Logout</strong> to exit program.</h4>
            </div>
            </div>
          </div>
        </div>
    );
  }  
}


Success.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Success);