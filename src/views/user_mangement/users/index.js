import React, { Component } from "react";
import { connect } from "react-redux";
import Deleteuser from "../delete_user/delete_user";
import * as userAction from "../../../redux/actions/user_mangement/add_user";

class delete_user extends Component {


  render() {
    // const argoUser = this.props.users
    const argoUser = this.props.users.map(user => {
      return <Deleteuser id={user.id} key={user.id} users={user.name} />;
    });
    return (
      <div>
        <ul>{argoUser}</ul>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.usermangement
  };
};
export default connect(mapStateToProps)(delete_user);
