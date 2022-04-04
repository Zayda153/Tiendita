import {View} from 'react-native';
import React, {useState} from 'react';
import HeaderScreen from './HeaderScreen';
import {Card, Button, colors} from 'react-native-elements';
import {Fumi} from 'react-native-textinput-effects';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import baseURL from '../../routes/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const url = '/api/sanctum/token'

const LoginScreen = () => {
  const [settoken] = useState('');

  const token = async (email1, contrasena) => {
    try {
      const res = await fetch(
        baseURL+url,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email1,
            password: contrasena,
          }),
        },
      )
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
          console.log('Success:', response['token']);
          return response['token'],
          saveData(response['token'])
        });
    } catch (error) {
      console.log(error);
    }
  }

  const saveData = async(token)=>{
    try{
      AsyncStorage.setItem(
        'token',
        JSON.stringify({
          token: token
        })
      );
      console.log("hecho")
    }catch(error){
      console.log(error)
    }
  }

  const getToken = async () =>{
    try{
      const jsonValue = await AsyncStorage.getItem('token')
      return jsonValue != null ? JSON.parse(jsonValue): null
    }catch(e){
      console.log(e)
    }
  }

  const [name, setname] = useState('');
  const [password, setpass] = useState('');
  console.log(password);
  const navigation = useNavigation();
  return (
    
    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
      {AsyncStorage.getItem('token') !=null && console.log("todo ok")}
      {AsyncStorage.getItem('token') ==null && console.log("todo mal")}
      <View>
        <HeaderScreen />
      </View>

      <View style={{alignSelf: 'center', justifyContent: 'center'}}>
        <Card
          containerStyle={{
            width: 300,
            elevation: 5,
            borderRadius: 20,
            shadowColor: '#00FF40',
          }}>
          <Card.Title
            style={{
              color: '#04B404',
              fontSize: 40,
              fontWeight: 'normal',
              fontFamily: 'sans-serif',
            }}>
            Log In
          </Card.Title>
          <View style={{}}>
            <Fumi
              label={'Username'}
              iconClass={Icons}
              iconName={'user-circle-o'}
              iconColor={'#f95a25'}
              iconSize={30}
              iconWidth={50}
              inputPadding={18}
              onChangeText={text => setname(text)}
              value={name}
            />
            <Fumi
              label={'Password'}
              iconClass={Icons}
              iconName={'lock'}
              iconColor={'#f95a25'}
              iconSize={30}
              iconWidth={50}
              inputPadding={18}
              secureTextEntry={true}
              onChangeText={pass => setpass(pass)}
              value={password}
            />
            <Button
              type="clear"
              title="Not yet a member? Sign Up"
              titleStyle={{fontSize: 14}}
              buttonStyle={{left: '100%'}}
            />
            <View style={{marginVertical: 20}}>
              <Button
                type="outline"
                title="Submit"
                buttonStyle={{
                  borderRadius: 15,
                  borderColor: '#D7DF01',
                  flexDirection: 'row',
                  width: '80%',
                  alignSelf: 'center',
                  borderWidth: 1,
                }}
                titleStyle={{color: '#04B404', fontSize: 18}}
                onPress={() => token(name, password)}
              />
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default LoginScreen;
