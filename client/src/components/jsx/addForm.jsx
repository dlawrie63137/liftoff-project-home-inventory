import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import Navbar2 from './navbar2.jsx';
import '../css/addForm.css';

class AddForm extends Component {
  
    render() {
    
     return (
        <div className="container">
            <Navbar2 />
            <form className='addItem'>
                <div className='location-group'>
                    <ul className='location-room'>
                        <li>
                            <select classname='location'>
                                <option selected='selected' value='home'>Home</option>
                                <option value='business'>Business</option>
                                <option value='storage'>Storage Unit</option>
                                <option value='rv'>Recreational Vehicle</option>
                            </select>
                            <label htmlFor='room'><span>Room: </span></label>
                            <input type='text' id='room' className='room' value='' required={true} onChange={this.handleChange} />
                        </li>
                    </ul>
                </div>
                <div className='item-group'>
                    <ul className='item-info'>
                        <li>
                            <label htmlFor='item'><span>Item: </span></label>
                            <input type='text' id='item' className='item' value='' required={true} onChange={this.handleChange} />
                            <label htmlFor='manufacturer'><span>Manufacturer: </span></label>
                            <input type='text' id='manufacturer' className='manufacturer' value='' required={false} onChange={this.handleChange} />
                            <label htmlFor='serial_number'><span>Serial Number: </span></label>
                            <input type='text' id='serial_number' className='serial_number' value='' required={false} onChange={this.handleChange} />
                        </li>
                    </ul>
                </div>
                <div className='value-group'>
                    <ul className='value-info'>
                        <li>
                            <label htmlFor='year_acquired'><span>Year Acquired: </span></label>
                            <input type='text' id='year_Acquired' className='year_acquired' value='               YYYY' required={true} onChange={this.handleChange} />
                            <label htmlFor='purchase_price'><span>Purchase Price: </span></label>
                            <input type='text' id='purchase_price' className='purchase_price' value='' required={true} onChange={this.handleChange} />
                            <input type='hidden' id='user_id' className='user_id' value={this.props.auth.user.username} required={true} onChange={this.handleChange} />
                        </li>
                    </ul>
                </div>
            </form>
        </div>
     );
    }
}

AddForm.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
  });
  
  export default connect(
    mapStateToProps,
)(AddForm);
  
  