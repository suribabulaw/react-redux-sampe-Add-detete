import React, { Component } from "react";
import { connect } from 'react-redux';
import uuid from 'uuid'
import * as userAction from '../../../redux/actions/user_mangement/add_user';
import UserAuto from '../../share_component/autocomplete_search/index';
import './Style.css'

class index extends Component {
  state = {
    name: ""
  };
  handleSubmit = (value) => {
    
    let user = {
      name: value,
      id : uuid()
    };
    
    this.props.createUser(user);
  
  };

  render() {
    return (
      <div className='container'>
        <UserAuto 
         items={this.props.users.map(i=>i.name)}
        //  id={this.props.users.map(i=>i.id)}
         saveUser={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usermangement
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      createUser: user => dispatch(userAction.createUser(user)),
    //   deleteUser: index =>dispatch(userAction.deleteUser(index))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(index);
