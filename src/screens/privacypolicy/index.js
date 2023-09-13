import {View, Text, Dimensions, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from './../../component/Button/index';
const {height, width} = Dimensions.get('window');

const PrivacyPolicy = () => {
  return (
    <View style={styles.maincontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <View style={styles.innercontainer}>
          <Text style={styles.textcondition}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            fringilla interdum lacus, sed blandit felis porta quis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Mauris varius enim a
            libero rhoncus, eget euismod purus cursus. Integer sed augue mattis,
            interdum elit sit amet, sollicitudin ipsum. Phasellus tellus eros,
            aliquam vel felis vitae, porttitor vulputate risus. Ut justo nunc,
            dignissim sit amet odio vitae, posuere blandit ante. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aenean porta ex purus, quis venenatis turpis euismod
            in. {'\n\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas fringilla interdum lacus, sed blandit felis porta quis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            varius enim a libero rhoncus, eget euismod purus cursus. Integer sed
            augue mattis, interdum elit sit amet, sollicitudin ipsum. Phasellus
            tellus eros, aliquam vel felis vitae, porttitor vulputate risus. Ut
            justo nunc, dignissim sit amet odio vitae, posuere blandit ante.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean porta ex purus, quis venenatis turpis
            euismod in.{'\n\n'} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas fringilla interdum lacus, sed blandit
            felis porta quis. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Mauris varius enim a libero rhoncus, eget euismod purus
            cursus. Integer sed augue mattis, interdum elit sit amet,
            sollicitudin ipsum. Phasellus tellus eros, aliquam vel felis vitae,
            porttitor vulputate risus. Ut justo nunc, dignissim sit amet odio
            vitae, posuere blandit ante. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Aenean porta ex
            purus, quis venenatis turpis euismod in.
          </Text>

          <Button
            children="Continue"
            mediumbtn
            btnStyle={{alignSelf: 'center', marginVertical: height * 0.04}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
