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
import Filter from './../filter/index';
import Home from './../Home/index';
import DeliveryAddress from './../addressDelivery/index';
import OfferList from './../offerlist/index';
import Payment from './../Payment/index';
import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');
const Cart = ({navigation, route}) => {
  const off = route?.params?.text1;
  console.log('offer', off);
  const [isModalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <SearchBox
        placeholder={'Search BodyCare'}
        onPressfilter={() => navigation.navigate('Filter')}
        searchStyle={{marginBottom: height * 0.015}}
      />
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
              showincre
              onPressbuy={() => navigation.navigate('Payment')}
              onPressremove={() => setModalVisible(true)}
            />
          ))}
        </View>

        <View>
          <Modal
            isVisible={isModalVisible}
            animationIn={'fadeInDown'}
            backdropOpacity={0.2}>
            <View style={styles.modalbox}>
              <Text style={styles.modalhead}>
                Are you want to delete this Product
              </Text>
              <View style={styles.modalbtnrow}>
                <Button
                  children="No"
                  mediumbtn
                  iconbtn
                  btnStyle={{marginRight:width*.07}}
                  onPress={() => setModalVisible(false)}
                />
                <Button
                  children="Yes"
                  mediumbtn
                  btnStyle={{
                    width: width * 0.28,
                    height: height * 0.04,
                    borderRadius: 4,
                  }}
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </Modal>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('OfferList', {
              disabledbtn: false,
              page: 'Cart',
            })
          }
          style={styles.viewofferbox}>
          <Image source={icons.percent} style={styles.percent} />
          {off ? (
            <Text style={styles.viewoffertext}>{off}</Text>
          ) : (
            <Text style={styles.viewoffertext}>View best available offers</Text>
          )}
          <Image source={icons.rarrow} style={styles.arrow} />
        </TouchableOpacity>
        <PriceDetail
          quantityprice="1053"
          discount="106"
          coupon="0"
          charge="40"
          tax="50"
          total="1043"
          save="176"
          headingmain="Price detail"
          onpressAdd={() => navigation.navigate('Home')}
        />
        {show === true ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('AddAddress')}
            activeOpacity={0.5}
            style={styles.addmorebox}>
            <Image source={icons.plus} style={styles.plus} />
            <Text style={styles.addmore}>Add Address</Text>
          </TouchableOpacity>
        ) : (
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
            addressStyle={{marginBottom: height * 0.05}}
            onPresschange={() => navigation.navigate('DeliveryAddress')}
            Change="Change"
          />
        )}
      </ScrollView>
      <View style={styles.price_bottom}>
        <View>
          <Text style={styles.bottom_text1}>₹1043</Text>
          <TouchableOpacity>
            <Text style={styles.bottom_text2}>View price detail</Text>
          </TouchableOpacity>
        </View>
        <Button
          children="Buy Now"
          mediumbtn
          onPress={() => navigation.navigate('Payment')}
        />
      </View>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
