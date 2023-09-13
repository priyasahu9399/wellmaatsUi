import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  logo: {
    width: width * 0.6,
    height: height * 0.17,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: height * 0.02,
  },
  error: {
    color: COLORS.primary,
    fontSize: 11,
    ...FONTS.fourHundred,
    marginLeft: width * 0.015,
  },
  btn: {
    marginTop: height * 0.25,
    marginBottom: height * 0.02,
    alignSelf: 'center',
  
  },
});
