import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions";

class TableRow extends Component {

    

  render() {
      if (this.props.obj.user_id === this.props.auth.user.username ) {
      //&& this.props.obj.location === 'Home'
         
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
                <button className="btn btn-danger">Delete</button>
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