import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import * as api from './api';
import * as common from "./common";

const getSpeciesList = async () => {
  return await api.getSpeciesList();
}

function Database({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    /* fetch('https://umplantify.serverless.social/api/list',
    {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false)); */
    let json = getSpeciesList();
    json.then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);
  
  return (
    <>
    {common.FullHeader(navigation)}
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=> navigation.navigate({routeName: 'PlantInfo', params: {
              id: item.id,
            }})}>
              <Text>{item.common_name}, {item.scientific_name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
    {common.Footer(navigation)}
    </>
  );
}

export default Database;
