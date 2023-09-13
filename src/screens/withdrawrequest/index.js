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

const {height, width} = Dimensions.get('window');

const WithDrawRequest = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <View style={styles.innercontainer}>
        <Text style={styles.head}>
          Enter money as much as you want to withdraw
        </Text>

        <Text style={styles.rupe}>₹20</Text>
        <View style={styles.row}>
          <Button
            children="Cancle"
            mediumbtn
            btnStyle={{
              borderWidth: 0.6,
              borderColor: COLORS.red,
              backgroundColor: COLORS.white,
            }}
            btntextStyle={{color: COLORS.red}}
          />
          <Button children="Withdraw" mediumbtn />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WithDrawRequest);
