import React, {useState} from 'react';
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
import {COLORS, data, icons, images} from '../../constants';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import styles from './styles';
const {height, width} = Dimensions.get('window');

const Tracking = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.righticonbox}>
                <Image style={styles.righticon} source={icons.right} />
              </View>
              <View style={styles.borderheight}></View>
            </View>
            <View style={styles.marginleft}>
              <View>
                <Text style={styles.trackheading}>
                  Order Confirmed, Aug 16 2023
                </Text>
                <View>
                  <Text style={styles.tracksubheading}>
                    Your Order has been placed.
                  </Text>
                  <Text style={styles.trackgrayheading}>
                    Tue, 17th Aug 2023 - 11:00PM
                  </Text>
                </View>
                <View>
                  <Text style={styles.tracksubheading}>
                    Seller has processed your order.
                  </Text>
                  <Text style={styles.trackgrayheading}>
                    Tue, 18th Aug 2023 - 08:00AM
                  </Text>
                </View>
                <View>
                  <Text style={styles.tracksubheading}>
                    Your item has been picked up by courler partner.{' '}
                  </Text>
                  <Text style={styles.trackgrayheading}>
                    Tue, 19th Aug 2023 - 11:00PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* --------------------- */}
          <View style={[styles.row, {marginTop: height * 0.03}]}>
            <View style={styles.row}>
              <View style={styles.righticonbox}>
                <Image style={styles.righticon} source={icons.right} />
              </View>
              <View style={styles.borderheight}></View>

              <View style={styles.marginleft}>
                <View style={styles.row}>
                  <Text style={styles.trackheading}>Shipped </Text>
                  <Text style={styles.trackgrayheading}>
                    Tue, 17th Aug 2023 - 11:00PM
                  </Text>
                </View>

                <View>
                  <Text style={styles.tracksubheading}>
                    Ekart Logistics - FMPC98877678878
                  </Text>
                  <Text
                    style={[
                      styles.tracksubheading,
                      {color: COLORS.gray60, marginTop: height * -0.002},
                    ]}>
                    Your item has been shipped.
                  </Text>
                  <Text style={styles.trackgrayheading}>
                    Tue, 17th Aug 2023 - 11:00PM
                  </Text>
                </View>
                <View style={{marginTop: height * 0.03}}>
                  <Text style={styles.trackgrayheading}>
                    Your item has been received in the hub nearest to you.{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* ------------- */}
          <View style={[styles.row, {marginTop: height * 0.03}]}>
            <View style={styles.row}>
              <View style={styles.righticonbox}>
                <Image style={styles.righticon} source={icons.right} />
              </View>
              <View
                style={[styles.borderheight, {height: height * 0.1}]}></View>
              <View style={styles.marginleft}>
                <View style={styles.row}>
                  <Text style={styles.trackheading}>Out For Delivery </Text>
                  <Text style={styles.trackgrayheading}>
                    Tue, 17th Aug 2023 - 11:00PM
                  </Text>
                </View>

                <View>
                  <Text style={styles.tracksubheading}>
                    Ekart Logistics - FMPC98877678878
                  </Text>
                  <Text style={styles.trackgrayheading}>
                    Tue, 17th Aug 2023 - 11:00PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* -------------------------- */}
          <View style={[styles.row, {marginTop: height * 0.03}]}>
            <View style={styles.row}>
              <View style={styles.righticonbox}>
                <Image style={styles.righticon} source={icons.right} />
              </View>

              <View style={styles.marginleft}>
                <View style={styles.row}>
                  <Text style={styles.trackheading}>Delivered </Text>
                  <Text style={styles.trackgrayheading}>
                    Tue, 23th Aug 2023 - 11:00PM
                  </Text>
                </View>

                <View>
                  <Text style={styles.tracksubheading}>
                    Your item has been delivered
                  </Text>
                  <Text style={styles.trackgrayheading}>
                    Tue, 17th Aug 2023 - 11:00PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* ---------- */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Tracking;
