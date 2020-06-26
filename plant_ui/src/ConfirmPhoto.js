import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from "react-native";

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
          navigation.navigate({routeName: 'PlantInfo', params: {
            id: "1",
        }});
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
