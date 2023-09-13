import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {data} from './../../constants';
import {images, icons} from './../../constants';
import styles from './styles';
import Button from './../../component/Button/index';
import SignIn from './../SignIn/index';

const {width, height} = Dimensions.get('window');
const OnboardingScreen = ({image, title, subTitle}) => {
  return (
    <View style={{width: width}}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  );
};

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != data?.OnBoardingData.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
        style={{marginRight: width * 0.05}}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={data.OnBoardingData}
        renderItem={({item, index}) => (
          <OnboardingScreen
            key={index}
            image={item?.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      />

      <View style={styles.dot_box}>
        {data.OnBoardingData.map((item, index) => {
          return (
            <View>
              <View
                key={item.id}
                style={[
                  styles.dot,
                  currentSlideIndex === item.id && {
                    backgroundColor: COLORS.black,
                    width: width * 0.09,
                  },
                ]}></View>
            </View>
          );
        })}
      </View>

      {currentSlideIndex === 3 ? (
        <Button
          children="Get Started"
          mediumbtn
          onPress={() => navigation.navigate('SignIn')}
          btnStyle={{marginBottom: height * 0.06, alignSelf: 'center'}}
        />
      ) : (
        <Button
          children="Next"
          mediumbtn
          onPress={() => goNextSlide()}
          btnStyle={{marginBottom: height * 0.06, alignSelf: 'center'}}
        />
      )}
    </View>
  );
};

export default Onboarding;
