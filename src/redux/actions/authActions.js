import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNToasty} from 'react-native-toasty';
import http from './../../services/api';
import {AUTH_TOKEN, GET_USER} from '../types';

export const AuthFunction = () => dispatch => {
  dispatch({
    type: AUTH_TOKEN,
    payload: 's',
  });
};

export const LogoutApi = () => dispatch => {
  dispatch({
    type: AUTH_TOKEN,
    payload: null,
  });
  dispatch({
    type: GET_USER,
    payload: null,
  });
  AsyncStorage.removeItem('@USER_TOKEN');
  AsyncStorage.removeItem('@USER_ID');

  RNToasty.Normal({
    title: 'LogOut Successful',
  });
};
export const LoginApi = (postData, navigation, cb) => dispatch => {
  cb && cb(true);
  http
    .post('login/customer', postData)
    .then(async response => {
      console.log('response.data?.data?._id', response.data?.data?._id);
      if (response.data.success) {
        dispatch({
          type: GET_USER,
          payload: response.data.data,
        });
        dispatch({
          type: AUTH_TOKEN,
          payload: response.data.token,
        });
        dispatch(GetuserIdApi());
        await AsyncStorage.setItem('@USER_TOKEN', response.data?.token);

        cb && cb(false);
      } else {
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
    });
};

export const SignUpApi = (postData, navigation, cb) => dispatch => {
  cb && cb(true);
  http
    .post('register', postData)
    .then(async response => {
      console.log('response _id', response.data?.data?._id);
      if (response.data) {
        dispatch(GetuserIdApi());

        dispatch({
          type: AUTH_TOKEN,
          payload: response.data.token,
        });
        await AsyncStorage.setItem('@USER_TOKEN', response.data.token);

        cb && cb(false);
      } else {
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
    });
};

export const OTPApi = (postData, navigation, check, cb) => async dispatch => {
  cb && cb(true);
  http
    .post('sendOtp', {
      phoneNumber: postData.phoneNumber,
      check: check,
    })
    .then(async response => {
      if (response.data.success) {
        navigation?.navigate('Varification', {
          data: postData,
          check: check,
          otp: response.data.otp,
        });
        cb && cb(false);
      } else {
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
      if (error?.response?.data?.message == 'User Not Found') {
        navigation?.navigate('SignUp', {phoneno: postData?.phoneNumber});
      }
    });
};
export const GetuserIdApi =
  (id, navigation, cb) => async (dispatch, getState) => {
    const {getuser} = getState().auth;
    cb && cb(true);
    http
      .post(`getUserById/${getuser?._id}`)
      .then(async response => {
        if (response.data.success) {
          dispatch({
            type: GET_USER,
            payload: response.data,
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
