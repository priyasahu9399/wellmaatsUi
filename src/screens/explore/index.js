import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import {COLORS, data, icons, images} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import NewProductCart from './../../component/carts/newproductCart';
import HeadingSeeAll from './../../component/carts/headingSeeall';
import HomeSlider from './../../component/slider/homeAutoscrollslider';
import Category from './../../component/carts/categorycart';
import SearchBox from './../../component/InputText/search';
import Filter from './../filter/index';
import Cart from './../Cart/index';
const {height, width} = Dimensions.get('window');

const Explore = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <SearchBox
        disabled={true}
        placeholder={'Search medicine'}
        searchStyle={{marginBottom: height * 0.01}}
        onPressfilter={() => navigation.navigate('Filter')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <HeadingSeeAll heading="Category" />
          <View>
            <FlatList
              data={data.categorylist}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-around'}}
              renderItem={({item, index}) => (
                <Category img={item.img} text={item.text} />
              )}
            />
          </View>
        </View>
        <HomeSlider
          datalist={data.homeslidersecondlist}
          scrollimgstyle={{
            width: width * 0.94,
            height: height * 0.19,
            borderRadius: 0,
          }}
        />
        <View style={{backgroundColor: '#A6F4F326', marginTop: height * 0.02}}>
          <HeadingSeeAll heading="New Arrival" seeAll marginzero />
          <FlatList
            data={data.NewProductCartdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <NewProductCart
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                ratings={item.ratings}
                rate={item.rate}
                price={item.price}
                off={item.off}
                marginleft={{marginLeft: index == 0 ? width * 0.03 : 3}}
                onPressimg={() => navigation.navigate('ProductDetail')}
                onPresscart={() => navigation.navigate('Cart')}
              />
            )}
          />

          <HeadingSeeAll heading="90% Off Order Now" seeAll marginzero />
          <FlatList
            data={data.NewProductCartdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <NewProductCart
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                ratings={item.ratings}
                rate={item.rate}
                price={item.price}
                off={item.off}
                marginleft={{marginLeft: index == 0 ? width * 0.03 : 3}}
                onPressimg={() => navigation.navigate('ProductDetail')}
                onPresscart={() => navigation.navigate('Cart')}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
