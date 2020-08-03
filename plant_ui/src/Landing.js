import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from 'react-native-paper'

function Landing({navigation}) {
  
  return (
    <View style={{ flex: 1, padding: 24, justifyContent:'center' }}>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Image
            style={{width: 150, height: 150, marginTop:50}}
            source={require('../images/app_logo.png')}
          />
        </View>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={{fontSize:40}}>
            UM Plantify
          </Text>
        </View>
        <Button
          style = {styles.button}
          onPress = {() => navigation.navigate('Home')}
          mode = "contained"
          color = '#042940'
        >
          START
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10
  }
});

export default Landing;
