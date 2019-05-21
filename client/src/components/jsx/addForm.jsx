import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import Navbar2 from './navbar2.jsx';
import '../css/addForm.css';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            room: '',
            item: '',
            manufacturer: '',
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

        this.setState({
            location: '',
            room: '',
            item: '',
            manufacturer: '',
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
            </div>
            <form className='addItem' id='addItem' onSubmit={this.handleSubmit}>
                <div className='location-group'>
                    <ul className='location-room'>
                        <li>
                            <select className='location' id='location' onChange={this.handleChange}>
                                <option selected='selected' value=''>Choose your location</option>
                                <option value='home'>Home</option>
                                <option value='business'>Business</option>
                                <option value='storage'>Storage Unit</option>
                                <option value='rv'>Recreational Vehicle</option>
                            </select>
                            <input type='text' id='room' className='room' placeholder='Room' required={true} onChange={this.handleChange} />
                        </li>
                    </ul>
                </div>
                <div className='item-group'>
                    <ul className='item-info'>
                        <li>
                            <input type='text' id='item' className='item' placeholder='Item' required={true} onChange={this.handleChange} />
                            <input type='text' id='manufacturer' className='manufacturer' placeholder='Manufacturer' required={false} onChange={this.handleChange} />
                            <input type='text' id='serial_number' className='serial_number' placeholder='Serial Number' required={false} onChange={this.handleChange} />
                        </li>
                    </ul>
                </div>
                <div className='value-group'>
                    <ul className='value-info'>
                        <li>
                            <input type='text' id='year_acquired' className='year_acquired' placeholder='Year Acquired (YYYY)' required={true} onChange={this.handleChange} />
                            <input type='text' id='purchase_price' className='purchase_price' placeholder='Purchase Price' required={true} onChange={this.handleChange} />
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
  
  