import React, { useState, useEffect, useRef } from 'react';
import ImageZoom from 'react-native-image-pan-zoom';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-paper'
import * as common from './common';

export default function StaticMap({navigation}) {
    return(
        <>
        {common.FullHeader(navigation)}
        <View style={styles.container}>
            <ImageZoom 
                cropWidth={Dimensions.get('window').width}
                cropHeight={Dimensions.get('window').height}
                imageHeight={672}
                imageWidth={892}
                enableCenterFocus={false}
            >
                <Image 
                    style={{width: 892, height: 672}}
                    source={require('../images/arb-map.jpg')}
                    resizeMode="contain"
                />
            </ImageZoom>
            <View style={styles.buttonStyle}>
                <Button
                    onPress={() => navigation.navigate('DynamicMap')}
                    mode = "contained"
                    color = '#042940'
                >
                    DYNAMIC MAP
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
        padding: 20
    }
  });