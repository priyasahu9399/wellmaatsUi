import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, data} from '../../constants';
import {connect} from 'react-redux';
import styles from './styles';
import BodyCareCart from './../../component/carts/bodycarecart';
import Cart from './../Cart/index';
import Payment from "./../Payment/index";
const {height, width} = Dimensions.get('window');
const Favorite = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={styles.innercontainer}>
        <View>
          <FlatList
            data={data.NewProductCartdata}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <BodyCareCart
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                ratings={item.ratings}
                rate={item.rate}
                price={item.price}
                off={item.off}
                heartactive={true}
                onPresscart={() => navigation.navigate('Cart')}
                onPressbuy={() => navigation.navigate('Payment')}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
