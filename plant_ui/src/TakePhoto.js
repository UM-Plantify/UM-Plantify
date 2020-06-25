import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function TakePhoto({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const type = Camera.Constants.Type.back;
  const [cameraRef, setCameraRef] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {setCameraRef(ref);}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
              if (cameraRef){
                  let photo = await cameraRef.takePictureAsync();
                  let uri = photo.uri.startsWith("file:///")
                    ? photo.uri.replace("file:///", "")
                    : photo.uri;
                  navigation.navigate({routeName: 'ConfirmPhoto', params: {
                      photoTaken: uri,
                  }});
              }
          }}>
              <View style={{
                  borderWidth: 2,
                  borderRadius: 25,
                  borderColor: 'white',
                  height: 50,
                  width: 50,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
              }}>
                  <View style={{
                      borderWidth: 2,
                      borderRadius: 20,
                      borderColor: 'white',
                      height: 40,
                      width: 40,
                      backgroundColor: 'white'
                  }}>
                  </View>
              </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}