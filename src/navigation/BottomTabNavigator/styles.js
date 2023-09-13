import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from './../../constants';
export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconbox: {
    width: SIZES.width * 0.13,
    height: SIZES.width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.white,
    marginBottom: SIZES.height * -0.02,
  },
  icon_set: {
    width: SIZES.width * 0.055,
    height: SIZES.height * 0.03,
    resizeMode: 'contain',
  },
  tableBar: {
    height: SIZES.height * 0.074,
    backgroundColor: COLORS.green,
  },
  tablebal: {
    ...FONTS.sixHundred,
    fontSize: 11,
    color: COLORS.white,
  },
  headerstyle: {
    elevation: 0,
  },
  bell: {
    width: SIZES.width * 0.05,
    height: SIZES.height * 0.04,
    resizeMode: 'contain',
    marginRight: SIZES.width * 0.05,
  },
  logo: {
    width: SIZES.width * 0.34,
    height: SIZES.height * 0.08,
    resizeMode: 'stretch',
  },

  headerTitle: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 19,
  },
});
