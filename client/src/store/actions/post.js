import actionTypes from "./actionTypes";
import {
  apiGetNewPosts,
  apiGetPostByUser,
  apiGetPostsLimit,
} from "../../services/post";

export const getPostByUser = (query) => async (dispatch) => {
  try {
    const response = await apiGetPostByUser(query);
    if (response?.err === 0) {
      dispatch({
        type: actionTypes.GET_POST_USER,
        posts: response.response?.rows,
        count: response.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST_USER,
        msg: response?.msg,
        posts: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POST_USER,
      posts: null,
    });
  }
};
export const getPostsLimit = (query) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(query);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        posts: response.data.response?.rows,
        count: response.data.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        msg: response.data.msg,
        posts: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT,
      posts: null,
    });
  }
};
export const getNewPosts = () => async (dispatch) => {
  try {
    const response = await apiGetNewPosts();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_NEW_POST,
        posts: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_NEW_POST,
        msg: response.data.msg,
        posts: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_NEW_POST,
      posts: null,
    });
  }
};
export const editPosts = (dataPost) => ({
  type: actionTypes.EDIT_POST,
  dataPost
});

export const resetData= () => ({
  type: actionTypes.RESET_DATA,
});