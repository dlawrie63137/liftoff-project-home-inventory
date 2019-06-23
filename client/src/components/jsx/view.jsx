import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from 'axios';
import Navbar2 from './navbar2.jsx';
import TableRow from './tableRow.jsx';
import '../css/view.css';


class View extends Component {

    constructor(props) {
        super(props);
        this.state = {item: []};
      }
      
      componentDidMount(){
        let id = this.props.auth.user.username;
        let querystring = window.location.search;
        let urlParam = new URLSearchParams(querystring);
        let loc = urlParam.get('loc');
        
        console.log(id, loc);

        axios.get('/api/items/view/' + id, {params: {location: loc}})
        .then(response => {
          this.setState({ item: response.data });
        })
        .catch(function (error) {
            console.log(error);
          });
        } 
      
      
      tabRow(){
        
            return this.state.item.map(function(object, i){
              
              return <TableRow obj={object} key={i} />;
                });
              }
                 
    render() {
    
     return (
         <div className="container">
         <Navbar2 />
             <div className='inventory'>
               <h3 align="center">Inventory List</h3>
               <table className="table table-striped" style={{ marginTop: 20 }}>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Room</th>
                      <th>Item</th>
                      <th>Manufacturer</th>
                      <th>Model</th>
                      <th>Serial Number</th>
                      <th>Year Acquired</th>
                      <th>Purchase Price</th>
                      <th colSpan="2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.tabRow() }
                  </tbody>
               </table>
              </div>
          </div>
     );
    }
}

View.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(View);