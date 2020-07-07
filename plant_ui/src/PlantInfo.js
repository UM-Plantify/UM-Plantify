import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from "react-native";
import * as api from './api';
import * as common from "./common";

const getSpecies = async (id) => {
  return await api.getSpecies(id);
}

function PlantInfo({navigation}) {
  const speciesId = navigation.state.params.id;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let json = getSpecies(speciesId);
    json.then((data) => {
      setData(data);
      setLoading(false);
      console.log(data);
    });
  }, []);
  
  return (
    <>
    {common.FullHeader(navigation)}
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <>
        <Text>
            Common Name: {data.common_name}
        </Text>
        <Text>
            Scientific Name: {data.scientific_name}
        </Text>
        </>
      )}
    </View>
    </>
  );
}

export default PlantInfo;
