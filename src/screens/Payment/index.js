import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import RazorpayCheckout from 'react-native-razorpay';
import React, {useState} from 'react';
import styles from './styles';
import Modal from 'react-native-modal';
import {icons, images, COLORS} from '../../constants';
import Button from './../../component/Button/index';
const {height, width} = Dimensions.get('window');

const Payment = () => {
  const [radio, setRadio] = useState(1);

  const Rozarpayonline = () => {
    var options = {
      description: 'Credits towards consultation',
      // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_sRLd371Eatsnrl', // Your api key
      amount: '5000',
      name: 'Priya sahu',
      prefill: {
        contact: '9399329654',
      },
      theme: {color: COLORS.red},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  const [isCollapsed, setisCollapsed] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View
          style={[
            styles.viewallbox,
            {height: isCollapsed ? height * 0.07 : ''},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>
              3 Product , ₹758.00 Product for Buy Now
            </Text>

            <TouchableOpacity onPress={() => setisCollapsed(!isCollapsed)}>
              <Text style={styles.text2}>View all</Text>
            </TouchableOpacity>
          </View>

          <Collapsible collapsed={isCollapsed}>
            <Text style={styles.text1}>
              ₹758.00 In this Product for Buy Now
            </Text>
          </Collapsible>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setRadio(1), Rozarpayonline();
          }}
          style={styles.pymentBox}>
          <Image source={icons.phonepy} style={styles.pymtIcon} />
          <Text style={styles.pymtname}>Online</Text>
          <View style={styles.radioBox}>
            {radio === 1 && <Text style={styles.radioInner}></Text>}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setRadio(2)}
          style={styles.pymentBox}>
          <Image source={icons.cashon} style={styles.pymtIcon} />
          <Text style={styles.pymtname}> Cash On Delivery</Text>
          <View style={styles.radioBox}>
            {radio === 2 && <Text style={styles.radioInner}></Text>}
          </View>
        </TouchableOpacity>

        <Button
          children="Payment"
          mediumbtn
          btnStyle={{alignSelf: 'center', marginTop: height * 0.05}}
        />
      </ScrollView>
    </View>
  );
};

export default Payment;
