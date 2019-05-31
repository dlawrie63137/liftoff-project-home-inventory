import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeRoom = this.onChangeRoom.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onChangeManufacturer = this.onChangeManufacturer.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeSerialNumber = this.onChangeSerialNumber.bind(this);
    this.onChangeYearAcquired = this.onChangeYearAcquired.bind(this);
    this.onChangePurchasePrice = this.onChangePurchasePrice.bind(this);


    this.state = {
        location: '',
        room: '',
        item: '',
        manufacturer: '',
        model: '',
        serial_number: '',
        year_acquired: '',
        purchase_price: '',
        user_id: this.props.auth.user.username
    }
  }

  componentDidMount() {
      axios.get('/api/items/edit/'+this.props.match.params.id)
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

  onChangeLocation = (e) => {
    this.setState({
      location: e.target.value
    });
  };
  onChangeRoom = (e) => {
    this.setState({
      room: e.target.value
    })  
  }
  onChangeItem = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  onChangeManufacturer = (e) => {
    this.setState({
      manufacturer: e.target.value
    });
  }
  onChangeModel = (e) => {
    this.setState({
      model: e.target.value
    })  
  }
  onChangeSerialNumber = (e) => {
    this.setState({
      serial_number: e.target.value
    })
  }

  onChangeYearAcquired = (e) => {
    this.setState({
      year_acquired: e.target.value
    });
  }
  onChangePurchasePrice = (e) => {
    this.setState({
      purchase_price: e.target.value
    })  
  }
  

  onSubmit = (e) => {
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
    axios.post('/api/items/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    //this.props.history.push('/item/view');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_gst_number}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}