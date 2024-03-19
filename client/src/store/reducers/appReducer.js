import actionTypes from "../actions/actionTypes";

const initState = {
  msg: "",
  categories: [],
  categoriesByAdmin: [],
  dataCate: null,
  prices: [],
  areas: [],
  provinces: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_CATEGORIES_ADMIN:
      return {
        ...state,
        categoriesByAdmin: action.categories || [],
        count: action.count || 0,
      };
    case actionTypes.EDIT_CATEGORIES:
      return {
        ...state,
        dataCate: action.dataCate || null,
      };
    case actionTypes.GET_PRICES:
      return {
        ...state,
        prices: action.prices || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_AREAS:
      return {
        ...state,
        areas: action.areas || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_PROVINCES:
      return {
        ...state,
        provinces: action.provinces || [],
        msg: action.msg || "",
      };
    default:
      return state;
  }
};

export default appReducer;
