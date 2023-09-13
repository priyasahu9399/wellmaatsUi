import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import Button from '../../component/Button';
import {connect} from 'react-redux';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import StackNavigator from './../../navigation/StackNavigator/index';

const {height, width} = Dimensions.get('window');
const OTP = ({navigation}) => {
  const [otpCheck, setOtpCheck] = useState();
  const [currtime, setcurrtime] = useState(30);

  useEffect(() => {
    countdown();
  }, []);

  const countdown = () => {
    var timeLeft = 30;
    var timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
      } else {
        setcurrtime(timeLeft);
        timeLeft--;
      }
    }
  };
  const resendOtp = () => {
    countdown();
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

      <View style={styles.innercontainer}>
        <Text style={styles.text2}>
          We just sent you a 4 digit verification code. Check your inbox to get
          them.
        </Text>

        <OTPInputView
          style={styles.otpCheck}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            setOtpCheck(code);
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <View style={styles.box3}>
          {currtime == 0 ? null : (
            <Text style={styles.resend}>Resend the OTP in</Text>
          )}
          {currtime == 0 ? (
            <TouchableOpacity onPress={resendOtp}>
              <Text style={styles.resent}>Resend</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.time}>0 : {currtime} sec</Text>
          )}
        </View>
        <Button
          children="Submit"
          btnStyle={{alignSelf: 'center'}}
          onPress={() => navigation.navigate('StackNavigator')}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OTP);
