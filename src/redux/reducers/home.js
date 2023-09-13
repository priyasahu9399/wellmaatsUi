import {HOME_DATA, USER_STATE} from './../types';

const initialState = {
  getHomedata: null,
  userstate: 'Services', //switch product service
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_DATA:
      return {
        ...state,
        getHomedata: action.payload,
      };
    case USER_STATE:
      return {
        ...state,
        userstate: action.payload,
      };
    // USER_STATE
    default:
      return state;
  }
};
