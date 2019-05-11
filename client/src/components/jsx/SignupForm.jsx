import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import '../css/signupForm.css';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
  }

    componentWillReceiveProps(nextProps) {
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

const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

console.log(newUser);


  this.props.registerUser(newUser, this.props.history); 
  };

render() {
    const { errors } = this.state;

        return (
                <div className="container">
                  <form className="form-signin" noValidate onSubmit={this.handleSubmit}>
                     <div className="title">
                            <h3 className="h3 mb-3 font-weight-normal">Please create your account</h3>
                     </div>
                     <div className="formInputs">
                         <input type="text" id="username" className="form-control" placeholder="Username" required={true} autoFocus="" onChange={this.handleChange} value={this.state.username}
                  error={errors.username} />
                         <span className="red-text">{errors.username}</span><br />
                         <input type="email" id="email" className="form-control" placeholder="Email" required={true} autoFocus="" onChange={this.handleChange} value={this.state.email}
                  error={errors.email} />
                         <span className="red-text">{errors.email}</span><br />
                         <input type="password" id="password" className="form-control" placeholder="Password" required={true} onChange={this.handleChange} value={this.state.password}
                  error={errors.password} />
                         <span className="red-text">{errors.password}</span><br />
                         <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" required={true} onChange={this.handleChange} value={this.state.confirmPassword}
                  error={errors.confirmPassword} />
                         <span className="red-text">{errors.confirmPassword}</span><br />
                         <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                     </div>
                  </form>
                  <p></p>
                  <p className="text-center">Already have an account? <Link to="/login">Log in</Link></p>
                </div> 
            );
    }
}

SignupForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignupForm));