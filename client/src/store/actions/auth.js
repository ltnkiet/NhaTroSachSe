import actionTypes from "./actionTypes";
import {
  apiRegister,
  apiLogin,
  apiForgotPassword,
  apiResetPassword,
} from "../../services/auth";

export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    });
  }
};
export const login = (payload) => async (dispatch) => {
  try {
    const response = await apiLogin(payload);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: response.data.token,
        role: response.data.role
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      data: null,
    });
  }
};

export const forgotPassword = (payload) => async (dispatch) => {
  try {
    const response = await apiForgotPassword(payload);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.FORGOT_PASSWORD_SUCCESS,
        data: {
          msg: response.data.msg,
          token: response.data.token,
        },
      });
    } else {
      dispatch({
        type: actionTypes.FORGOT_PASSWORD_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.FORGOT_PASSWORD_FAIL,
      data: null,
    });
  }
};

export const resetPassword = (payload) => async (dispatch) => {
  try {
    const response = await apiResetPassword(payload);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.RESET_PASSWORD_SUCCESS,
        data: response.data.msg,
      });
    } else {
      dispatch({
        type: actionTypes.RESET_PASSWORD_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.RESET_PASSWORD_FAIL,
      data: null,
    });
  }
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
