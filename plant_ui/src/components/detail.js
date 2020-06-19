import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
import { StackNavigator } from 'react-navigation';
import { MapView } from 'expo';


export default class DetailScreen extends React.Component {
  render() {
    const { navigate, state: { params } } = this.props.navigation;
    return (
      <View style={styles.dContainer}>
        <Text style={styles.dTitleText}>{params.common_name}</Text>
        <Text style={styles.dMenuText}>{params.scientific_name}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30
  },
   subtitleView: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 20,
  },
  dTitleText: {
    fontSize: 28,
    color: 'black',
    marginTop: 12,
    textAlign: 'center'
  },
  menuText: {
    paddingLeft: 10,
    color: 'grey'
  },
  dMenuText: {
    fontSize: 16,
    paddingLeft: 10,
    color: 'grey',
    marginTop: 12
  },
  locText: {
    paddingLeft: 10,
    color: 'grey',
    marginTop: 6,
    fontSize: 12
  },
  titleText: {
    fontWeight: 'bold'
  },
  restaurantImage: {
    width: 600,
    height: 800
  },
  detailViewContainer: {
    paddingLeft: 20,
  }
});