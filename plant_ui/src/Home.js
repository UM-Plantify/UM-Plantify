import React from 'react';
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import * as common from "./common";

function Home({navigation}) {
  return (
    <>
    {common.LogoAndHelpHeader(navigation)}
    <View style={{justifyContent: 'center', padding: 34 }}>
      <Button
        style = {styles.button}
        onPress = {() => navigation.navigate('TakePhoto')}
        mode = "contained"
        color = '#042940'
      >TAKE PHOTO</Button>
      <Button
        style = {styles.button}
        onPress = {() => navigation.navigate('Database')}
        mode = "contained"
        color = '#042940'
      >DATABASE</Button>
      <Button
        style = {styles.button}
        onPress = {() => navigation.navigate('DynamicMap')}
        mode = "contained"
        color = '#042940'
      >MAP</Button>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10
  }
});

export default Home;
