import React from 'react';
import Adduser from './add_user/index'
// import Deleteuser from './delete_user/delete_user'
import User from './users/index'
const index = () => {
    return (
        <div>
           <Adduser />
           {/* <Deleteuser />  */}
           <br />
           <User />
        </div>
    );
};

export default index;