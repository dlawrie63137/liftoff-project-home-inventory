import React, {Component} from 'react';
import '../css/LoginForm.css';


class LoginForm extends Component {
    render() {
        return (
            <body className="text-center">
                <div className="container">
                  <form className="form-login">
                     <h1 className="h3 mb-3 font-weight-normal">Please login to your account</h1>
                     <div className="formInputs">
                         <label for="inputEmail" className="sr-only">Email address</label>
                         <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="true" autofocus="" /><br />
                         <label for="inputPassword" className="sr-only">Password</label>
                         <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="true" /><br />
                         <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                     </div>
                  </form>
                </div>
            </body>
        );
    }
}

export default LoginForm
