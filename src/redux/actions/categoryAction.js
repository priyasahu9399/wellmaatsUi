import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNToasty} from 'react-native-toasty';
import http from './../../services/api';
import {
  GET_PARENT_CATEGORIES,
  GET_SUB_CATEGORIES,
  GET_BYPRODUCT_ID,
  USER_STATE,
} from './../types';

export const GetParentCategoryApi = (type, id, navigation, cb) => dispatch => {
  cb && cb(true);
  http
    .get(
      type == 'Services'
        ? ` getCategoryWithPcategoryByUser/${id} `
        : `eCommerce/getCategoryWithPcategoryByUser/${id}`,
    )
    .then(async response => {
      if (response.data.success) {
        dispatch({
          type: GET_PARENT_CATEGORIES,
          payload: response.data.data,
        });
        dispatch({
          type: USER_STATE,
          payload: type == 'Services' ? 'Services' : 'Product',
        });
        navigation && navigation?.navigate('HomeServices');
        cb && cb(false);
      } else {
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
    });
};

export const GetSubCategoryApi = (id, cb, type) => dispatch => {
  cb && cb(true);
  http
    .get(
      type == 'Services'
        ? `getProductBySubCategory/${id}`
        : `eCommerce/getProductBySubCategory/${id}`,
    )
    .then(async response => {
      console.log('response.data.   GetSubCategoryApi', response.data.success);

      if (response.data.success) {
        dispatch({
          type: GET_SUB_CATEGORIES,
          payload: response.data.data,
        });
        dispatch({
          type: USER_STATE,
          payload: type == 'Services' ? 'Services' : 'Product',
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

export const GetByProductIdApi = (type, id, navigation, cb) => dispatch => {
  console.log('GetByProductIdApi', id, type);
  cb && cb(true);
  http
    .get(
      type == 'Services'
        ? `getByProductId/${id}`
        : `eCommerce/getByProductId/${id}`,
    )
    .then(async response => {
      console.log('response.data.success', response.data.success);
      if (response.data.success) {
        dispatch({
          type: USER_STATE,
          payload: type == 'Services' ? 'Services' : 'Product',
        });
        dispatch({
          type: GET_BYPRODUCT_ID,
          payload: response.data,
        });
        navigation && navigation?.navigate('ServiceDetail');
        cb && cb(false);
      } else {
        cb && cb(false);
      }
    })
    .catch(error => {
      cb && cb(false);
    });
};
