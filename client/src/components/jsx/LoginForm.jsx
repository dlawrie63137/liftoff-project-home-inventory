import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Navbar from './navbar.jsx';
import '../css/loginForm.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to success page
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/success");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/success"); // push user to success when they login
    }

if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

handleSubmit = e => {
    e.preventDefault();

const userData = {
      email: this.state.email,
      password: this.state.password
    };

  this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
};

render() {
    const { errors } = this.state;
        return (
            <div className="container">
            <Navbar />
              <form className="form-login" noValidate onSubmit={this.handleSubmit}>
                <div className="title">
                  <h3 className="h3 mb-3 font-weight-normal">Please login to your account</h3>
                </div>
                <div className="formInputs">
                   <input type="email" id="email" className="form-control" placeholder="Email" required={true} autoFocus={true} onChange={this.handleChange}
                  value={this.state.email} error={errors.email} /><br />
                   <span className="red-text">{errors.email} {errors.emailnotfound}</span>
                   <input type="password" id="password" className="form-control" placeholder="Password" required={true} onChange={this.handleChange}
                  value={this.state.password} error={errors.password} /><br />
                   <span className="red-text">{errors.password} {errors.passwordincorrect}</span>
                   <p></p>
                   <button id="btnLogin" className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                </div>
              </form>
              
              <p></p>
              <p className="grey-text text-darken-1">Don't have an account? <Link to="/signup">Sign up</Link></p>
              
            </div>
        );
      }  
    }

    LoginForm.propTypes = {
      loginUser: PropTypes.func.isRequired,
      auth: PropTypes.object.isRequired,
      errors: PropTypes.object.isRequired
    };
    
    const mapStateToProps = state => ({
      auth: state.auth,
      errors: state.errors
    });
    
    export default connect(
      mapStateToProps,
      { loginUser }
    )(LoginForm);
