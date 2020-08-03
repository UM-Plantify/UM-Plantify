import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import * as common from "./common";

function Help({navigation}) {
  
  return (
    <>
    {common.FullHeader(navigation)}
    <View style={{ flex: 1, padding: 24 }}>
        <Text>
            All the fun help text goes here!
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Instructions")}>
          <Text style={{color:'#0000ff'}}>Link to instructions!</Text>
        </TouchableOpacity>
    </View>
    {common.Footer(navigation)}
    </>
  );
}

export default Help;
