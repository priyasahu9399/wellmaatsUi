import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons} from '../../constants';
import {COLORS, SIZES} from './../../constants';
import styles from './styles';
import Home from './../../screens/Home/index';
import Explore from './../../screens/explore/index';
import Cart from './../../screens/Cart/index';
import Blog from './../../screens/Blog/index';
import Profile from './../../screens/profile/index';
import Notification from './../../screens/notification/index';

const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitle,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tableBar,
        tabBarLabelStyle: styles.tablebal,
        headerStyle: styles.headerstyle,
        tabBarLabel: '',
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerLeft: () => (
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={images.logo} style={styles.logo} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}
              activeOpacity={0.6}>
              <Image source={icons.notify} style={styles.bell} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconbox,
                {backgroundColor: focused ? COLORS.white : COLORS.green},
              ]}>
              <Image
                source={icons.home}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.red : COLORS.white},
                ]}
              />
              <Text
                style={[
                  styles.tablebal,
                  {color: focused ? COLORS.red : COLORS.white},
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconbox,
                {backgroundColor: focused ? COLORS.white : COLORS.green},
              ]}>
              <Image
                source={icons.explor}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.red : COLORS.white},
                ]}
              />
              <Text
                style={[
                  styles.tablebal,
                  {color: focused ? COLORS.red : COLORS.white},
                ]}>
                Explore
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconbox,
                {backgroundColor: focused ? COLORS.white : COLORS.green},
              ]}>
              <Image
                source={icons.cart}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.red : COLORS.white},
                ]}
              />
              <Text
                style={[
                  styles.tablebal,
                  {color: focused ? COLORS.red : COLORS.white},
                ]}>
                Cart
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconbox,
                {backgroundColor: focused ? COLORS.white : COLORS.green},
              ]}>
              <Image
                source={icons.blog}
                style={[
                  styles.icon_set,
                  {
                    tintColor: focused ? COLORS.red : COLORS.white,
                    height: SIZES.height * 0.032,
                    width: SIZES.width * 0.05,
                  },
                ]}
              />
              <Text
                style={[
                  styles.tablebal,
                  {color: focused ? COLORS.red : COLORS.white},
                ]}>
                Blog
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconbox,
                {backgroundColor: focused ? COLORS.white : COLORS.green},
              ]}>
              <Image
                source={icons.profile}
                style={[
                  styles.icon_set,
                  {tintColor: focused ? COLORS.red : COLORS.white},
                ]}
              />
              <Text
                style={[
                  styles.tablebal,
                  {color: focused ? COLORS.red : COLORS.white},
                ]}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
