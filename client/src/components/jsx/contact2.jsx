import React, {Component} from 'react';
import Navbar2 from './navbar2.jsx';
//import Footer from '../components/jsx/footer.jsx';
import '../css/contact2.css';

class Contact2 extends Component {
    render() {
        return (
            <div>
                <Navbar2 />
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
};

export default Contact2