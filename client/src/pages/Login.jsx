import React, {Component} from 'react';
import Navbar from '../components/jsx/Navbar.jsx';
import Footer from '../components/jsx/Footer.jsx';
import LoginForm from '../components/jsx/LoginForm.jsx';

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