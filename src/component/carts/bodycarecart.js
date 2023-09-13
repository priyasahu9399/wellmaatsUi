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

const BodyCareCart = ({
  image,
  title,
  subtitle,
  price,
  rate,
  ratings,
  onPressimg,
  off,
  marginleft,
  onPresscart,
  onPressbuy,
  btnStyle,
  onPressdecrement,
  onPressincrement,
  showincre,
  heartactive,
  onPressremove,
}) => {
  const [heart, setHeart] = useState(heartactive);
  const [redbtn, setRedbtn] = useState(false);
  const [incredecre, setIncredecre] = useState(1);
  // const [fav, setFav] = useState(false);

  return (
    <View style={[styles.main_Box, marginleft]}>
      <View>
        <TouchableOpacity
          style={styles.image}
          onPress={onPressimg}
          activeOpacity={0.5}>
          <Image
            source={image}
            style={[
              styles.image,
              showincre && {
                width: width * 0.28,
                height: height * 0.11,
              },
            ]}
          />
        </TouchableOpacity>
        {showincre && (
          <View style={styles.increbox}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                if (incredecre === 1) {
                  setIncredecre(1);
                } else {
                  setIncredecre(incredecre - 1);
                }
              }}>
              <Text
                style={[
                  styles.incredecretext,
                  {fontSize: 17, marginBottom: -5},
                ]}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={styles.incredecretext}>{incredecre}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setIncredecre(incredecre + 1)}>
              <Text style={[styles.incredecretext, {fontSize: 17}]}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.bottomBox}>
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
          style={{width: width * 0.52}}
          activeOpacity={0.5}
          onPress={onPressimg}>
          <Text numberOfLines={2} style={styles.heading}>
            {title}
          </Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {showincre ? null : (
            <View style={styles.row}>
              <View style={styles.ratebox}>
                <Text style={styles.rate}>{rate}</Text>
                <Image source={icons.fillstar} style={styles.star} />
              </View>
              <Text style={styles.ratings}>{ratings}</Text>
            </View>
          )}
          <View style={styles.row}>
            <Text style={styles.price}>₹{price}</Text>
            <Text style={styles.mrp}>MRP</Text>
            <Text style={styles.mrpprice}>₹{price}</Text>

            <Text style={styles.off}>₹{off} OFF</Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          {showincre ? (
            <Button
              children="Remove"
              iconbtn
              btnStyle={{marginRight: width * 0.02}}
              onPress={onPressremove}
            />
          ) : (
            <Button
              children="Add to cart"
              iconbtn
              iconbtnICON
              btnStyle={{marginRight: width * 0.02}}
              onPress={onPresscart}
            />
          )}

          <Button
            children="Buy now"
            iconbtn
            btnStyle={btnStyle}
            onPress={onPressbuy}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  increbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.lightpink,
    borderRadius: 5,
    height: height * 0.032,
    marginTop: height * -0.02,
  },
  incredecretext: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    width: width * 0.07,
    textAlign: 'center',
    marginBottom:-3
  },

  main_Box: {
    width: width * 0.93,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    elevation: 3,
    marginBottom: height * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {
    width: width * 0.3,
    height: height * 0.13,
    resizeMode: 'cover',
    borderRadius: 8,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.005,
  },
  bottomBox: {
    padding: width * 0.02,
    width: width * 0.63,
  },
  heading: {
    color: COLORS.black,
    fontSize: 12,
    width: width * 0.5,
    ...FONTS.fiveHundred,
    height: height * 0.047,
  },
  ratings: {
    color: COLORS.black,
    fontSize: 11,
    width: width * 0.22,
    ...FONTS.fiveHundred,
    marginBottom: -3,
  },
  ratebox: {
    width: width * 0.12,
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: width * 0.001,
    justifyContent: 'center',
    borderRadius: 3,
    marginRight: width * 0.04,
  },
  rate: {
    color: COLORS.white,
    fontSize: 12,
    ...FONTS.fiveHundred,
    marginBottom: -3,
    marginRight: width * 0.005,
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
    right: 10,
    top: 5,
    alignItems: 'center',
  },
  heart: {
    width: width * 0.05,
    height: height * 0.04,
    resizeMode: 'contain',
  },
  subtitle: {
    color: COLORS.gray60,
    fontSize: 11,
    ...FONTS.fiveHundred,
    width: width * 0.6,
    // height: height * 0.045,
  },
  mrp: {
    color: COLORS.gray60,
    fontSize: 11,
    ...FONTS.fiveHundred,
  },
  mrpprice: {
    color: COLORS.gray60,
    fontSize: 11,
    ...FONTS.fiveHundred,
    width: width * 0.14,
    textDecorationLine: 'line-through',
  },
  off: {
    color: COLORS.lightgreen,
    fontSize: 11,
    ...FONTS.sixHundred,
    width: width * 0.2,
  },
  price: {
    color: COLORS.black,
    fontSize: 13,
    ...FONTS.sixHundred,
    width: width * 0.15,
  },
});
export default BodyCareCart;
