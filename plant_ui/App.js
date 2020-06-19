// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { constants } from 'expo';
import HomeScreen from './src/components/home';
import DetailScreen from './src/components/detail';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Plant Identification Application   
                </Text>
            </View>
        );
    }
}

export default App;
/* export default StackNavigator({
    Home: { screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            headerBackTitle: 'Back',
        },
    },
    Detail: {screen: DetailScreen,
        navigationOptions: {
            title: 'Detail'
        },
    }
}); */

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 50
    }
  });
