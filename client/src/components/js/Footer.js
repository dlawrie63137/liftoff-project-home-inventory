import React, {Component} from 'react';
import '../css/Footer.css';


class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-auto py-3">
              <div className="container">
                <div className="text-muted">
                  <ul className="foot-list">
                    <li>&#169; {new Date().getFullYear()}</li>
                    <li>Mongobyte.com</li>
                  </ul>
                </div>
              </div>
            </footer>
        );
    }
}

export default Footer 
