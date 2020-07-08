import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";

export const FullHeader = (navigation) => {
    return (
        <>
        <View style={{flexDirection:"row", marginTop: 20, backgroundColor: '#0000ff'}}>
            <View style= {{flex:1}}>
                <TouchableOpacity style={{justifyContent: 'flex-start'}} onPress={()=> navigation.navigate("Home")}>
                    <Text style={{color: '#ffffff', fontSize:25}}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style= {{flex:1, backgroundColor:'#ffffff'}}>
                <Text style = {{justifyContent: 'center', fontSize:25}} >
                    LOGO
                </Text>
            </View>
            <View style= {{flex:1}}>
                <TouchableOpacity style={{justifyContent: 'flex-end'}} onPress={()=> navigation.navigate("Help")}>
                    <Text style={{color: '#ffffff', fontSize:25}}>Help</Text>
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
            <View style= {{flex:1, backgroundColor:'#ffffff'}}>
                <Text style = {{justifyContent: 'center', fontSize:25}} >
                    LOGO
                </Text>
            </View>
            <View style= {{flex:1}}>
                <TouchableOpacity style={{justifyContent: 'flex-end'}} onPress={()=> navigation.navigate("Help")}>
                    <Text style={{color: '#ffffff', fontSize:25}}>Help</Text>
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
                    <Text style={{color: '#ffffff', fontSize:25}}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style= {{flex:1, backgroundColor:'#ffffff'}}>
                <Text style = {{justifyContent: 'center', fontSize:25}} >
                    LOGO
                </Text>
            </View>
        </View>
        </>
    );
}

export const Footer = (navigation) => {
    return (
        <>
        <View style={{flexDirection:"row", marginBottom: 0, backgroundColor: '#0000ff'}}>
            
            <View style= {{flex:1}}>
                <TouchableOpacity style={{justifyContent: 'center'}} onPress={()=> navigation.navigate("TakePhoto")}>
                    <Text style={{color: '#ffffff', fontSize:25}}>CAMERA</Text>
                </TouchableOpacity>
            </View>
            <View style= {{flex:1}}>
                <TouchableOpacity style={{justifyContent: 'flex-end'}} onPress={()=> navigation.navigate("Database")}>
                    <Text style={{color: '#ffffff', fontSize:25}}>DATA</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}
