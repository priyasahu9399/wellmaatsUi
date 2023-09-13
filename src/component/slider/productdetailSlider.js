import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {icons, images} from '../../constants';
import {FONTS, COLORS} from '../../constants';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get('window');

const ProductDetailSlider = ({
  onPress,
  datalist,
  scrollimgstyle,
  getHomedata,
  source,
  onPressshare,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef(); //null ref a raha

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    goNextSlide();
    if (currentSlideIndex == datalist?.length - 1) {
      ref?.current?.scrollToOffset(0);
      setCurrentSlideIndex(0);
    }
  }, 2500);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != datalist?.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const [heart, setHeart] = useState(false);

  return (
    <View>
      <View>
        <View style={styles.row}>
          <TouchableOpacity onPress={onPressshare} style={styles.sharebox}>
            <Image source={icons.share} style={styles.share} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setHeart(!heart)}
            activeOpacity={0.6}
            style={styles.heartbox}>
            {!heart ? (
              <Image source={icons.heart} style={styles.heart} />
            ) : (
              <Image
                source={icons.heart}
                style={[styles.heart, {tintColor: COLORS.primary}]}
              />
            )}
          </TouchableOpacity>
        </View>
        <FlatList
          data={datalist}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          ref={ref}
          renderItem={({item, index}) => (
            <View style={styles.scrollBox}>
              <View style={styles.scrollimgBox}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  key={index}
                  onPress={onPress}>
                  <Image
                    source={item.img}
                    style={[styles.scrollImage, scrollimgstyle]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.dotbox}>
        {datalist?.map((item, index) => (
          <View
            key={index}
            style={{
              ...styles.dotstyle,
              backgroundColor:
                currentSlideIndex === index ? COLORS.green : COLORS.gray20,
            }}></View>
        ))}
      </View>
    </View>
  );
};

export default ProductDetailSlider;
const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    borderColor: COLORS.gray10,
    alignSelf: 'center',
  },
  row: {
    width: width * 0.84,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
    marginTop: height * 0.014,
  },
  scrollBox: {
    width: width,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  scrollimgBox: {
    width: width * 0.9,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingTop: height * 0.05,
    height: height * 0.29,
    borderColor: COLORS.gray10,
  },
  scrollImage: {
    width: width * 0.65,
    height: height * 0.21,
    resizeMode: 'stretch',
    alignSelf: 'center',
    borderRadius: 8,
  },

  dotbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
  },
  dotstyle: {
    height: width * 0.022,
    width: width * 0.022,
    marginRight: width * 0.01,
    borderRadius: 10,
  },
  heartbox: {
    width: width * 0.08,
    height: height * 0.04,
    resizeMode: 'contain',
    position: 'absolute',
    right: 5,
    top: 5,
    alignItems: 'center',
  },
  sharebox: {
    width: width * 0.08,
    height: width * 0.077,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginTop: height * 0.008,
  },
  share: {
    width: width * 0.04,
    height: height * 0.04,
    resizeMode: 'contain',
  },
  heart: {
    width: width * 0.05,
    height: height * 0.04,
    resizeMode: 'contain',
  },
});
