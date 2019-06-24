import React, { Component } from 'react';
import axios from 'axios';
import Navbar2 from './navbar2.jsx';
import '../css/edit.css';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
    this.handleChangeItem = this.handleChangeItem.bind(this);
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeSerialNumber = this.handleChangeSerialNumber.bind(this);
    this.handleChangeYearAcquired = this.handleChangeYearAcquired.bind(this);
    this.handleChangePurchasePrice = this.handleChangePurchasePrice.bind(this);
    


    this.state = {
        location: '',
        room: '',
        item: '',
        manufacturer: '',
        model: '',
        serial_number: '',
        year_acquired: '',
        purchase_price: '',
        user_id: ''
    }
  }

  componentDidMount() {
      axios.get('/api/items/edit/'+ this.props.match.params.id)
          .then(response => {
              this.setState({ 
                location: response.data.location, 
                room: response.data.room,
                item: response.data.item,
                manufacturer: response.data.manufacturer, 
                model: response.data.model,
                serial_number: response.data.serial_number,
                year_acquired: response.data.year_acquired, 
                purchase_price: response.data.purchase_price,
                user_id: response.data.user_id });
          })
          .catch(function (error) {
              console.log(error);
          })
    };

    handleChangeLocation = (e) => {
    this.setState({
      location: e.target.value
    });
  };
  handleChangeRoom = (e) => {
    this.setState({
      room: e.target.value
    })  
  }
  handleChangeItem = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleChangeManufacturer = (e) => {
    this.setState({
      manufacturer: e.target.value
    });
  }
  handleChangeModel = (e) => {
    this.setState({
      model: e.target.value
    })  
  }
  handleChangeSerialNumber = (e) => {
    this.setState({
      serial_number: e.target.value
    })
  }

  handleChangeYearAcquired = (e) => {
    this.setState({
      year_acquired: e.target.value
    });
  }
  handleChangePurchasePrice = (e) => {
    this.setState({
      purchase_price: e.target.value
    })  
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
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
    axios.post('/api/items/update/' + this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/item/view/' + this.state.user_id + '?loc=All');
    window.location.reload();
  }
 
  render() {
    return (
        <div className="container">
        <Navbar2 />
            <div className='title-add'>
                <h2>Edit Item</h2>
                <h6>If any information is not needed, or unknown, please enter "N/A"</h6>
            </div>
            <form className='addItem' id='addItem' onSubmit={this.handleSubmit}>
                <div className='location-group'>
                    <ul className='location-room'>
                        <li className='location-item'>
                          <label htmlFor='location'>Location: </label>
                        <select className='location' id='location' required={false} onChange={this.handleChangeLocation}>
                                <option defaultValue={this.state.location}>{this.state.location}</option>
                                <option value='Home'>Home</option>
                                <option value='Business'>Business</option>
                                <option value='Storage Unit'>Storage Unit</option>
                                <option value='RV'>RV</option>
                        </select>
                        <label htmlFor='room'>Room:</label>
                            <input type='text' id='room' className='room' value={this.state.room}  required={true} onChange={this.handleChangeRoom} />
                        <label htmlFor='item'>Item:</label>    
                            <input type='text' id='item' className='item' value={this.state.item}  required={true} onChange={this.handleChangeItem} />
                        </li>
                    </ul>
                </div>
                <div className='manufacturer-group'>
                    <ul className='manufacturer-info'>
                        <li>
                        <label htmlFor='manufacturer'>Manufacturer:</label>                            
                            <input type='text' id='manufacturer' className='manufacturer' value={this.state.manufacturer} required={true} onChange={this.handleChangeManufacturer} />
                        <label htmlFor='model'>Model:</label>
                            <input type='text' id='model' className='model' value={this.state.model}  required={true} onChange={this.handleChangeModel} />
                        <label htmlFor='serial_number'>Ser #:</label>
                            <input type='text' id='serial_number' className='serial_number' value={this.state.serial_number}  required={true} onChange={this.handleChangeSerialNumber} />
                        </li>
                    </ul>
                </div>
                <div className='value-group'>
                    <ul className='value-info'>
                        <li>
                        <label htmlFor='year_acquired'>Yr Acquired (YYYY):</label>
                            <input type='text' id='year_acquired' className='year_acquired' value={this.state.year_acquired}  required={true} onChange={this.handleChangeYearAcquired} />
                        <label htmlFor='purchase_price' className='lblPrice'>Purchase Price:</label>
                            <input type='text' id='purchase_price' className='purchase_price' value={this.state.purchase_price}  required={true} onChange={this.handleChangePurchasePrice} />
                        </li>
                    </ul>
                </div>
                <input className='submit' type='submit' value='Update Item' />
            </form>
        </div>
    )
  }
}