import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

const BlogCart = ({text1, text2, image, blogStyle, onPress , onpressshare}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={[styles.box1, blogStyle]}>
        <View style={styles.imgbox}>
          <Image source={image} style={styles.img} />
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text numberOfLines={2} style={styles.text1}>
              {text1}
            </Text>
            <TouchableOpacity onPress={onpressshare} style={styles.sharebox}>
              <Image source={icons.share} style={styles.share} />
            </TouchableOpacity>
          </View>
          <Text numberOfLines={2} style={styles.text2}>
            {text2}
          </Text>

          <TouchableOpacity activeOpacity={0.5} style={styles.readbox}>
            <Text style={styles.read}>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BlogCart;

const styles = StyleSheet.create({
  box1: {
    width: SIZES.width * 0.93,
    flexDirection: 'row',
    marginBottom: SIZES.height * 0.02,
    alignSelf: 'center',
    paddingVertical: SIZES.height * 0.01,
    paddingHorizontal: SIZES.width * 0.02,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray20,
    backgroundColor: COLORS.white,
  },

  img: {
    height: SIZES.height * 0.142,
    width: SIZES.width * 0.3,
    resizeMode: 'stretch',
    backgroundColor: '#0C6B373D',
    borderRadius: 8,
    marginRight: SIZES.width * 0.02,
  },
  sharebox: {
    height: SIZES.width * 0.08,
    width: SIZES.width * 0.083,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.gray20,
  },
  share: {
    height: SIZES.height * 0.02,
    width: SIZES.width * 0.05,
    resizeMode: 'contain',
  },
  readbox: {
    height: SIZES.height * 0.044,
    width: SIZES.width * 0.27,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.gray10,
    marginTop: SIZES.height * 0.012,
  },
  read: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: -1,
  },

  text1: {
    width: SIZES.width * 0.48,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: -3,
    height: SIZES.height * 0.048,
  },
  text2: {
    width: SIZES.width * 0.5,
    ...FONTS.fourHundred,
    color: COLORS.gray90,
    fontSize: 12.5,
    marginBottom: -3,
    height: SIZES.height * 0.045,
  },
});
