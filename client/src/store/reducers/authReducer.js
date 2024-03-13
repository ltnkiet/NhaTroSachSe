import actionTypes from "../actions/actionTypes";

const initState = {
  isLoggedIn: false,
  token: null,
  msg: "",
  update: false,
  err: null,
  role: ""
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.data,
        msg: "",
        err: 0,
        role: action.role
      };
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        msg: action.data,
        token: null,
        update: !state.update,
        err: 1,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        msg: "",
      };
    case actionTypes.FORGOT_PASSWORD_SUCCESS:
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        msg: action.data,
        token: action.data,
        err: 0,
      };
    case actionTypes.FORGOT_PASSWORD_FAIL:
    case actionTypes.RESET_PASSWORD_FAIL:
      return {
        ...state,
        msg: action.data,
        update: !state.update,
        isLoggedIn: false,
        err: 1,
      };
    default:
      return state;
  }
};

export default authReducer;
