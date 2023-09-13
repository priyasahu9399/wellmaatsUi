import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import StackNavigator from '../navigation/StackNavigator';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignIn from './../screens/SignIn/index';
import OTP from './../screens/otp/index';
import {FONTS, COLORS} from './../constants/theme';
import Onboarding from './../screens/onBoarding/index';

const Stack = createStackNavigator();

const Root = ({token}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitleStyle: styles.headerTitle,
      }}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="OTP"
        component={OTP}
        options={{title: 'Verification code', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = state => ({
  // token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Root);

const styles = StyleSheet.create({
  headerTitle: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 19,
    // textAlign: 'center'
  },
});
