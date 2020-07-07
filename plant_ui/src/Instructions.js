import React from 'react';
import { View, Text } from "react-native";
import * as common from "./common";

function Instructions({navigation}) {
  
  return (
    <>
    {common.FullHeader(navigation)}
    <View style={{ flex: 1, padding: 24 }}>
        <Text>
            All the fun instructions go here!
        </Text>
    </View>
    </>
  );
}

export default Instructions;
