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
import OfferNotificationCart from './../../component/offernotification/index';

const {height, width} = Dimensions.get('window');

const AllReview = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <View style={styles.innercontainer}>
        <FlatList
          data={data.OfferNotificationCartlist}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <OfferNotificationCart
              text1={item.text1}
              text2={item.text2}
              image={item.img}
              profileimg
            />
          )}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AllReview);
