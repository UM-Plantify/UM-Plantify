import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper'

function Landing({navigation}) {
  
  return (
    <View style={{ flex: 1, padding: 24 }}>
        <Text>
          UM Plantify
        </Text>
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
