import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { IconButton } from "react-native-paper"
import { Icon } from 'react-native-elements'

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
        <View style={{flexDirection:"row", marginTop: 20}}>
            <View style= {{flex:1}}>
                <IconButton 
                    icon = {require('./icons/home.png')}
                    onPress = {() => navigation.navigate("Home")}
                    color = '#042940'
                    size={35}
                />
            </View>
            <View style= {{}}>
                <Image 
                    style = {{justifyContent: 'center', paddingTop: 20}}
                    source={require('../images/plant_graphic.png')}
                />
            </View>
            <View style= {{flex:1}}>
            <IconButton 
                    icon = {require('./icons/help.png')}
                    onPress = {() => navigation.navigate("Help")}
                    color = '#042940'
                    size={35}
                    style = {{
                        position: 'absolute',
                        top: '0%',
                        alignSelf: 'flex-end',
                        padding: 20
                    }}
                />
            </View>
        </View>
        </>
    );
}

export const LogoAndHelpHeader = (navigation) => {
    return (
        <>
        <View style={{flexDirection:"row", marginTop: 20}}>
            {/* <View style= {{flex:1}}>
                <Image 
                    style = {{justifyContent: 'center', paddingTop: 20}}
                    source={require('../images/plant_graphic.png')}
                />
            </View> */}
            <View style= {{flex:1}}>
                <IconButton 
                    icon = {require('./icons/help.png')}
                    onPress = {() => navigation.navigate("Help")}
                    color = '#042940'
                    size={35}
                    style = {{
                        position: 'absolute',
                        top: '0%',
                        alignSelf: 'flex-end',
                        padding: 20
                    }}
                />
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
