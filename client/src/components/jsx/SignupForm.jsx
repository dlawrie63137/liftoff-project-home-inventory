import React, {Component} from 'react';
import '../css/SignupForm.css';


class SignupForm extends Component {
    state = {
        username: null,
        email: null,
        password: null,
        confirmPassword: null
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        
    }
    render() {
        return (
            <body className="text-center">
                <div className="container">
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                     <h1 className="h3 mb-3 font-weight-normal">Please create your account</h1>
                     <div className="formInputs">
                         <label for="username" className="sr-only">Enter Username</label>
                         <input type="text" id="username" className="form-control" placeholder="Username" required="true" autofocus="" onChange={this.handleChange}/><br />
                         <label for="email" className="sr-only">Email address</label>
                         <input type="email" id="email" className="form-control" placeholder="Email address" required="true" autofocus=""onChange={this.handleChange}  /><br />
                         <label for="password" className="sr-only">Password</label>
                         <input type="password" id="password" className="form-control" placeholder="Password" required="true" onChange={this.handleChange} /><br />
                         <label for="confirmPassword" className="sr-only">Confirm Password</label>
                         <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" required="true" onChange={this.handleChange} /><br />
                         <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                     </div>
                  </form>
                </div>
            </body>
        );
    }
}

export default SignupForm
