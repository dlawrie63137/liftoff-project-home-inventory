import React, {Component} from 'react';
import { Link } from "react-router-dom";
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
  };

render() {
    const { errors } = this.state;

        return (
                <div className="container">
                  <form className="form-signin" noValidate onSubmit={this.handleSubmit}>
                     <h1 className="h3 mb-3 font-weight-normal">Please create your account</h1>
                     <div className="formInputs">
                         <label htmlFor="username" className="sr-only">Enter Username</label>
                         <input type="text" id="username" className="form-control" placeholder="Username" required={true} autoFocus="" onChange={this.handleChange} value={this.state.username}
                  error={errors.username}/><br />
                         <label htmlFor="email" className="sr-only">Email address</label>
                         <input type="email" id="email" className="form-control" placeholder="Email address" required={true} autoFocus=""onChange={this.handleChange} value={this.state.email}
                  error={errors.email} /><br />
                         <label htmlFor="password" className="sr-only">Password</label>
                         <input type="password" id="password" className="form-control" placeholder="Password" required={true} onChange={this.handleChange} value={this.state.password}
                  error={errors.password}/><br />
                         <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                         <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" required={true} onChange={this.handleChange} value={this.state.confirmPassword}
                  error={errors.confirmPassword}/><br />
                         <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                     </div>
                  </form>
                  <p></p>
                  <p className="text-center">Already have an account? <Link to="/login">Log in</Link></p>
                </div> 
            );
    }
}

export default SignupForm
