import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";

export const FullHeader = (navigation) => {
    return (
        <>
        <View style={{flexDirection:"row", marginTop: 20, backgroundColor: '#0000ff'}}>
            <View style= {{flex:1}}>
                <TouchableOpacity style={{justifyContent: 'flex-start'}} onPress={()=> navigation.navigate("Home")}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
            <View style= {{flex:1}}>
                <Text style = {{justifyContent: 'center'}} >
                    LOGO
                </Text>
            </View>
            <View style= {{flex:1}}>
                <TouchableOpacity style={{justifyContent: 'flex-end'}} onPress={()=> navigation.navigate("Help")}>
                    <Text>Help</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}

export const LogoAndHelpHeader = (navigation) => {
    return (
        <>
        <View style={{flexDirection:"row", marginTop: 20, backgroundColor: '#0000ff'}}>
            <View style= {{flex:1}}>
                <Text style = {{justifyContent: 'center'}} >
                    LOGO
                </Text>
            </View>
            <View style= {{flex:1}}>
                <TouchableOpacity style={{justifyContent: 'flex-end'}} onPress={()=> navigation.navigate("Help")}>
                    <Text>Help</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}

export const LogoAndHomeHeader = (navigation) => {
    return (
        <>
        <View style={{flexDirection:"row", marginTop: 20, backgroundColor: '#0000ff'}}>
            <View style= {{flex:1}}>
                <TouchableOpacity style={{justifyContent: 'flex-start'}} onPress={()=> navigation.navigate("Home")}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
            <View style= {{flex:1}}>
                <Text style = {{justifyContent: 'center'}} >
                    LOGO
                </Text>
            </View>
        </View>
        </>
    );
}
