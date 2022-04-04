import * as React from 'react';
import { Text, View ,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './src/stacks/HomeStackScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RankingStackScreen from './src/stacks/RankigStackScreen';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import LoginStack from './src/stacks/LoginStackScreen';
import MarketStackScreen from './src/stacks/MarketStackScreen';
import SettingsStackScreen from './src/stacks/SettingsStackScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: 'black'}}>Home!</Text>
    </View>
  );
}
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor='#FF00BB' inactiveColor='black' barStyle={{backgroundColor: 'white',
      left: 20,
      position: 'absolute',
      right: 20,
      height: 90,
      bottom: 19,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 15,
    }} initialRouteName="Home" backBehavior='history'>
        <Tab.Screen name="Home" component={HomeStackScreen}  options={{
          tabBarIcon: ({focused})=> (
              <Icon name="home" size={25} style={{color: focused ? '#88F109' : '#EB1F4F'}}  />
          ),  
        }}/>
        <Tab.Screen name="Ranking" component={RankingStackScreen} options={{
          tabBarIcon: ({focused}) =>(
            <Icon name='bar-chart-o' size={25} style={{color: focused ? '#88F109' : '#EB1F4F'}}/>
          ),
        }} />
        <Tab.Screen name='Buy' component={MarketStackScreen} options={{
          tabBarIcon: ({focused}) => (
            <Icon name='shopping-bag' size={25} color='black' style={{color: focused ? '#88F109' : '#EB1F4F'}}/>
          ),
        }}/>
        <Tab.Screen name='User' component={LoginStack} options={{
          tabBarIcon: ({focused}) => (
            <Icon name='user' size={25} style={{color: focused ? '#88F109' : '#EB1F4F'}}/>
          ),
        }}/>
        <Tab.Screen name='Settings' component={SettingsStackScreen} options={{
          tabBarIcon: ({focused}) => (
            <Icon name='gear' size={25} style={{color: focused ? '#88F109' : '#EB1F4F'}} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}