import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from "react-native";

function ConfirmPhoto({navigation}) {
  const photoTaken = navigation.state.params.photoTaken;
  console.log(photoTaken);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{justifyContent: 'center'}}>
          Use this photo?
      </Text>
      <Image source={{uri: photoTaken}}/>
      <Button title="Yes"/>
      <Button
        title="No"
        onPress={() => navigation.navigate('TakePhoto')}
      />
    </View>
  );
}

export default ConfirmPhoto;
