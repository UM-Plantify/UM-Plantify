import React, { useEffect, useState, Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import AlphabetSectionList from 'react-native-alphabet-sectionlist';
import * as api from './api';
import * as common from "./common";

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

const getSpeciesList = async () => {
  return await api.getSpeciesList();
}

function compare(a, b) {
  if (a.common_name < b.common_name) {
    return -1;
  }
  if (a.common_name > b.common_name) {
    return 1;
  }
  return 0;
}

const sortData = (rawList, navigation) => {
  const sortedList = rawList.sort(compare);
  sortedList.forEach(item => {
    var id= item.id;
    Object.defineProperty(item, "onPress", {
      value: () => navigation.navigate({routeName: 'PlantInfo', params: {id: id,}}),
      enumerable: true
    });
  });
  var finalData = {};
  alphabet.forEach(letter => {
    // if there are any plants of that letter
    if (sortedList.some(element => element.common_name.startsWith(letter))) {
      // get only the plants of that letter
      var itemsOfLetter = sortedList.filter(element => element.common_name.startsWith(letter));
      // add these plants into the final data under this letter
      Object.defineProperty(finalData, letter, {
        value: itemsOfLetter,
        enumerable: true
      });
    }
  });
  return finalData;
}

const renderItem = ({ item }) => {
  return (
    <View style={{
      marginLeft: 10,
      paddingVertical: 10,
      borderBottomColor: 'lightgray',
      borderBottomWidth: 0.5,
      flexDirection: "row"
    }}>
      <TouchableOpacity onPress={item.onPress}>
        <View style={{ backgroundColor: "red", width: 5, height: 5}}/>
        <Text>{item.common_name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const renderHeader = () => {
  return (
    <View>
      <Text>header1</Text>
      <Text>header2</Text>
    </View>
  )
}

const renderSectionHeader = ({ section: { title } }) => {
  return (
    <View style={{
      paddingLeft: 10,
      backgroundColor: '#f1f2f3',
      paddingVertical: 5,
    }}>
      <Text style={{ color: 'blue' }}>{title}</Text>
    </View>
  )
}

function Database({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [speciesList, setSpeciesList] = useState({});

  useEffect(() => {
    let json = getSpeciesList();
    json.then((data) => {
      setSpeciesList(sortData(data, navigation));
      setLoading(false);
    });
  }, []);
  
  return (
    <>
    {common.FullHeader(navigation)}
    <View style={{ flex: 1 }}>
      {isLoading ? <ActivityIndicator/> : (
        <AlphabetSectionList
          data={speciesList}
          renderItem={renderItem}
          renderHeader={renderHeader}
          // custom section header
          renderSectionHeader={renderSectionHeader}
          // default section header styles
          // sectionHeaderStyle={{ paddingVertical: 5 }}
          // sectionHeaderTextStyle={{ fontSize: 16, color: 'blue' }}
        />
      )}
    </View>
    {common.Footer(navigation)}
    </>
  );
}

export default Database;
