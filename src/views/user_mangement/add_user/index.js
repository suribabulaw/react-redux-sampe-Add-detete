import React, { Component } from "react";
import { connect } from 'react-redux';
import uuid from 'uuid'
import * as userAction from '../../../redux/actions/user_mangement/add_user';

class index extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      id : uuid()
    };
    this.setState({
      name: ""
    });
    this.props.createUser(user);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control"
            value={this.state.name}
          />
          <br />
          <input type="submit" className="btn btn-success" value="ADD" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createUser: user => dispatch(userAction.createUser(user)),
    //   deleteUser: index =>dispatch(userAction.deleteUser(index))
    }
  };

export default connect(null, mapDispatchToProps)(index);
