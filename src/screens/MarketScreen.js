import {View, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderScreen2 from './HeaderScreen2';
import {Card, Button} from 'react-native-elements';

const MarketScreen = () => {
  return (
    <ScrollView style={{marginVertical:10 ,flex: 1, bottom:100}}>
      <View style={{marginVertical: 89}}>
        <HeaderScreen2 />
      </View>
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
        <View style={{flexDirection: 'row'}}>
          <Card containerStyle={{...styles.cards}}>
              <Image source={require('../../assets/img/vegetables.png')} style={styles.images} />
              <Button type='clear' title={'Vegetables'} titleStyle={{...styles.buttonText}} buttonStyle={{...styles.buttons}} />
          </Card>

          <Card containerStyle={{...styles.cards}}>
              <Image source={require('../../assets/img/fertilizer.png')} style={styles.images}/>
              <Button type='clear' title={'Fertilizers'} titleStyle={{...styles.buttonText}} buttonStyle={{...styles.buttons}} />
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card containerStyle={{...styles.cards}}>
              <Image source={require('../../assets/img/seed.png')} style={styles.images} />
              <Button type='clear' title={'Seeds'} titleStyle={{...styles.buttonText}} buttonStyle={{...styles.buttons}} />
          </Card>

          <Card containerStyle={{...styles.cards}}>
              <Image source={require('../../assets/img/tools.png')} style={styles.images} />
              <Button type='clear' title={'Tools'} titleStyle={{...styles.buttonText}} buttonStyle={{...styles.buttons}}/>
          </Card>
        </View>
        <View style={{flexDirection: 'row-reverse'}}>
          <Card containerStyle={{...styles.cards}}>
              <Image source={require('../../assets/img/seed.png')} style={styles.images} />
              <Button type='clear' title={'Seeds'} titleStyle={{...styles.buttonText}} buttonStyle={{...styles.buttons}} />
          </Card>

          <Card containerStyle={{...styles.cards}}>
              <Image source={require('../../assets/img/tools.png')} style={styles.images} />
              <Button type='clear' title={'Tools'} titleStyle={{...styles.buttonText}} buttonStyle={{...styles.buttons}}/>
          </Card>
        </View>
        <View style={{flexDirection: 'row-reverse'}}>
          <Card containerStyle={{...styles.cards}}>
              <Image source={require('../../assets/img/seed.png')} style={styles.images} />
              <Button type='clear' title={'Seeds'} titleStyle={{...styles.buttonText}} buttonStyle={{...styles.buttons}} />
          </Card>

          <Card containerStyle={{...styles.cards}}>
              <Image source={require('../../assets/img/tools.png')} style={styles.images} />
              <Button type='clear' title={'Tools'} titleStyle={{...styles.buttonText}} buttonStyle={{...styles.buttons}}/>
          </Card>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cards:{
    width:150,
    borderRadius:15,
    elevation:5,
    shadowColor: 'green'
  },
  images:{
    alignSelf: 'center',
    width: 100,
    height:100
  },
  buttonText:{
    color:'#EB1F4F', 
    fontSize: 20
  }
});
export default MarketScreen;
