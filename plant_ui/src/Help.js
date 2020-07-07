import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import * as common from "./common";

function Help({navigation}) {
  
  return (
    <>
    {common.LogoAndHomeHeader(navigation)}
    <View style={{ flex: 1, padding: 24 }}>
        <Text>
            All the fun help text goes here!
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Instructions")}>
          <Text>Link to instructions!</Text>
        </TouchableOpacity>
    </View>
    </>
  );
}

export default Help;
