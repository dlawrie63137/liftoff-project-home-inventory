import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions";
import Navbar2 from './navbar2';
import '../css/success.css';


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
                <h4 className="line-text">Click <strong>Add</strong> in upper right to add items to your inventory.</h4><br />
                <h4 className="line-text" >Click <strong>View</strong> in upper right to list items in your inventory.</h4><br />
                <h4 className="line-text" >From <strong>View</strong> you may Edit/Update or Delete items in your inventory.</h4><br />
                <h4 className="line-text">Click <strong>Logout</strong> in upper right to exit program.</h4>
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