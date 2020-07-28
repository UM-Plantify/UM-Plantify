import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import * as api from './api';
import * as common from "./common";

const win = Dimensions.get('window');

const getIdentification = async (image) => {
  return await api.identifySpecies(image);
}

function ConfirmPhoto({navigation}) {
  const photoUri = navigation.state.params.photoUri;
  const photoData = navigation.state.params.photoData;
  return (
    <>
    {common.FullHeader(navigation)}
    <View style={{}}>
      <Image 
        source={{uri: photoUri}}
        style={styles.image}
      />
      <Button
        style = {styles.button}
        mode = "contained"
        color = '#042940'
        onPress={() => {
          let json = getIdentification(photoData);
          json.then((data) => {
            let plantId = data.id;
            navigation.navigate({routeName: 'PlantInfo', params: {
              id: plantId,
            }});
          });
        }}
      >YES</Button>
      <Button
        style = {styles.button}
        onPress={() => navigation.navigate('TakePhoto')}
        mode = "contained"
        color = '#042940'
      >NO</Button>
      <View style={styles.textContainer}>
      <Text style={styles.text}>
          Use this photo?
      </Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    margin: 5
  },
  image: {
    width: win.width,
    height: win.height * .66
  },
  textContainer: {
    position: 'absolute',
    top: '0%',
    alignSelf: 'center',
    padding: 20
  },
  text: {
    color: '#FFFFFF',
    fontSize: 30
  }
});

export default ConfirmPhoto;
