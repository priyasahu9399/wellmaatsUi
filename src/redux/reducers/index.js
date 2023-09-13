import {combineReducers} from 'redux';
import auth from './auth';
import home from './home';
import category from './category';
import cart from './cart';
import address from './address';
export default combineReducers({
  auth,
  home,
  category,
  cart,
  address,
});
