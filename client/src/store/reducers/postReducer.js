import actionTypes from "../actions/actionTypes";

const initState = {
  posts: [],
  msg: "",
  count: 0,
  newPosts: [],
  postByUser: [],
  dataPost: null
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
    case actionTypes.GET_POSTS_LIMIT:
      return {
        ...state,
        posts: action.posts || [],
        msg: action.msg || "",
        count: action.count || 0,
      };
    case actionTypes.GET_NEW_POST:
      return {
        ...state,
        msg: action.msg || "",
        newPosts: action.posts || [],
      };
    case actionTypes.GET_POST_USER:
      return {
        ...state,
        msg: action.msg || "",
        postByUser: action.posts || [],
      }
    case actionTypes.EDIT_POST:
      return {
        ...state,
        dataPost: action.dataPost || null,
      }
    case actionTypes.RESET_DATA:
      return {
        ...state,
        dataPost: null,
      }
    default:
      return state;
  }
};

export default postReducer;
