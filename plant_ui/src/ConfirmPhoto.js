import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from "react-native";
import * as api from './api';

const getIdentification = async (image) => {
  return await api.identifySpecies(image);
}

function ConfirmPhoto({navigation}) {
  const photoTaken = navigation.state.params.photoTaken;
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{justifyContent: 'center'}}>
          Use this photo?
      </Text>
      <Image 
        source={{uri: photoTaken}}
        style={{ width: 300, height: 400}}
      />
      <Button 
        title="Yes"
        onPress={() => {
          let json = getIdentification(photoTaken);
          json.then((data) => {
            let plantId = data.id;
            navigation.navigate({routeName: 'PlantInfo', params: {
              id: plantId,
            }});
          });
        }}
      />
      <Button
        title="No"
        onPress={() => navigation.navigate('TakePhoto')}
      />
    </View>
  );
}

export default ConfirmPhoto;
