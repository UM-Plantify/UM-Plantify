import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import * as api from './api';

const getSpeciesList = async () => {
  return await api.getSpeciesList();
}

function Database() {
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
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <Text>{item.common_name}, {item.scientific_name}</Text>
          )}
        />
      )}
    </View>
  );
}

export default Database;
