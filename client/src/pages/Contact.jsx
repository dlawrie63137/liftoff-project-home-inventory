import React, {Component} from 'react';
import Navbar from '../components/jsx/Navbar.jsx';
import Footer from '../components/jsx/Footer.jsx';

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