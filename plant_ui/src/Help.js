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
        Hey plant lovers, Welcome to U-M Plantify. This is your user friendly mobile app that allows you to scan plants, shrubs, or trees from your phone. With an instant picture that then curates facts and descriptions based on your selection.
        </Text>
      <Text style={styles.stepHeader}>
        Photo Identification Page
      </Text>
      <Text style={styles.text}>
        Problem submitting Photo: If you have reached this page you are experiencing problems submitting your photo. To fix this problem please try the following steps
      </Text>
      <Text style={styles.text}>
        {'\u2B24'} Make sure you are in a well lit area
      </Text>
      <Text style={styles.text}>
        {'\u2B24'} Make sure your camera lens is clean
      </Text>
      <Text style={styles.text}>
        {'\u2B24'} Focus your camera on the desired area 
      </Text>
      <Text style={styles.stepHeader}>
        Is There an Error in the Plant Description?
      </Text>
      <Text style={styles.text}>
        If you believe that the name of the flower and descriptions does not match your search results please try again and fill out the form on the home page.
      </Text>
      <Text style={styles.stepHeader}>
        Map
      </Text>
      <Text style={styles.text}>
        This map shows your current location. Here you have an option of two maps, the Arboretum or of the U of M campus, the home of the Wolverine.
      </Text>
      <Text style={styles.stepHeader}>
        Database Page
      </Text>
      <Text style={{fontSize: 19, paddingBottom: 60}}>
        All your information is stored on a monitored private robust system that is secured for your privacy purposes.
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
