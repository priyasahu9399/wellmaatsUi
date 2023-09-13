import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNToasty} from 'react-native-toasty';
import http from './../../services/api';
import {CREATE_CARDS, GET_COUPON, GET_ALL_CARTS} from './../types';

export const CreateCartApi = (postData, navigation, cb) => dispatch => {
  cb && cb(true);
  http
    .post(`createCart`, postData)
    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: CREATE_CARDS,
          payload: response.data,
        });
        navigation && navigation?.navigate('ServiceCart');
        cb && cb(false);
      } else {
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
    });
};

export const GetAllCouponApi = cb => async dispatch => {
  cb && cb(true);
  http
    .get(`getAllCoupon`)
    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: GET_COUPON,
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

export const GetAllCartcustomerIdApi =
  (couponCode, navigation, cb) => async (dispatch, getState) => {
    const {getuser} = getState().auth;
    cb && cb(true);
    http
      .get(`getAllCartBycustomerId/${getuser?._id}`)
      .then(async response => {
        if (response.data.success) {
          dispatch({
            type: GET_ALL_CARTS,
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
export const AddQuantityApi = id => async dispatch => {
  http
    .put(`quantityUpdate/${id}`)
    .then(async response => {
      if (response.data.success) {
        dispatch(GetAllCartcustomerIdApi());
        RNToasty.Success({
          title: response.data.message,
        });
      } else {
        RNToasty.Info({
          title: response.data.message,
        });
      }
    })
    .catch(error => {
      RNToasty.Error({
        title: error.response.data.message,
      });
    });
};

export const RemoveQuantityApi = id => async dispatch => {
  http
    .put(`removeQuantity/${id}`)
    .then(async response => {
      if (response.data.success) {
        dispatch(GetAllCartcustomerIdApi());
        RNToasty.Success({
          title: response.data.message,
        });
      } else {
        RNToasty.Info({
          title: response.data.message,
        });
      }
    })
    .catch(error => {
      RNToasty.Error({
        title: error.response.data.message,
      });
    });
};

export const RemoveCartByIdApi = id => async dispatch => {
  http
    .delete(`deleteCartById/${id}`)
    .then(async response => {
      if (response.data.success) {
        dispatch(GetAllCartcustomerIdApi());
        RNToasty.Success({
          title: response.data.message,
        });
      } else {
        RNToasty.Info({
          title: response.data.message,
        });
      }
    })
    .catch(error => {
      RNToasty.Error({
        title: error.response.data.message,
      });
    });
};
