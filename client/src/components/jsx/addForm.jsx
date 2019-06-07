import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';


import Navbar2 from './navbar2.jsx';
import '../css/addForm.css';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Home',
            room: '',
            item: '',
            manufacturer: '',
            model: '',
            serial_number: '',
            year_acquired: '',
            purchase_price: '',
            user_id: this.props.auth.user.username
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    handleSubmit(e) {
        e.preventDefault();
            
        console.log(`Form submitted:`);
        console.log(`User Id: ${this.state.user_id}`);

        const newItem = {
            location: this.state.location,
            room: this.state.room,
            item: this.state.item,
            manufacturer: this.state.manufacturer,
            model: this.state.model,
            serial_number: this.state.serial_number,
            year_acquired: this.state.year_acquired,
            purchase_price: this.state.purchase_price,
            user_id: this.state.user_id
        };
        
        axios.post("/api/items/add", newItem)
            .then(res => console.log(res.data));
            
        this.setState({
            location: '',
            room: '',
            item: '',
            manufacturer: '',
            model: '',
            serial_number: '',
            year_acquired: '',
            purchase_price: '',
        })

         document.getElementById("addItem").reset();
      };
  
    render() {
    
     return (
        <div className="container">
        <Navbar2 />
            <div className='title-add'>
                <h2>Add Item</h2>
                <h6>If any information is not needed, or unknown, please enter "N/A"</h6>
            </div>
            <form className='addItem' id='addItem' onSubmit={this.handleSubmit}>
                <div className='location-group'>
                    <ul className='location-room'>
                        <li className='location-item'>
                        <label htmlFor='location'>Location: </label>
                        <select className='location' id='location' required={true} onChange={this.handleChange}>
                                <option defaultValue='Home'>Home</option>
                                <option value='Business'>Business</option>
                                <option value='Storage'>Storage Unit</option>
                                <option value='RV'>Recreational Vehicle</option>
                        </select>
                        <label htmlFor='room'>Room:</label>
                            <input type='text' id='room' className='room' required={true} onChange={this.handleChange} />
                        <label htmlFor='item'>Item:</label>
                            <input type='text' id='item' className='item' required={true} onChange={this.handleChange} />
                        </li>
                    </ul>
                </div>
                <div className='manufacturer-group'>
                    <ul className='manufacturer-info'>
                        <li>
                        <label htmlFor='manufacturer'>Manufacturer:</label>                             
                            <input type='text' id='manufacturer' className='manufacturer' required={true} onChange={this.handleChange} />
                        <label htmlFor='model'>Model:</label>
                            <input type='text' id='model' className='model' required={true} onChange={this.handleChange} />
                        <label htmlFor='serial_number'>Ser #:</label>
                            <input type='text' id='serial_number' className='serial_number' required={true} onChange={this.handleChange} />
                        </li>
                    </ul>
                </div>
                <div className='value-group'>
                    <ul className='value-info'>
                        <li>
                        <label htmlFor='year_acquired'>Yr Acquired (YYYY):</label>
                            <input type='text' id='year_acquired' className='year_acquired' required={true} onChange={this.handleChange} />
                        <label htmlFor='purchase_price' className='lblPrice'>Purchase Price:</label>
                            <input type='text' id='purchase_price' className='purchase_price' required={true} onChange={this.handleChange} />
                        </li>
                    </ul>
                </div>
                <input className='submit' type='submit' value='Add Item' />
            </form>
        </div>
     );
    }
}

AddForm.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
    
  export default connect(
    mapStateToProps,
)(AddForm);
  
  