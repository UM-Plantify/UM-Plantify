import React from 'react';
import { View, Text } from "react-native";

function Instructions({navigation}) {
  
  return (
    <View style={{ flex: 1, padding: 24 }}>
        <Text>
            All the fun instructions go here!
        </Text>
    </View>
  );
}

export default Instructions;
