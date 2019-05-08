import React, {Component} from 'react';
import Navbar from '../components/js/Navbar.js';
import Footer from '../components/js/Footer.js';
import LoginForm from '../components/js/LoginForm.js';

class Login extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                   <LoginForm />
                </div>
              <Footer />
            </div>
        );
    }
}

export default Login