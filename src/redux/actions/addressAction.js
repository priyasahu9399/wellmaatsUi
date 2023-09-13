import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNToasty} from 'react-native-toasty';
import http from './../../services/api';
import {GET_ADDRESS_BYUSERID, GET_ADDRESS_BYID, GET_PINCODE} from './../types';

export const CreateAddressApi = (post, navigation, cb) => async dispatch => {
  console.log('post', post);
  cb && cb(true);
  http
    .post(`servicesCreateAddress`, post)
    .then(async response => {
      if (response.data.success) {
        navigation && navigation?.navigate('UpadateAddress');
        console.log('success');
        cb && cb(false);
      } else {
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
    });
};

export const GetAddressByUserIdApi = cb => async (dispatch, getState) => {
  const {getuser} = getState().auth;
  cb && cb(true);
  http
    .get(`servicesGetAllAddressByCustomerId/${getuser?._id}`)
    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: GET_ADDRESS_BYUSERID,
          payload: response.data.data,
        });
        cb && cb(false);
      } else {
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
    });
};

export const GetAddressByIdApi = (id, navigation, cb) => async dispatch => {
  cb && cb(true);
  http
    .get(`servicesGetByAddressId/${id}`)
    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: GET_ADDRESS_BYID,
          payload: response.data.data,
        });
        navigation && navigation?.navigate('SetTime');
        cb && cb(false);
      } else {
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
    });
};
