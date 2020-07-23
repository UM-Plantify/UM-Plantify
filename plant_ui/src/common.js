import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export const common_styles = StyleSheet.create({
    footer: {
        flexDirection:"row", 
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 0, 
        backgroundColor: "#042940"
    },
    camera: {
        backgroundColor: "#001827"
    },
    icon: {
        width: 50,
        height: 50
    },
    footer_icons: {
        padding: 15
    }
});

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
        <View style={common_styles.footer}>
            <View>
                <TouchableOpacity style={common_styles.footer_icons} onPress={()=> navigation.navigate("DynamicMap")}>
                    <Image style={common_styles.icon} source={require("./icons/map.png")}/>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={common_styles.footer_icons} onPress={()=> navigation.navigate("TakePhoto")}>
                <Image style={common_styles.icon} source={require("./icons/camera.png")}/>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={common_styles.footer_icons} onPress={()=> navigation.navigate("Database")}>
                <Image style={common_styles.icon} source={require("./icons/plant.png")}/>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}
