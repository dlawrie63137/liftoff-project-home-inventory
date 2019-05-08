import React, {Component} from 'react';
import Navbar from '../components/js/Navbar.js';
import Footer from '../components/js/Footer.js';

class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                   <h1>Contact</h1>
                   <p>Contact info goes here.</p>
                </div>
              <Footer />
            </div>
        );
    }
}

export default Contact