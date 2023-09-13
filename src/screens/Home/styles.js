import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  flatlistBox: {
    width: width * 0.92,
    alignSelf: 'center',
  },
  apkaapnaBox: {
    paddingVertical: height * 0.02,
    marginVertical: height * 0.01,
    alignSelf: 'center',
    width: width,
    backgroundColor: '#F9F6EA',
  },
  apkaapna: {
    color: COLORS.black,
    fontSize: 14,
    ...FONTS.sixHundred,
    alignSelf: 'center',
  },
  oneImg: {
    width: width,
    height: height * 0.24,
    resizeMode: 'stretch',
    alignSelf: 'center',
    borderRadius: 0,
    marginVertical: height * 0.015,
  },

  explorebox: {
    paddingVertical: height * 0.02,
    marginTop: height * 0.01,
    alignSelf: 'center',
    width: width,
    backgroundColor: '#DB3A3E78',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  exploreimg: {
    height: width * 0.4,
    width: width * 0.3,
    borderRadius: 8,
    resizeMode: 'strecth',
  },
  exploretitle: {
    fontSize: 14,
    ...FONTS.sixHundred,
    color: COLORS.black,
    alignSelf: 'center',
    width: width * 0.5,
    textAlign: 'center',
  },
  exploretitle2: {
    fontSize: 11,
    ...FONTS.fourHundred,
    color: COLORS.black,
    alignSelf: 'center',
    width: width * 0.5,
    textAlign: 'center',
    marginTop: height * 0.006,
  },

  howitwork: {
    color: COLORS.black,
    fontSize: 15,
    ...FONTS.sixHundred,
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  howworkBox: {
    paddingVertical: height * 0.02,
    marginVertical: height * 0.015,
    alignSelf: 'center',
    width: width * 0.6,
    elevation: 2,
    backgroundColor: COLORS.white,
    // borderWidth: 1,
    // borderColor: COLORS.gray20,
    borderRadius: 10,
  },
  howworkimg: {
    height: width * 0.4,
    width: width * 0.4,
    borderRadius: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  howworktitle: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    alignSelf: 'center',
    marginTop: height * 0.016,
    height: height * 0.05,
    width: width * 0.5,
    textAlign: 'center',
  },
  howworktitle2: {
    fontSize: 13,
    ...FONTS.fourHundred,
    color: COLORS.black,
    alignSelf: 'center',
    width: width * 0.5,
    textAlign: 'center',
    marginTop: height * 0.006,
    height: height * 0.11,
    lineHeight: 22,
  },
  tectimonialBox: {
    width: width * 0.7,
    alignSelf: 'center',
    marginTop: height * 0.04,
    paddingTop: height * 0.06,
    marginBottom: height * 0.03,
  },
  tectimonialboximg: {
    height: width * 0.27,
    width: width * 0.27,
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: COLORS.white,
  },
  tectimonialimg: {
    height: width * 0.27,
    width: width * 0.27,
    borderRadius: 100,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  tectimonialBox2: {
    elevation: 3,
    width: width * 0.7,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingTop: height * 0.06,
    paddingBottom: height * 0.02,
  },
  tectimonialtitle: {
    fontSize: 15,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    alignSelf: 'center',
    marginTop: height * 0.016,
    width: width * 0.5,
    textAlign: 'center',
  },
  tectimonialtitle2: {
    fontSize: 13,
    ...FONTS.fourHundred,
    color: COLORS.black,
    alignSelf: 'center',
    width: width * 0.5,
    textAlign: 'center',
    marginTop: height * 0.01,
    lineHeight: 25,
    height: height * 0.18,
  },
  star: {
    marginVertical: height * 0.008,
  },
});