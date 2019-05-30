import React, {Component} from 'react';
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
        axios.get('/api/items/view')
        .then(response => {
          this.setState({ item: response.data });
          //console.log(this.state.item);
          })
        .catch(function (error) {
            console.log(error);
          });
      }
      
      tabRow(){
        //console.log(this.state.item[2], this.props.auth.user.username)
            return this.state.item.map(function(object, i){
              console.log(object);
              return <TableRow obj={object} key={i} />;
                });
              };
                 
    render() {
    
     return (
         <div className="container">
         <Navbar2 />
             <div className='inventory'>
               <h3 className='invListTitle' align="center">Inventory List</h3>
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

export default View