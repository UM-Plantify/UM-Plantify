import React from 'react';
import { View, Button } from "react-native";
import * as common from "./common";

function Home({navigation}) {
  return (
    <>
    {common.LogoAndHelpHeader(navigation)}
    <View style={{ flex: 1, padding: 24 }}>
      <Button
        title="Take Photo"
        onPress={() => navigation.navigate('TakePhoto')}
      />
      <Button
        title="Database"
        onPress={() => navigation.navigate('Database')}
      />
    </View>
    </>
  );
}

export default Home;
