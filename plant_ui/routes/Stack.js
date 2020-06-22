import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../src/Home'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        },
    }
}

const Stack = createStackNavigator(screens) 

export default createAppContainer(Stack)