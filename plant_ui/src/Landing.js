import React from 'react';
import { View, Text, Button } from "react-native";

function Landing({navigation}) {
  
  return (
    <View style={{ flex: 1, padding: 24 }}>
        <Text>
            UM Plantify
        </Text>
        <Button
            title="START"
            onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}

export default Landing;
