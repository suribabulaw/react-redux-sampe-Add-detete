import * as actionTypes from '../../Action_types/index';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_USER:
      return [
        ...state,
        Object.assign({}, action.user)
      ];
      case actionTypes.REMOVE_USER:
      return state.filter((data) => data.id !== action.id);
      default:
            return state;
    }
  };