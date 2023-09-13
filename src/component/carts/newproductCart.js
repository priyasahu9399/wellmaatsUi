import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import Button from './../Button/index';

const {width, height} = Dimensions.get('window');

const NewProductCart = ({
  image,
  title,
  gst,
  subtitle,
  price,
  rate,
  ratings,
  onPressimg,
  off,
  marginleft,
  onPresscart,
  btnStyle,
}) => {
  const [heart, setHeart] = useState(false);
  const [redbtn, setRedbtn] = useState(false);
  return (
    <View>
      <View style={[styles.main_Box, marginleft]}>
        <TouchableOpacity
          style={styles.heartbox}
          onPress={() => setHeart(!heart)}>
          {!heart ? (
            <Image source={icons.heart} style={styles.heart} />
          ) : (
            <Image
              source={icons.heart}
              style={[styles.heart, {tintColor: COLORS.primary}]}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.image}
          onPress={onPressimg}
          activeOpacity={0.5}>
          <Image source={image} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressimg} style={styles.bottomBox}>
          <Text numberOfLines={2} style={styles.heading}>
            {title}
          </Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.row}>
            <View style={styles.ratebox}>
              <Text style={styles.rate}>{rate}</Text>
              <Image source={icons.fillstar} style={styles.star} />
            </View>
            <Text style={styles.ratings}>{ratings}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.mrp}>MRP</Text>
            <Text style={styles.mrpprice}>₹{price}</Text>
            <Text style={styles.off}>₹{off} OFF</Text>
            <Text style={styles.price}>₹{price}</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginBottom: height * 0.01}}>
          <Button
            children="Add to cart"
            aadtocartBtn
            btnStyle={btnStyle}
            onPress={onPresscart}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_Box: {
    width: width * 0.47,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginRight: width * 0.015,
    elevation: 3,
    marginBottom: height * 0.01,
  },
  image: {
    width: width * 0.3,
    height: height * 0.15,
    resizeMode: 'contain',
    borderRadius: 8,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.004,
  },
  bottomBox: {
    paddingHorizontal: width * 0.02,
    // borderWidth:1
  },
  heading: {
    color: COLORS.black,
    fontSize: 12,
    width: width * 0.41,
    ...FONTS.fiveHundred,
  },
  ratings: {
    color: COLORS.black,
    fontSize: 11,
    width: width * 0.2,
    ...FONTS.fiveHundred,
  },
  ratebox: {
    width: width * 0.12,
    backgroundColor: COLORS.red,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: width * 0.003,
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: width * 0.02,
  },
  rate: {
    color: COLORS.white,
    fontSize: 12,
    ...FONTS.fiveHundred,
    marginBottom: -3,
    marginRight: width * 0.015,
  },
  star: {
    width: width * 0.028,
    height: height * 0.014,
    resizeMode: 'stretch',
    tintColor: COLORS.white,
  },
  heartbox: {
    width: width * 0.07,
    height: height * 0.04,
    resizeMode: 'contain',
    position: 'absolute',
    right: 5,
    top: 5,
    alignItems: 'center',
  },
  heart: {
    width: width * 0.05,
    height: height * 0.04,
    resizeMode: 'contain',
  },
  subtitle: {
    color: COLORS.black,
    fontSize: 11,
    ...FONTS.fiveHundred,
    width: width * 0.41,
  },
  mrp: {
    color: COLORS.gray60,
    fontSize: 9.5,
    ...FONTS.fiveHundred,
  },
  mrpprice: {
    color: COLORS.gray60,
    fontSize: 9.5,
    ...FONTS.fiveHundred,
    width: width * 0.12,
    textDecorationLine: 'line-through',
  },
  off: {
    color: COLORS.red,
    fontSize: 9.5,
    ...FONTS.sixHundred,
    width: width * 0.12,
  },
  price: {
    color: COLORS.black,
    fontSize: 11,
    ...FONTS.sixHundred,
    width: width * 0.15,
  },
});
export default NewProductCart;
