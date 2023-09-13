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
import {COLORS, data, icons, images} from './../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import Button from './../../component/Button/index';
import InputBox from './../../component/InputText/index';

const {height, width} = Dimensions.get('window');

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.mainheading}>Get in touch today</Text>
          <Text style={styles.heading}>
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor lorem
            ipsum dolor sit amet, consectetur lorem ipsum dolor{' '}
          </Text>

          <View style={styles.rowdrop}>
            <Image source={icons.email} style={[styles.profileicons]} />
            <Text style={styles.profileText}>contact@company.com</Text>
          </View>
          <View style={styles.rowdrop}>
            <Image source={icons.call} style={styles.profileicons} />
            <Text style={styles.profileText}>(123) 456 - 789</Text>
          </View>
          <View style={styles.rowdrop}>
            <Image source={icons.location2} style={styles.profileicons} />
            <Text style={styles.profileText}>
              794 premnagar Vinoba bhave, 825301
            </Text>
          </View>
        </View>

        <View style={styles.inputfieldbox}>
          <InputBox redlabel label="Name" placeholder="Your Name" />
          <InputBox redlabel label="E-mail" placeholder="example@email.com" />
          <InputBox redlabel label="Phone" placeholder="(414) 804 - 987" />
          <InputBox redlabel label="Company" placeholder="Company" />

          <InputBox
            placeholder="Please type your message here..."
            redlabel
            label="Message"
            multiline={true}
            numberOfLines={6}
            textAlignVertical="top"
          />

          <Button children="Send message" roundbtn btnStyle={styles.sendbtn} />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
