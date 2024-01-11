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
