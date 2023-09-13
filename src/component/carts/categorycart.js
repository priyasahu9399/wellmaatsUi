import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {icons, images, COLORS, FONTS, SIZES} from './../../constants';

const Category = ({img, text, categoryboxstyle, onPress}) => {
  return (
    <View style={[styles.categorybox, categoryboxstyle]}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <Image source={img} style={styles.categoryimg} />
      </TouchableOpacity>
      <Text style={styles.categoryText}>{text}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categorybox: {
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.4,
    marginLeft: SIZES.width * 0.04,
    marginBottom: SIZES.width * 0.02
  },
  categoryimg: {
    width: SIZES.width * 0.38,
    height: SIZES.height * 0.17,
    resizeMode: 'contain',
    backgroundColor: COLORS.skyblue,
    borderRadius: 10,
  },
  categoryText: {
    color: COLORS.black,
    fontSize: 13,
    textAlign: 'center',
    alignSelf: 'center',
    ...FONTS.fiveHundred,
    marginVertical: SIZES.height * 0.01,
  },
});
