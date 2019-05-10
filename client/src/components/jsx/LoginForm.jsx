import React, {Component} from 'react';
import { Link } from "react-router-dom";
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

handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

handleSubmit = e => {
    e.preventDefault();

const userData = {
      email: this.state.email,
      password: this.state.password
    };

console.log(userData);
  };

render() {
    const { errors } = this.state;
        return (
            <div className="container">
              <form className="form-login" noValidate onSubmit={this.handleSubmit}>
                     <h1 className="h3 mb-3 font-weight-normal">Please login to your account</h1>
                     <div className="formInputs">
                         <label htmlFor="email" className="sr-only">Email address</label>
                         <input type="email" id="email" className="form-control" placeholder="Email address" required={true} autoFocus="" onChange={this.handleChange}
                  value={this.state.email} error={errors.email} /><br />
                         <label htmlFor="password" className="sr-only">Password</label>
                         <input type="password" id="password" className="form-control" placeholder="Password" required={true} onChange={this.handleChange}
                  value={this.state.password} error={errors.password} /><br />
                         <p></p>
                         <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                     </div>
              </form>
              <p></p>
              <p className="grey-text text-darken-1">Don't have an account? <Link to="/signup">Sign up</Link></p>
              
            </div>
        );
    }
}

export default LoginForm
