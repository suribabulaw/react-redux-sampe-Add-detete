import * as actionTypes from '../../Action_types/index';

export const createUser = (user) => {
    return {
      type: actionTypes.CREATE_NEW_USER,
      user: user
    }
  };

export const deleteUser = (id) => {
    return {
        type: actionTypes.REMOVE_USER,
        id: id
    }
}