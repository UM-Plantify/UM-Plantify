import React from 'react';
import { Text, ScrollView, StyleSheet } from "react-native";
import * as common from "./common";

function Help({navigation}) {
  return (
    <>
    {common.FullHeader(navigation)}
    <ScrollView style={{ flex: 1, padding: 24 }}>
      <Text style={styles.stepHeader}>
        Mission Statement 
      </Text>
      <Text style={styles.text}>
        Hey plant lovers, Welcome to U-M Plantify. This is your user friendly mobile app that allows you to scan plants, shrubs, or trees from your phone with an instant picture that then identifies the plant and gives you associated facts and decriptions.
        </Text>
      <Text style={styles.stepHeader}>
        Photo Identification
      </Text>
      <Text style={styles.text}>
        Having trouble taking a photo? Feel that you're getting an inaccurate identification? Try the following steps:
      </Text>
      <Text style={styles.text}>
        {'\u2B24'} Make sure you are in a well lit area.
      </Text>
      <Text style={styles.text}>
        {'\u2B24'} Make sure your camera lens is clean.
      </Text>
      <Text style={styles.text}>
        {'\u2B24'} Focus and center your camera on the plant. 
      </Text>
      <Text style={styles.stepHeader}>
        Is There an Error in the Plant Description?
      </Text>
      <Text style={styles.text}>
        If you believe that the name of the flower and descriptions does not match your search results please try again and feel free to contact us.
      </Text>
      <Text style={styles.stepHeader}>
        Map
      </Text>
      <Text style={styles.text}>
        The map functionality allows you to see your location in the Arboretum in the Dynamic Map and view a Static Map of the Arb that includes labels and a legend.
      </Text>
      <Text style={styles.stepHeader}>
        Database
      </Text>
      <Text style={{fontSize: 19, paddingBottom: 60}}>
        Browse the Michigan plants that this app is trained to identify, and dicover information about them!
        </Text>
    </ScrollView>
    {common.Footer(navigation)}
    </>
  );
}

const styles = StyleSheet.create({
  stepHeader: {
    fontSize: 30,
    fontWeight: "bold",
  },
  stepText: {
    fontSize: 19,
    paddingLeft: 55,
    paddingRight: 25,
    paddingBottom: 20
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 19
  }
});

export default Help;
