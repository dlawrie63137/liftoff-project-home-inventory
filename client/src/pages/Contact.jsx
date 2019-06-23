import React, {Component} from 'react';
import Navbar from '../components/jsx/navbar.jsx';
import './css/contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                   <h1>Contact</h1>
                    <div className='text-content'>
                       <p><strong>Mongobyte Web Solutions - St. Louis, MO</strong></p>
                       <p>Email: stlmongo@hotmail.com</p>
                       <p>Website: currently under construction</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Contact