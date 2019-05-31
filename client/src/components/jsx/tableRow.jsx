import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions";
import Axios from 'axios';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    Axios.get('/api/items/delete/' + this.props.obj._id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err))
    window.location.reload();
  }

  render() {
      if (this.props.obj.user_id === this.props.auth.user.username) {
        return (
            <tr>
              <td>
                {this.props.obj.location}
              </td>
              <td>
                {this.props.obj.room}
              </td>
              <td>
                {this.props.obj.item}
              </td>
              <td>
                {this.props.obj.manufacturer}
              </td>
              <td>
               {this.props.obj.model}
              </td>
              <td>
               {this.props.obj.serial_number}
              </td>
              <td>
                {this.props.obj.year_acquired}
              </td>
              <td>
                {this.props.obj.purchase_price}
              </td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
              <td>
                <button onClick={this.handleDelete} className="btn btn-danger">Delete</button>
              </td>
            </tr>
        );
      };
      return null;
    };
}

TableRow.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(TableRow);