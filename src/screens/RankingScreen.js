import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderScreen from './HeaderScreen';
import {Card, Avatar, AirbnbRating, Divider} from 'react-native-elements';

const RankingScreen = () => {
  return (
    <ScrollView style={{marginVertical:10 ,flex: 1, bottom:100}}>
      <View style={{marginVertical: 89}}>
        <HeaderScreen />
      </View>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'column',
          flex: 1,
          marginTop: '-25%'
        }}>
        <Card
          containerStyle={{
            paddingVertical: 15,
            elevation: 10,
            height: 250,
            alignContent: 'center',
            borderRadius: 12,
            shadowColor: 'green',
          }}>
          <Card.Title h4>Puntuaciones</Card.Title>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Avatar
                size={80}
                rounded
                source={{
                  uri: 'https://album.mediaset.es/cimg/1000001/2017/04/03/cristiano_1024x1198_a277.jpg?w=1024',
                }}></Avatar>
              <Divider
                color="gray"
                style={{paddingVertical: 10, width: '100%'}}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'green',
                }}>
                El bicho siuu
              </Text>
            </View>
            <View style={{flexDirection: 'column', alignSelf: 'center'}}>
              <View>
                <Text style={{color: 'black'}}>
                  Comentarios sobre el vendedor
                </Text>
              </View>
              <View style={{top: '35%', left: '15%', alignSelf: 'flex-start'}}>
                <AirbnbRating
                  count={5}
                  reviews={[
                    'Pésimo',
                    'mmm :(',
                    'Normal',
                    'Sobresaliente',
                    'Genial',
                  ]}
                  reviewColor="black"
                  reviewSize={20}
                  size={25}
                  selectedColor="#00FF40"
                />
              </View>
            </View>
          </View>
        </Card>

        <Card
          containerStyle={{
            paddingVertical: 15,
            elevation: 10,
            height: 250,
            alignContent: 'center',
            borderRadius: 12,
            shadowColor: 'green',
          }}>
          <Card.Title h4>Puntuaciones</Card.Title>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Avatar
                size={80}
                rounded
                source={{
                  uri: 'https://album.mediaset.es/cimg/1000001/2017/04/03/cristiano_1024x1198_a277.jpg?w=1024',
                }}></Avatar>
              <Divider
                color="gray"
                style={{paddingVertical: 10, width: '100%'}}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'green',
                }}>
                El bicho siuu
              </Text>
            </View>
            <View style={{flexDirection: 'column', alignSelf: 'center'}}>
              <View>
                <Text style={{color: 'black'}}>
                  Comentarios sobre el vendedor
                </Text>
              </View>
              <View style={{top: '35%', left: '15%', alignSelf: 'flex-start'}}>
                <AirbnbRating
                  count={5}
                  reviews={[
                    'Pésimo',
                    'mmm :(',
                    'Normal',
                    'Sobresaliente',
                    'Genial',
                  ]}
                  reviewColor="black"
                  reviewSize={20}
                  size={25}
                  selectedColor="#00FF40"
                />
              </View>
            </View>
          </View>
        </Card>

        <Card
          containerStyle={{
            paddingVertical: 15,
            elevation: 10,
            height: 250,
            alignContent: 'center',
            borderRadius: 12,
            shadowColor: 'green',
          }}>
          <Card.Title h4>Puntuaciones</Card.Title>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Avatar
                size={80}
                rounded
                source={{
                  uri: 'https://album.mediaset.es/cimg/1000001/2017/04/03/cristiano_1024x1198_a277.jpg?w=1024',
                }}></Avatar>
              <Divider
                color="gray"
                style={{paddingVertical: 10, width: '100%'}}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'green',
                }}>
                El bicho siuu
              </Text>
            </View>
            <View style={{flexDirection: 'column', alignSelf: 'center'}}>
              <View>
                <Text style={{color: 'black'}}>
                  Comentarios sobre el vendedor
                </Text>
              </View>
              <View style={{top: '35%', left: '15%', alignSelf: 'flex-start'}}>
                <AirbnbRating
                  count={5}
                  reviews={[
                    'Pésimo',
                    'mmm :(',
                    'Normal',
                    'Sobresaliente',
                    'Genial',
                  ]}
                  reviewColor="black"
                  reviewSize={20}
                  size={25}
                  selectedColor="#00FF40"
                />
              </View>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default RankingScreen;
