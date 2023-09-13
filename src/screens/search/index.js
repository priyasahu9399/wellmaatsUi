import React, {useState} from 'react';
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
import Filter from './../filter/index';
import NewProductCart from './../../component/carts/newproductCart';
const {height, width} = Dimensions.get('window');

const Search = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [redbtn, setRedbtn] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <SearchBox
        disabled={true}
        searchbox
        placeholder={'Search medicine'}
        onPressfilter={() => navigation.navigate('Filter')}
        searchStyle={{marginBottom: height * 0.015}}
      />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center'}}>
          <FlatList
            data={data.NewProductCartdata}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            // columnWrapperStyle={{alignSelf: 'center'}}
            renderItem={({item, index}) => (
              <NewProductCart
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                ratings={item.ratings}
                rate={item.rate}
                price={item.price}
                off={item.off}
                marginleft={{marginLeft: width * 0.002}}
                onPressimg={() => navigation.navigate('ProductDetail')}
                // onPresscart={() => setRedbtn(!redbtn)}
                // btnStyle={
                // redbtn == true
                // ? {backgroundColor: COLORS.red}
                // : {backgroundColor: COLORS.green}
                // }
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
