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
import HeadingSeeAll from './../../component/carts/headingSeeall';
import HomeSlider from './../../component/slider/homeAutoscrollslider';
import NewProductCart from './../../component/carts/newproductCart';
import Stars from 'react-native-stars';
import * as Progress from 'react-native-progress';
import InputBox from './../../component/InputText/index';
import OfferNotificationCart from './../../component/offernotification/index';
import ProductDetailSlider from './../../component/slider/productdetailSlider';
import Order from './../order/index';
import Cart from './../Cart/index';
import {Formik} from 'formik';
import * as yup from 'yup';
import Share from 'react-native-share';

const Listdata = [
  {
    id: 0,
    title: 'Discription',
  },
  {
    id: 1,
    title: 'Key Benifits',
  },
  {
    id: 2,
    title: 'Direction for use',
  },
  {
    id: 3,
    title: 'Safety Information',
  },
  {
    id: 4,
    title: 'Other Information',
  },
];

const {height, width} = Dimensions.get('window');

const ProductDetail = ({navigation, route}) => {
  const [pinCheck, setpinCheck] = useState('461122');

  const emailValidationSchema = yup.object().shape({
    pincode: yup.string().length(6).required('Sorry! we can’t delivere here.'),
  });

  const [loading, setLoading] = useState(false);
  const [redbtn, setRedbtn] = useState(false);
  const [switchs, setSwitchs] = useState(0);
  const off = route?.params?.text1;
  // console.log('offer product detail', off);
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
  // console.log('Listdata?.title', Listdata[0]?.title, Listdata[1]?.title);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductDetailSlider
          datalist={data.homesliderlist}
          onPressshare={share}
        />
        <View style={{marginLeft: width * 0.04}}>
          <Text style={styles.subtitle}>
            Healthawin DAILY RAPID Multivitamin + Omega 3, Vitamin, Minerals &
            probiotics with 42 Super Ingredients for Men and Women - 60 Capsules
          </Text>

          <View style={styles.row}>
            <View style={styles.ratebox}>
              <Text style={styles.rate}>4.5</Text>
              <Image source={icons.fillstar} style={styles.star} />
            </View>
            <Text style={styles.ratings}>987 ratings</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.price}>₹399</Text>
            <Text style={styles.mrp}>MRP</Text>
            <Text style={styles.mrpprice}>₹352</Text>
            <Text style={styles.off}>₹10% OFF</Text>
          </View>
          <Text style={[styles.mrp, {marginBottom: height * 0.01}]}>
            Include all taxes
          </Text>
        </View>
        <Text style={styles.heading}>Delivery to :</Text>
        <View>
          <Formik
            validationSchema={emailValidationSchema}
            initialValues={{pincode: ''}}
            onSubmit={values => console.error('values', values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <View
                  style={[
                    styles.inputBox,
                    touched.pincode &&
                      errors.pincode && {
                        borderColor: COLORS.red,
                      },
                  ]}>
                  <TextInput
                    placeholder="Enter Pincode"
                    placeholderTextColor={COLORS.gray30}
                    style={styles.placeholdera}
                    maxLength={6}
                    keyboardType="numeric"
                    onChangeText={handleChange('pincode')}
                    value={values.pincode}
                  />
                  <TouchableOpacity onPress={handleSubmit}>
                    {errors.pincode && touched.pincode ? (
                      <Image style={styles.iicon} source={icons.iicon} />
                    ) : (
                      <Text style={styles.available}>Check</Text>
                    )}
                  </TouchableOpacity>
                </View>
                {errors.pincode && touched.pincode && (
                  <Text style={styles.error}>{errors.pincode}</Text>
                )}
              </>
            )}
          </Formik>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('OfferList', {
              disabledbtn: false,
              page: 'ProductDetail',
            })
          }
          style={styles.viewofferbox}>
          <Image source={icons.percent} style={styles.percent} />
          {off ? (
            <Text style={styles.viewoffertext}>{off}</Text>
          ) : (
            <Text style={styles.viewoffertext}>View best available offers</Text>
          )}
          <TouchableOpacity>
            <Image source={icons.rarrow} style={styles.arrow} />
          </TouchableOpacity>
        </TouchableOpacity>
        <InputBox
          label="Write a review"
          placeholder="Share your experience "
          multiLine={true}
          numberOfLines={5}
          textAlignVertical="top"
          labelStyle={{marginLeft: width * 0.04, marginVertical: height * 0.01}}
        />
        <Button mediumbtn children="Submit" btnStyle={styles.btnstyle} />
        <FlatList
          data={data.OfferNotificationCartlist}
          renderItem={({item, index}) => (
            <OfferNotificationCart
              text1={item.text1}
              text2={item.text2}
              image={item.img}
              profileimg
            />
          )}
        />
        <TouchableOpacity>
          <Text style={styles.heading}>Read all reviews!</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Ratings :</Text>
        <View style={styles.starmainbox}>
          {data.ratinglist.map((item, index) => (
            <View style={styles.starbox}>
              <View style={styles.starstyle}>
                <Stars
                  default={item.rate}
                  spacing={5}
                  starSize={12}
                  count={item.count}
                  fullStar={icons.fillstar}
                  style={{alignSelf: 'flex-start'}}
                />
              </View>
              <Text style={styles.usercount}>{item.user} users</Text>
              <Progress.Bar
                progress={item.progress}
                width={width * 0.34}
                height={height * 0.01}
                borderRadius={12}
                borderColor="#F5F5F5"
                indeterminate={false}
                unfilledColor={COLORS.gray10}
              />
            </View>
          ))}
        </View>
        <HomeSlider
          datalist={data.homesliderlist}
          scrollimgstyle={{width: width, borderRadius: 0}}
        />
        <FlatList
          data={Listdata}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setSwitchs(item.id)}
              style={[
                styles.switchbox,
                switchs == index && {
                  backgroundColor: COLORS.red,
                  borderColor: COLORS.red,
                },
              ]}>
              <Text
                style={[
                  styles.switchtext,
                  switchs == index && {
                    color: COLORS.white,
                  },
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />

        {Listdata[1]?.title == 'Key Benifits' && (
          <View style={styles.dotrow}>
            <View style={styles.dot}></View>
            <Text style={styles.dotText}>
              COLIHENZ 500MG TABLET contains Citicoline which belongs to a group
              of medicines called Psychostimulants. COLIHENZ 500MG TABLET is
              used to treat cerebral insufficiency (such as dizziness, memory
              loss, poor circulation, disorientation) that occurs due to head
              trauma/brain injury in affected individuals.
            </Text>
          </View>
        )}

        {Listdata[0]?.title == 'Discription' && (
          <View>
            <View style={styles.dotrow}>
              <View style={styles.dot}></View>
              <Text style={styles.dotText}>
                COLIHENZ 500MG TABLET contains Citicoline which belongs to a
                group of medicines called Psychostimulants. COLIHENZ 500MG
                TABLET is used to treat cerebral insufficiency (such as
                dizziness, memory loss, poor circulation, disorientation) that
                occurs due to head trauma/brain injury in affected individuals.
              </Text>
            </View>
            <View style={styles.dotrow}>
              <View style={styles.dot}></View>
              <Text style={styles.dotText}>
                COLIHENZ 500MG TABLET contains Citicoline which belongs to a
                group of medicines called Psychostimulants. COLIHENZ 500MG
                TABLET is used to treat cerebral insufficiency (such as
                dizziness, memory loss, poor circulation, disorientation) that
                occurs due to head trauma/brain injury in affected individuals.
              </Text>
            </View>
            <View style={styles.dotrow}>
              <View style={styles.dot}></View>
              <Text style={styles.dotText}>
                COLIHENZ 500MG TABLET contains Citicoline which belongs to a
                group of medicines called Psychostimulants. COLIHENZ 500MG
                TABLET is used to treat cerebral insufficiency (such as
                dizziness, memory loss, poor circulation, disorientation) that
                occurs due to head trauma/brain injury in affected individuals.
              </Text>
            </View>
          </View>
        )}

        <View style={{backgroundColor: '#A6F4F326', marginTop: height * 0.02}}>
          <HeadingSeeAll
            heading="Alternative Product"
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
              />
            )}
          />
        </View>
        <View
          style={{backgroundColor: '#A6F4F326', marginBottom: height * 0.03}}>
          <HeadingSeeAll heading="Relative Product" seeAll />
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
              />
            )}
          />
        </View>
      </ScrollView>
      <View style={styles.rowbtn}>
        <Button
          children="Add to cart"
          iconbtn
          iconbtnICON
          btnStyle={{width: width * 0.36, height: height * 0.05}}
          onPress={() => navigation.navigate('Cart')}
        />
        <Button
          mediumbtn
          children="Buy Now"
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
