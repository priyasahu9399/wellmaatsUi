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
import Button from './../../component/Button/index';
import InputBox from './../../component/InputText/index';
import CheckBox from 'react-native-check-box';
import DeliveryAddress from "./../addressDelivery/index";


const {height, width} = Dimensions.get('window');

const AddAddress = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [isSelected, setisSelected] = useState('false');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <InputBox placeholder="Your name" />
        <InputBox placeholder="Email-id" keyboardType="email-address" />
        <InputBox
          placeholder="Mobile no"
          keyboardType="numeric"
          maxLength={10}
        />
        <InputBox placeholder="State" />
        <InputBox placeholder="City" />
        <InputBox placeholder="Pincode" keyboardType="numeric" maxLength={6} />
        <InputBox placeholder="Area/ street/ village " />
        <InputBox placeholder="Flat/ House no" />
        <CheckBox
          isChecked={!isSelected}
          onClick={() => setisSelected(!isSelected)}
          checkedCheckBoxColor={COLORS.primary}
          uncheckedCheckBoxColor={COLORS.gray50}
          rightTextView={
            <Text style={styles.checktext}>
              Make this is my default address.
            </Text>
          }
          style={{marginLeft: width * 0.01}}
        />
        <Button
          children="Add address"
          mediumbtn
          btnStyle={{alignSelf: 'center', marginTop: height * 0.04}}
          onPress={() => navigation.navigate('DeliveryAddress')}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);
