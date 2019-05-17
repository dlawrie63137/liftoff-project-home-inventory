import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/jsx/navbar.jsx';
import Jumbotron from '../components/jsx/jumbotron.jsx';
import Footer from '../components/jsx/footer.jsx';
import '../pages/css/home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title='Be Prepared' subtitle='When disaster strikes.'/>
              <div className='container'>
                 <h4 className='main-text'>According to the National Oceanic and Atmospheric Administration (NOAA),<br />
                  natural disasters caused over $90 billion in losses in the US in 2018 alone.*<br />
                 With an up to date home inventory you can ensure that you have the insurance coverage you need when the unthinkable happens.
                 <p></p>
                 Our web based solution will allow you to save information regarding your personal property on
                 a secure, remote database ready for you to access at any time. Don't rely on your memory
                 when it's time to make a claim, get everything you're entitled to with our Home Inventory
                 application. Click here to<Link to='/signup'> sign up</Link> for your account or use the link on the top right of this page. 
                 </h4>
                 <p className='citation'>* <Link to='https://www.ncdc.noaa.gov/billions/'>https://www.ncdc.noaa.gov/billions/</Link></p>
              </div>
              <Footer />
            </div>
        );
    }
}

export default Home