//Este screen es solo la parte superior de la mayoria de las Screens, se importó para que
//sea reusable.
import {View, ImageBackground, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(34,255,0,0.9)',
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 150,
        borderBottomStartRadius: 150,
      }}>
      <View style={{width: '100%', height: 200}}>
        <Image
          source={require('../../assets/img/85246-h.jpg')}
          resizeMode="cover"
          style={{width: '100%', height: 200, opacity: 0.4, borderBottomLeftRadius: 150, borderBottomRightRadius: 150}}
        />
      </View>
      <View>
        <Image
          source={require('../../assets/img/logo_negro.png')}
          style={{
            width: 150,
            height: 150,
            marginVertical: -200,
          }}
        />
      </View>
    </View>
  );
};

export default HeaderScreen;
