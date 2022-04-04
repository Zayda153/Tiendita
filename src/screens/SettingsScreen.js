import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import HeaderScreen3 from './HeaderScreen3';
import {Divider} from 'react-native-elements';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
      }}>
      <View>
        <HeaderScreen3 />
      </View>
      
      </View>
  );
};

export default SettingsScreen;
