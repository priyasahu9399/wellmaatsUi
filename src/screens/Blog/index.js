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
import BlogCart from './../../component/carts/blogcart';
import SearchBox from './../../component/InputText/search';
import Filter from './../filter/index';
const {height, width} = Dimensions.get('window');
import Share from 'react-native-share';

const Blog = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const share = () => {
    const options = {
      message: 'hello dear',
      url: 'http://localhost:254',
      email: 'priyasahu833242@gmail.com',
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />

      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <SearchBox
          placeholder={'Search Blog'}
          onPressfilter={() => navigation.navigate('Filter')}
        />

        <Text style={styles.blog}>20 Blog</Text>
        {data.bloglist.map((item, index) => (
          <BlogCart
            text1={item.text1}
            text2={item.text2}
            image={item.img}
            onpressshare={share}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
