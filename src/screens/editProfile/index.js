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
  PermissionsAndroid,
} from 'react-native';
import {COLORS, data, icons, images} from './../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import InputBox from './../../component/InputText/index';
import {formattedDateServer} from './../../services/date';
import DropdownComponent from './../../component/dropdown/index';
import DatePicker from 'react-native-date-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Button from './../../component/Button/index';
import Profile from './../profile/index';

const {height, width} = Dimensions.get('window');

const gender = [
  {value: '0', label: 'Male'},
  {value: '1', label: 'Female'},
  {value: '2', label: 'Other'},
];
const ProfileEdit = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [postData, setPostData] = useState({
    image: null,
    // images.profile1
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  //   image pick

  // image camera permission
  const requestImagePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Image');
      } else {
        console.log('Image permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const OnSelectImage = () => {
    ImagePicker.openPicker({
      width: width * 0.8,
      height: height * 0.4,
      cropping: true,
    }).then(image => {
      handleChange('image', {
        uri: image.path,
        name: image.filename || Date.now() + '-' + image.path.slice(20),
        type: image.mime,
      });
    });
  };
  useEffect(() => {
    requestImagePermission();
  }, []);
  console.log('postData', postData);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <View style={styles.innercontainer}>
        <View style={styles.profilebox}>
          <TouchableOpacity onPress={OnSelectImage} activeOpacity={0.5}>
            <Image
              source={
                postData.image ? {uri: postData.image.uri} : images.profile1
              }
              style={styles.person}
            />
            <View style={styles.camerabox}>
              <Image source={icons.camera} style={styles.camera} />
            </View>
          </TouchableOpacity>
        </View>

        <InputBox placeholder="Your Name" />
        <InputBox
          placeholder="+91-99999 99999"
          maxLength={10}
          keyboardType="numeric"
        />
        <InputBox placeholder="Email-id" keyboardType="email-address" />
        <TouchableOpacity activeOpacity={0.6} onPress={() => setOpen(true)}>
          <InputBox
            placeholder="DOB"
            editable={false}
            icon={icons.date}
            value={date}
          />
        </TouchableOpacity>
        <DatePicker
          modal
          title="Select date"
          mode="date"
          open={open}
          date={new Date()}
          onConfirm={d => {
            setOpen(false);
            setDate(formattedDateServer(d));
          }}
          onCancel={() => {
            setOpen(false);
          }}
          theme="light"
          textColor={COLORS.black}
        />

        <DropdownComponent placeholder="Gender" data={gender} />

        <Button
          children="Update"
          mediumbtn
          btnStyle={{alignSelf: 'center', marginTop: height * 0.05}}
          onPress={() => navigation.navigate('Profile', postData.image)}
        />
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
