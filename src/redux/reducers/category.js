import {
  GET_PARENT_CATEGORIES,
  GET_SUB_CATEGORIES,
  GET_BYPRODUCT_ID,
} from './../types';

const initialState = {
  getParentCategory: null,
  getsubCategory: null,
  getbyProductid: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PARENT_CATEGORIES:
      return {
        ...state,
        getParentCategory: action.payload,
      };
    case GET_SUB_CATEGORIES:
      return {
        ...state,
        getsubCategory: action.payload,
      };
    case GET_BYPRODUCT_ID:
      return {
        ...state,
        getbyProductid: action.payload,
      };

    default:
      return state;
  }
};
