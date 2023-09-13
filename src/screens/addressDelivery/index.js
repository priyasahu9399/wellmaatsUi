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
import Payment from './../Payment/index';
import AddressCart from './../../component/carts/address';
import AddAddress from './../addAddress/index';

const {height, width} = Dimensions.get('window');

const DeliveryAddress = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [isSelected, setisSelected] = useState('false');
  const [radioBtnid, setradioBtnid] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={data.AddressCartdata}
          renderItem={({item, index}) => (
            <AddressCart
              firstname={item?.firstname}
              lastname={item?.lastname}
              mobile={item?.mobile}
              address={item?.address}
              apartment={item?.apartment}
              area={item?.area}
              city={item?.city}
              country={item?.country}
              state={item?.state}
              pincode={item?.pinCode}
              onPress={() => {
                setradioBtnid(item?.id);
              }}
              checked={radioBtnid == item?.id ? true : false}
              onPressedit={() => navigation.navigate('AddAddress')}

              // onPressaddress={() => navigation?.navigate('SaveAddress')}
            />
          )}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('AddAddress')}
          activeOpacity={0.5}
          style={styles.addmorebox}>
          <Image source={icons.plus} style={styles.plus} />
          <Text style={styles.addmore}>Add Address</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddress);
