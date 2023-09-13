import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNToasty} from 'react-native-toasty';
import http from './../../services/api';
import {HOME_DATA, USER_STATE} from './../types';

export const GetHomeDataApi = (type, cb) => dispatch => {
  cb && cb(true);
  http
    .get(type == 'Services' ? 'homePage' : 'eCommerce/homePage')
    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: HOME_DATA,
          payload: response.data.data,
        });
        dispatch({
          type: USER_STATE,
          payload: type == 'Services' ? 'Services' : 'Product',
        });

        // console.log('type', type);
        cb && cb(false);
      } else {
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
    });
};
