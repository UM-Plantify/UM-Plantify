import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import * as api from './api';
import * as common from "./common";
import plant_images from '../index';

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
  }, [navigation.state.params.id]);

  
  return (
    <>
    <View style={{ flex: 1 }}>
      {common.FullHeader(navigation)}
      <ScrollView style={{ paddingHorizontal: 24, paddingBottom: 100 }}>
        {isLoading ? <ActivityIndicator/> : (
          <>
          <View style={{ flexDirection:'row', justifyContent: 'center'}}>
            <Image
              style={{width:300, height:300}}
              source={plant_images[parseInt(data.id) - 1]}
            />
          </View>
          <View style={{ flexDirection:'row', marginVertical: 10, paddingVertical: 10, justifyContent: 'center', backgroundColor:"#185359"}}>
            <View>
              <Text style={{color:"white", fontWeight: "bold", textAlign:"center"}}>
                {data.common_name}
              </Text>
              <Text style={{color:"white", textAlign:"center"}}>
                {data.scientific_name}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection:'row', justifyContent: 'center'}}>
            <Text style={{fontWeight: "bold"}}>Description</Text>
          </View>
          <Text>
            {data.description}
          </Text>
          <View style={{ flexDirection:'row', marginTop: 10, justifyContent: 'center'}}>
            <Text style={{fontWeight: "bold"}}>About</Text>
          </View>
          <Text>
            {data.about}
          </Text>
          <View style={{ flexDirection:'row', marginTop: 10, justifyContent: 'center'}}>
            <Text style={{fontWeight: "bold"}}>Fact</Text>
          </View>
          <Text>
            {data.fact}
          </Text>
          </>
        )}
      </ScrollView>
      {common.Footer(navigation)}
    </View>
    
    </>
  );
}

export default PlantInfo;
