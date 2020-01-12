import React, { Component } from 'react';
import * as userAction from '../../../redux/actions/user_mangement/add_user';
import { connect } from 'react-redux';

class delete_user extends Component {
  remove=()=>{
    this.props.deleteUser(this.props.id)
    console.log(this.props.id)
}
  render() {
    return (
      <div>
        {this.props.users}
        <button onClick={this.remove}> X</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteUser: index => dispatch(userAction.deleteUser(index))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(delete_user);


// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import * as userAction from '../../../redux/actions/user_mangement/add_user';

// class delete_user extends Component {
//   // deleteUser = (e, index) => {
//   //   e.preventDefault();
//   //   this.props.deleteUser(index);
//   // };
//   listView(data, index) {
//     return (
//       // <button
//       //   onClick={e => this.deleteUser(e, index)}
//       //   className="btn btn-danger"
//       // >
//       //   Remove
//       // </button>
//     );
//   }
//   render() {
//     return (
//       <div>
//         {/* <button
//           onClick={e => this.deleteUser(e, index)}
//         >
//           Remove
//         </button> */}
//         <ul>{this.props.users.map(name=><li>name</li>)}</ul>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state, ownProps) => {
//   return {
//     users: state.usermangement
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     deleteUser: index => dispatch(userAction.deleteUser(index))
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(delete_user);
