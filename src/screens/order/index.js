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
import {COLORS, FONTS, data, icons, images} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import BodyCareCart from './../../component/carts/bodycarecart';
import SearchBox from './../../component/InputText/search';
import Button from './../../component/Button/index';
import PriceDetail from './../../component/carts/pricedetail';
import Address from './../../component/carts/addresscart';
import AddAddress from './../addAddress/index';
import ProfileBox from './../../component/carts/profilecart';
import OrderList from './../../component/carts/orderList';
import Tracking from "./../tracking/index";
const {height, width} = Dimensions.get('window');
const Order = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.greentext}>Order is successfully placed !</Text>
        <View>
          {data.OrderList.map((item, index) => (
            <OrderList
              image={item.image}
              orderid={item.orderid}
              heading={item.heading}
              qty={item.qty}
              deliverydate={item.deliverydate}
              price={item.price}
            />
          ))}
        </View>

        <PriceDetail
          quantityprice="1053"
          discount="106"
          coupon="0"
          charge="40"
          tax="50"
          total="1043"
          save="176"
          headingmain="Order summery"
          onpressAdd={() => navigation.navigate('Home')}
        />
        <Address
          firstname="Delivery at Home"
          lastname="Rohan kumar"
          address="ordanace"
          apartment="itarsi"
          area="narmadapuram"
          state="mp"
          country="itarsi"
          city="pathrota"
          pincode="461122"
          mobile="9399986524"
        />
        <Image source={images.orderdone} style={styles.orderdone} />

        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.downloadbox}>
            <Text style={styles.text}>Download Invoice</Text>
            <Image source={icons.download} style={styles.downloadicon} />
          </View>
        </TouchableOpacity>

        <ProfileBox
          profileimage={icons.order}
          text="Tracking"
          profileBoxStyle={styles.profileBoxStyle}
          onPress={() => navigation.navigate('Tracking')}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
