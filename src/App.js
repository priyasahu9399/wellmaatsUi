import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Root from './Root';
import {Provider} from 'react-redux';
import {store, persistor} from './redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import {icons, images, data, COLORS, FONTS, SIZES} from './constants';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
