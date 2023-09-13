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
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import ProfileBox from './../../component/carts/profilecart';
import ProfileEdit from './../editProfile/index';
import DeliveryAddress from './../addressDelivery/index';
import Affiliate from './../affiliate/index';
// import WithDrawRequest from './../withdrawrequest/index';
import OfferList from './../offerlist/index';
import Notification from './../notification/index';
// import AllReview from './../Review/index';
// import Feedback from './../feedback/index';
// import Consultexpert from './../consultayurvedexpert';
// import Result from './../Result/index';
// import PatientDetail from './../patientDetail/index';
import ResultSecond from './../result2Second/index';
import Order from './../order/index';
import ContactUs from './../contactUs/index';
import SelfAssessment from './../selfAssessment/index';
// import SkinSelfAssessment from './../selfAssessmentSkin/index';
// import SelfAssessmentYoga from './../selfAssessmentYoga/index';
import ResultSelfAssessment from './../resultselfassessment/index';
import PrivacyPolicy from './../privacypolicy/index';
import TermCondition from './../termcondition/index';
import SupportPolicy from './../supportpolicy/index';
import ReturnPolicy from './../returnpolicy/index';
import SignIn from './../SignIn/index';
import Button from './../../component/Button/index';
import Tracking from './../tracking/index';
const {height, width} = Dimensions.get('window');

const Profile = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState();

  const img = route.params;
  console.log('img', img);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <View style={styles.innercontainer}>
        <View style={styles.greenbox}>
          <View style={styles.row}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                // source={image ? images.profile2 : {uri: img?.uri}}
                style={styles.person}
                source={images.profile2}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.persontext}>Hello</Text>
              <Text style={styles.persontext}>+91-99999 99999</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
            <Image source={icons.edit} style={styles.edit} />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <ProfileBox
            profileimage={icons.order}
            text="Order"
            rarrow
            onPress={() => navigation.navigate('AllOrderShow')}
          />
          <ProfileBox
            profileimage={icons.order}
            text="Tracking"
            rarrow
            onPress={() => navigation.navigate('Tracking')}
          />
          <ProfileBox
            profileimage={icons.order}
            text="Favourite"
            onPress={() => navigation.navigate('Favorite')}
          />
          <ProfileBox
            profileimage={icons.order}
            text="Delivery Address"
            rarrow
            onPress={() => navigation.navigate('DeliveryAddress')}
          />
          <ProfileBox
            profileimage={icons.order}
            text="Affiliate"
            rarrow
            onPress={() => navigation.navigate('Affiliate')}
          />
        </View>
        <View style={styles.box}>
          <ProfileBox
            profileimage={icons.order}
            text="Notification"
            onPress={() => navigation.navigate('Notification')}
          />
          <ProfileBox
            profileimage={icons.order}
            text="Offer"
            onPress={() =>
              navigation.navigate('OfferList', {disabledbtn: true})
            }
          />
          <ProfileBox
            profileimage={icons.order}
            text="Contact us"
            onPress={() => navigation.navigate('ContactUs')}
          />
        </View>
        <View style={styles.box}>
          <ProfileBox
            profileimage={icons.order}
            onPress={() => navigation.navigate('PrivacyPolicy')}
            text="Privacy Policy"
            rarrow
          />
          <ProfileBox
            profileimage={icons.order}
            text="Term & Condition"
            rarrow
            onPress={() => navigation.navigate('TermCondition')}
          />
          <ProfileBox
            profileimage={icons.order}
            onPress={() => navigation.navigate('ReturnPolicy')}
            text="Return Policy"
            rarrow
          />
          <ProfileBox
            profileimage={icons.order}
            onPress={() => navigation.navigate('SupportPolicy')}
            text="Support Policy"
            rarrow
          />
        </View>
        <View style={styles.box}>
          <ProfileBox
            profileimage={icons.order}
            onPress={() => setModalVisible(true)}
            text="Logout"
            rarrow
          />
        </View>
        <View>
          <Modal
            isVisible={isModalVisible}
            animationIn={'fadeInDown'}
            backdropOpacity={0.2}>
            <View style={styles.modalbox}>
              <Text style={styles.modalhead}>Are you want to Logout</Text>
              <View style={styles.modalbtnrow}>
                <Button
                  children="No"
                  mediumbtn
                  iconbtn
                  btnStyle={{marginRight: width * 0.07}}
                  onPress={() => setModalVisible(false)}
                />
                <Button
                  children="Yes"
                  mediumbtn
                  btnStyle={{
                    width: width * 0.28,
                    height: height * 0.04,
                    borderRadius: 4,
                  }}
                  onPress={() => {
                    navigation.navigate('SignIn'), setModalVisible(false);
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
