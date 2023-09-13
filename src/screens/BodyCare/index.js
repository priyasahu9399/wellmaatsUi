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
import SearchBox from './../../component/InputText/search';
import BodyCareCart from './../../component/carts/bodycarecart';
import ProductDetail from './../productDetail/index';
import Cart from './../Cart/index';
const {height, width} = Dimensions.get('window');

const BodyCare = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <SearchBox placeholder={'Search BodyCare'} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.blog}>20 Products</Text>
        <View style={{alignSelf: 'center'}}>
          {data.NewProductCartdata.map((item, index) => (
            <BodyCareCart
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              ratings={item.ratings}
              rate={item.rate}
              price={item.price}
              off={item.off}
              heartactive={false}
              onPressimg={() => navigation.navigate('ProductDetail')}
              onPresscart={() => navigation.navigate('Cart')}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BodyCare);
