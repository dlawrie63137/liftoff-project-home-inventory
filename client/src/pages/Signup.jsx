import React, {Component} from 'react';
import Navbar from '../components/jsx/Navbar.jsx';
import Footer from '../components/jsx/Footer.jsx';
import SignupForm from '../components/jsx/SignupForm.jsx';

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