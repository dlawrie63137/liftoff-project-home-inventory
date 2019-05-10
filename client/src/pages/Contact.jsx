import React, {Component} from 'react';
import Navbar from '../components/jsx/navbar.jsx';
import Footer from '../components/jsx/footer.jsx';
import './css/contact.css';

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