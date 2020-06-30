import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Button } from 'react-native';

export default function Map({Navigation}) {
    return(
        <View style={styles.container}>
            <MapView 
                style={styles.mapStyle} 
                initialRegion={{
                    latitude: 42.280792,
                    longitude: -83.718970,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
            />
            <View style={styles.buttonStyle}>
                <Button
                    title='Static Map'
                />
            </View>
        </View>
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