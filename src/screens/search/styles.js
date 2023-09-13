import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#A6F4F326',
    flex: 1,
  },
  innercontainer: {
    backgroundColor: '#A6F4F326',
    alignSelf: 'center',
    width: width * 0.96,
  },
});
