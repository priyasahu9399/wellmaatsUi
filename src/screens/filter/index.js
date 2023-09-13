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
import {COLORS, SIZES, data, icons, images} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';
import Button from './../../component/Button/index';
import CheckBox from 'react-native-check-box';
import Collapsible from 'react-native-collapsible';
const CollapseList = ({title}) => {
  const [isCollapsed, setisCollapsed] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setisCollapsed(!isCollapsed)}
        style={[
          styles.row,
          {marginLeft: width * 0.06, marginTop: height * 0.02},
        ]}>
        <Image source={icons.rarrow} style={styles.arrow} />
        <Text style={styles.arrowtext}>{title}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={!isCollapsed}>
        <View>
          {data.Filterbrand.map((item, index) => (
            <Checkboxcart text={item.text} />
          ))}
        </View>
      </Collapsible>
    </View>
  );
};

const Checkboxcart = ({text}) => {
  const [isSelected, setisSelected] = useState('false');

  return (
    <View style={styles.boxcheck}>
      <CheckBox
        isChecked={!isSelected}
        onClick={() => setisSelected(!isSelected)}
        checkedCheckBoxColor={COLORS.primary}
        uncheckedCheckBoxColor={COLORS.gray50}
        rightTextView={<Text style={styles.checktext}>{text}</Text>}
        style={{marginLeft: width * 0.01}}
      />
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const Filter = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('Categories');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Loader loading={loading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <View style={styles.heightborder}>
            <TouchableOpacity
              onPress={() => setActive('Categories')}
              style={[
                styles.categoriesbox,
                active === 'Categories' && {
                  borderRightWidth: 2.8,
                  backgroundColor: '#EAEAEA',
                  borderColor: COLORS.green,
                },
              ]}>
              <Text style={styles.categories}>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActive('Brand')}
              style={[
                styles.categoriesbox,
                active === 'Brand' && {
                  borderRightWidth: 2.8,
                  backgroundColor: '#EAEAEA',
                  borderColor: COLORS.green,
                },
              ]}>
              <Text style={styles.categories}>Brand</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActive('Price')}
              style={[
                styles.categoriesbox,
                active === 'Price' && {
                  borderRightWidth: 2.8,
                  backgroundColor: '#EAEAEA',
                  borderColor: COLORS.green,
                },
              ]}>
              <Text style={styles.categories}>Price</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActive('Discount')}
              style={[
                styles.categoriesbox,
                active === 'Discount' && {
                  borderRightWidth: 2.8,
                  backgroundColor: '#EAEAEA',
                  borderColor: COLORS.green,
                },
              ]}>
              <Text style={styles.categories}>Discount</Text>
            </TouchableOpacity>
          </View>
          {active == 'Categories' && (
            <View>
              <CollapseList title="Veterinary" />
              <CollapseList title="Fitness" />

              <CollapseList title="Mom and baby" />

              <CollapseList title="wellness" />
            </View>
          )}
          {active == 'Brand' && (
            <View>
              {data.Filterbrand.map((item, index) => (
                <Checkboxcart text={item.text} />
              ))}
            </View>
          )}

          {active == 'Price' && (
            <View>
              {data.Filterprice.map((item, index) => (
                <Checkboxcart text={item.text} />
              ))}
            </View>
          )}
          {active == 'Discount' && (
            <View>
              {data.Filterprice.map((item, index) => (
                <Checkboxcart text={item.text} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
      <View>
        <View style={styles.rowbtn}>
          <Button
            mediumbtn
            children="Reset"
            btnStyle={{
              borderWidth: 0.6,
              borderColor: COLORS.red,
              backgroundColor: COLORS.white,
            }}
            btntextStyle={{color: COLORS.red}}
          />
          <Button mediumbtn children="Submit" />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
