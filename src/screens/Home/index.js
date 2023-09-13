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
  TextInput,
} from 'react-native';
import {COLORS, data, icons, images} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import Button from './../../component/Button/index';
import OfferNotificationCart from './../../component/offernotification/index';
import PaymentHistory from './../paymentHistory/index';
import HeadingSeeAll from './../../component/carts/headingSeeall';
import HomeSlider from './../../component/slider/homeAutoscrollslider';
import NewProductCart from './../../component/carts/newproductCart';
import Category from './../../component/carts/categorycart';
import Stars from 'react-native-stars';
import SearchBox from './../../component/InputText/search';
import Filter from './../filter/index';
import Search from './../search/index';
import Cart from './../Cart/index';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [redbtn, setRedbtn] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox
          disabled={false}
          editable={false}
          searchbox
          placeholder={'Search medicine'}
          onPressfilter={() => navigation.navigate('Filter')}
          onPresssearch={() => navigation.navigate('Search')}
        />
        <HomeSlider datalist={data.homesliderlist} />
        <View>
          <HeadingSeeAll heading="Category" />
          <View>
            <FlatList
              data={data.categorylist}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <Category img={item.img} text={item.text} />
              )}
            />
          </View>
        </View>
        <HomeSlider
          datalist={data.homeslidersecondlist}
          scrollimgstyle={{
            width: width * 0.94,
            height: height * 0.19,
            borderRadius: 0,
          }}
        />
        <View style={{backgroundColor: '#A6F4F326', marginTop: height * 0.02}}>
          <HeadingSeeAll
            heading="New Arrival"
            seeAll
            onPress={() => navigation.navigate('BodyCare')}
          />
          <FlatList
            data={data.NewProductCartdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <NewProductCart
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                ratings={item.ratings}
                rate={item.rate}
                price={item.price}
                off={item.off}
                marginleft={{marginLeft: index == 0 ? width * 0.03 : 3}}
                onPressimg={() => navigation.navigate('ProductDetail')}
                onPresscart={() => navigation.navigate('Cart')}
                // btnStyle={
                //   redbtn == true
                //     ? {backgroundColor: COLORS.red}
                //     : {backgroundColor: COLORS.green}
                // }
                // onPressimg
              />
            )}
          />
        </View>

        <TouchableOpacity activeOpacity={0.6}>
          <Image source={images.home1} style={styles.oneImg} />
        </TouchableOpacity>
        <View style={{backgroundColor: '#A6F4F326'}}>
          <HeadingSeeAll heading="Haircare" seeAll />
          <FlatList
            data={data.NewProductCartdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <NewProductCart
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                ratings={item.ratings}
                rate={item.rate}
                price={item.price}
                off={item.off}
                marginleft={{marginLeft: index == 0 ? width * 0.03 : 3}}
                // onPresscart
                onPressimg={() => navigation.navigate('ProductDetail')}
                onPresscart={() => navigation.navigate('Cart')}
              />
            )}
          />
        </View>
        <View style={{backgroundColor: '#A6F4F326', marginTop: height * 0.02}}>
          <HeadingSeeAll heading="Bodycare" seeAll />
          <FlatList
            data={data.NewProductCartdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <NewProductCart
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                ratings={item.ratings}
                rate={item.rate}
                price={item.price}
                off={item.off}
                marginleft={{marginLeft: index == 0 ? width * 0.03 : 3}}
                // onPresscart
                onPressimg={() => navigation.navigate('ProductDetail')}
                onPresscart={() => navigation.navigate('Cart')}
              />
            )}
          />
        </View>

        <TouchableOpacity activeOpacity={0.6}>
          <Image source={images.home3} style={styles.oneImg} />
        </TouchableOpacity>
        <View style={{backgroundColor: '#A6F4F326'}}>
          <HeadingSeeAll heading="Skincare" seeAll />
          <FlatList
            data={data.NewProductCartdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <NewProductCart
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                ratings={item.ratings}
                rate={item.rate}
                price={item.price}
                off={item.off}
                marginleft={{marginLeft: index == 0 ? width * 0.03 : 3}}
                // onPresscart
                onPressimg={() => navigation.navigate('ProductDetail')}
                onPresscart={() => navigation.navigate('Cart')}
              />
            )}
          />
        </View>

        <View>
          <View style={styles.explorebox}>
            <Image source={images.dr} style={styles.exploreimg} />
            <View>
              <Text style={styles.exploretitle}>Be healthy</Text>
              <Text style={styles.exploretitle2}>
                Get regular exercise and control your weight.
              </Text>
              <Button
                children="Explore Now"
                roundsmallbtn
                btnStyle={{alignSelf: 'center'}}
              />
            </View>
          </View>
          <View style={styles.explorebox}>
            <View>
              <Text style={styles.exploretitle}>Skincare</Text>
              <Text style={styles.exploretitle2}>
                Filters are great, but great skin is better{' '}
              </Text>
              <Button
                children="Explore Now"
                roundsmallbtn
                btnStyle={{alignSelf: 'center'}}
              />
            </View>
            <Image source={images.drprofile} style={styles.exploreimg} />
          </View>
        </View>

        <View style={styles.apkaapnaBox}>
          <Text style={styles.apkaapna}>Aapka Apna Ayurveda</Text>
          <Text style={styles.apkaapna}>Wellmaats - The Ayurveda co.</Text>
          <Button
            children="Take Self Assessment "
            roundbtn
            btnStyle={{
              alignSelf: 'center',
              width: width * 0.8,
              marginTop: height * 0.012,
            }}
            onPress={() => navigation.navigate('SelfAssessment')}
          />
          <Button
            children=" Consult Ayurveda Expert"
            roundbtn
            btnStyle={{alignSelf: 'center', width: width * 0.8}}
            onPress={() => navigation.navigate('Consultexpert')}
          />
        </View>
        <View style={{backgroundColor: '#C8F5F426'}}>
          <Text style={styles.howitwork}>How it work</Text>
          {data.howitworklist.map((item, index) => (
            <TouchableOpacity activeOpacity={0.6} style={styles.howworkBox}>
              <Image source={item.img} style={styles.howworkimg} />
              <Text style={styles.howworktitle}>{item.text1}</Text>
              <Text style={styles.howworktitle2}>{item.text2}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity activeOpacity={0.6}>
          <Image source={images.home2} style={styles.oneImg} />
        </TouchableOpacity>

        <Text style={styles.howitwork}>Tactimonials</Text>

        {data.tectimonial.map((item, index) => (
          <View style={styles.tectimonialBox}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.tectimonialboximg}>
              <Image source={item.img} style={styles.tectimonialimg} />
            </TouchableOpacity>

            <View style={styles.tectimonialBox2}>
              <Text style={styles.tectimonialtitle}>{item.name}</Text>

              <View style={styles.star}>
                <Stars
                  default={5}
                  count={5}
                  starSize={13}
                  spacing={5}
                  fullStar={icons.fillstar}
                  emptyStar={icons.star}
                  disabled={true}
                />
              </View>
              <Text style={styles.tectimonialtitle2}>{item.title}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
