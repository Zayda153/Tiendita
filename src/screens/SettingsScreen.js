import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import HeaderScreen from './HeaderScreen';
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
        <HeaderScreen />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          top: '10%'
        }}>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{color: 'black', fontSize: 20}}>
            Silenciar Notificaciones
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              marginHorizontal: 20,
            }}
          />
        </View>

        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{color: 'black', fontSize: 20}}>
            Silenciar Notificaciones
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              marginHorizontal: 20,
            }}
          />
        </View>

        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{color: 'black', fontSize: 20}}>
            Silenciar Notificaciones
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              marginHorizontal: 20,
            }}
          />
        </View>

        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{color: 'black', fontSize: 20}}>
            Silenciar Notificaciones
          </Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              marginHorizontal: 20,
            }}
          />
        </View>

        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={{color: 'black', fontSize: 20}}>
            Silenciar Notificaciones
          </Text>
          <Switch
            style={{
              marginHorizontal: 20,
            }}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
