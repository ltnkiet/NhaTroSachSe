import actionTypes from "./actionTypes";
import * as apis from "../../services";

export const getUser = () => async (dispatch) => {
  try {
    const response = await apis.apiGetUser();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_USER,
        userData: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_USER,
        msg: response.data.msg,
        userData: null,
      });
      dispatch({ type: actionTypes.LOGOUT });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER,
      userData: null,
      msg: error,
    });
    dispatch({ type: actionTypes.LOGOUT });
  }
};

export const getAllUser = (query) => async (dispatch) => {
  try {
    const response = await apis.apiGetAllUser(query);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.ALL_USER,
        user: response.data.response?.rows,
        count: response.data.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.ALL_USER,
        msg: response.data.msg,
        user: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.ALL_USER,
      user: null,
    });
  }
};
