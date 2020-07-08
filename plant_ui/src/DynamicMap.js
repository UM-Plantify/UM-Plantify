import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Button } from 'react-native';
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
                    title='Static Map'
                    onPress={() => navigation.navigate('StaticMap')}
                />
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