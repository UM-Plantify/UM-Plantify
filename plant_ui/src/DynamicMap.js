import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper'
import * as common from './common';

export default function DynamicMap({navigation}) {
    return(
        <>
        {common.FullHeader(navigation)}
        <View style={styles.container}>
            <MapView 
                style={styles.mapStyle} 
                initialRegion={{
                    latitude: 42.280792,
                    longitude: -83.718970,
                    latitudeDelta: 0.0160,
                    longitudeDelta: 0.0160,
                }}
                showsUserLocation={true}
                rotateEnabled={false}
            />
            <View style={styles.buttonStyle}>
                <Button
                    onPress={() => navigation.navigate('StaticMap')}
                    mode = "contained"
                    color = '#042940'
                >
                    STATIC MAP
                </Button>
            </View>
        </View>
        {common.Footer(navigation)}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      flex: 1,
    },
    buttonStyle: {
        position: 'absolute',
        top: '0%',
        alignSelf: 'flex-end',
        padding: 10
    }
  });