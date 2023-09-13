import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import InputBox from './../../component/InputText/index';
import Button from './../../component/Button/index';
import OTP from './../otp/index';
import {Formik} from 'formik';
import * as yup from 'yup';
const {height, width} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  // const [error, setError] = useState('please enter phone no.');

  const emailValidationSchema = yup.object().shape({
    phoneNo: yup.string().required('Please enter 10 digit phone Number'),
  });
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

      <View style={styles.innercontainer}>
        <Image source={images.logo} style={styles.logo} />

        <View>
          <Formik
            validationSchema={emailValidationSchema}
            initialValues={{phoneNo: ''}}
            onSubmit={values => navigation.navigate('OTP')}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <InputBox
                  label="Enter Phone number"
                  placeholder={'Mobile no'}
                  maxLength={10}
                  keyboardType={'numeric'}
                  onChangeText={handleChange('phoneNo')}
                  value={values.phoneNo}
                  inputboxstyle={{marginBottom:height*.002}}
                />
                {errors.phoneNo && (
                  <Text style={styles.error}>{errors.phoneNo}</Text>
                )}
                <Button
                  onPress={handleSubmit}
                  disabled={!isValid}
                  children={'Get OTP'}
                  btnStyle={styles.btn}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
