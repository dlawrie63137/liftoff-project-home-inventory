import React, {Component} from 'react';
import Navbar from '../components/js/Navbar.js';
import Footer from '../components/js/Footer.js';
import SignupForm from '../components/js/SignupForm.js';

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <SignupForm />    
                <Footer />
            </div>
            
            
                
            
        );
    }
}

export default Signup