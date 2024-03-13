import actionTypes from "../actions/actionTypes";

const initState = {
  userData: {},
  user: [],
  count: 0,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        userData: action.userData || {},
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        userData: {},
      };
    case actionTypes.ALL_USER:
      return {
        ...state,
        user: action.user || [],
        count: action.count || 0,
      }
    default:
      return state;
  }
};

export default userReducer;
