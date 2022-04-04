import {View, StyleSheet, FlatList, Text} from 'react-native';
import React, {useEffect,useState} from 'react';
import HeaderScreen from './HeaderScreen';
import axios from 'axios';
import {Button, Card} from 'react-native-elements';
import baseURL from '../../routes/api';
import HeaderScreen1 from './HeaderScreen1';

const url = '/api/productos'
const Item = ({titulo, imagen, descripcion}) => (
  <View style={{height: 400}}>
    <Card containerStyle={{...styles.Cards}}>
      <Card.Title>{titulo}</Card.Title>
      <Card.Image source={{uri: imagen}}></Card.Image>
      <Text style={{color: 'black', alignSelf:'center'}}>{descripcion}</Text>
    </Card>
  </View>
);

const HomeScreen = () => {
  const renderItem = ({item}) => (
    <Item
      titulo={item.titulo}
      imagen={item.imagen}
      descripcion={item.descripcion}
    />
  );

    const [isLoading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);

    const getProductos = async () =>{
      try{
        const response = await fetch(baseURL+url);
        const json = await response.json();
        setInfo(json.data);
        console.log(json.data);
      }catch(error){
        console.error(error);
      }finally{
        setLoading(false);
      }
    }
    useEffect(()=>{
      getProductos();
    },[]);
  return (
    <View>
      <View>
        <HeaderScreen1 />
      </View>
      <FlatList
        style={{marginVertical: '20%'}}
        data={info}
        renderItem={renderItem}
        keyExtractor={({id},index)=>id}
        horizontal
      />
      <FlatList 
        data={info}
        renderItem={({item})=>(
          <View>
          <Card containerStyle={{width: 200, height:200}}>
            <Card.Title>{item.categoria}</Card.Title>
          </Card>
          </View>
        )}
        keyExtractor={({ id }, index) => id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Cards: {
    width: 200,
    height: 250,
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'green',
  }
});
export default HomeScreen;
