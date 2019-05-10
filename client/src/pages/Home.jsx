import React, {Component} from 'react';
import Navbar from '../components/jsx/navbar.jsx';
import Jumbotron from '../components/jsx/jumbotron.jsx';
import Footer from '../components/jsx/footer.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title='Be Prepared' subtitle='When disaster strikes.'/>
              <div className='container'>
                 <h2>Welcome</h2>
                 <p>Lorem ipsum dolor sit amet, mea no cotidieque ullamcorper, no per pericula torquatos deterruisset. Pro corpora singulis consetetur et, consul graeco assentior ad pri. Mea te saepe dissentiet, nec ex cetero conclusionemque. No mel evertitur vituperata, ea ornatus accumsan euripidis mei. Postea efficiantur sed no, nam homero intellegat adipiscing ne, hinc illum per eu.
                 </p>
              </div>
              <Footer />
            </div>
        );
    }
}

export default Home