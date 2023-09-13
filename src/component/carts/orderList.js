import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, data, icons, images} from '../../constants';
const {width, height} = Dimensions.get('window');

const OrderList = ({image, orderid, heading, qty, deliverydate, price}) => {
  return (
    <View style={styles.box}>
      <Image source={image} style={styles.tabimg} />
      <View>
        <Text style={styles.orderid}>Order Id : {orderid}</Text>
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.row}>
          <Text style={styles.qty}>Qty:{qty}</Text>
          <View style={styles.borderright}></View>
          <Text style={styles.qty}>Delivery at :</Text>
          <Text style={styles.greentext}>{deliverydate}</Text>
        </View>
        <Text style={styles.rupee}>₹{price}</Text>
      </View>
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.gray10,
    paddingVertical: height * 0.015,
    marginVertical: height * 0.008,
  },
  row: {
    flexDirection: 'row',
  },
  tabimg: {
    width: width * 0.3,
    height: height * 0.12,
    resizeMode: 'cover',
  },
  orderid: {
    color: COLORS.gray70,
    fontSize: 13,
    ...FONTS.fiveHundred,
    width: width * 0.6,
    marginBottom: -4,
  },
  borderright: {
    borderRightWidth: 1,
    borderColor: COLORS.black,
    height: height * 0.018,
    marginTop: 2,
    marginHorizontal: width * 0.02,
  },
  qty: {
    color: COLORS.gray70,
    fontSize: 13,
    ...FONTS.fiveHundred,
  },
  greentext: {
    color: COLORS.green,
    fontSize: 13,
    ...FONTS.sixHundred,
  },
  heading: {
    color: COLORS.black,
    fontSize: 13,
    ...FONTS.sixHundred,
    height: height * 0.042,
    width: width * 0.6,
  },
  rupee: {
    color: COLORS.black,
    fontSize: 14,
    ...FONTS.sixHundred,
  },
});
