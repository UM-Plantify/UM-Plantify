import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper"
import * as common from "./common";

function Instructions({navigation}) {
  
  return (
    <>
    <View style={{ flex: 1, padding: 34 }}>
        <Text style={styles.header}>
            Instructions
        </Text>

        <Text style={styles.stepHeader}>
          1. Open Camera
        </Text>
        <Text style={styles.stepText}>
          Select camera icon from the menu bar at the bottom of the screen.
        </Text>

        <Text style={styles.stepHeader}>
          2. Take Photo
        </Text>
        <Text style={styles.stepText}>
          Make sure the plant is centered on the screen and tap the circular button at the bottom to capture image of plant.
        </Text>

        <Text style={styles.stepHeader}>
          3. Confirm Photo
        </Text>
        <Text style={styles.stepText}>
          If you're satisfied with the photo you just took press 'YES' to have the app identify the plant or if you're dissatisfied, press 'NO' to retake the photo. 
        </Text>

        <Text style={styles.stepHeader}>
          4. Get Info
        </Text>
        <Text style={styles.stepText}>
          U-M Plantify will provide information about the plant species, recipes, and much more!
        </Text>
        <View style={styles.buttonContainer}>
          <IconButton 
            icon='arrow-right-circle-outline'
            style={styles.button} 
            onPress={() => navigation.navigate('Home')}
            size={55}
          />
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20
  },
  stepHeader: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  stepText: {
    fontSize: 19,
    paddingLeft: 55,
    paddingRight: 25,
    paddingBottom: 20
  },
  buttonContainer: {
    flex: 1
  },
  button: {
    alignSelf: 'center'
  }
});

export default Instructions;
