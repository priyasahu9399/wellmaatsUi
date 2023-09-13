import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

const InputBox = ({
  placeholder,
  search,
  onPressIn,
  maxLength,
  keyboardType,
  label,
  onChangeText,
  value,
  editable,
  icon,
  multiline,
  textAlignVertical,
  numberOfLines,
  redlabel,
  labelStyle,
  inputboxstyle
  // errors,
}) => {
  return (
    <View>
      {label && (
        <Text
          style={[styles.label, labelStyle, redlabel && {color: COLORS.red}]}>
          {label}
        </Text>
      )}
      <View style={[styles.box1, inputboxstyle]}>
        <TextInput
          placeholder={placeholder}
          style={styles.placeholdera}
          onPressIn={onPressIn}
          maxLength={maxLength}
          editable={editable}
          keyboardType={keyboardType}
          placeholderTextColor={COLORS.gray30}
          onChangeText={onChangeText}
          value={value}
          multiline={multiline}
          textAlignVertical={textAlignVertical}
          numberOfLines={numberOfLines}
        />
        {icon && <Image source={icon} style={styles.icon} />}
      </View>
      {/* <View>{errors ? <Text style={styles.error}>{errors}</Text> : null}</View> */}
    </View>
  );
};
export default InputBox;

const styles = StyleSheet.create({
  box1: {
    // height: SIZES.height * 0.06,
    width: SIZES.width * 0.92,
    borderWidth: 1,
    borderColor: COLORS.gray20,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: SIZES.height * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  placeholdera: {
    ...FONTS.fiveHundred,
    fontSize: 13,
    paddingLeft: SIZES.width * 0.03,
    color: COLORS.black,
    marginBottom: -3,
    width: SIZES.width * 0.8,
  },
  label: {
    fontSize: 14.5,
    ...FONTS.sixHundred,
    color: COLORS.black,
    marginLeft: SIZES.width * 0.015,
  },
  icon: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.025,
    resizeMode: 'contain',
    tintColor: COLORS.gray60,
  },
  // error: {
  //   color: COLORS.primary,
  //   fontSize: 11,
  //   ...FONTS.fourHundred,
  //   marginLeft: SIZES.width * 0.024,
  //   // marginBottom: SIZES.height * 0.04,
  // },
});
