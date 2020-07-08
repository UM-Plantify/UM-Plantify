import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../src/Home'
import Landing from '../src/Landing'
import Database from '../src/Database'
import TakePhoto from '../src/TakePhoto'
import ConfirmPhoto from '../src/ConfirmPhoto'
import DynamicMap from '../src/DynamicMap'
import StaticMap from '../src/StaticMap'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        },
    },
    Landing: {
        screen: Landing,
        navigationOptions: {
            title: 'Landing'
        }
    },
    Database: {
        screen: Database,
        navigationOptions: {
            title: 'Database'
        }
    },
    TakePhoto: {
        screen: TakePhoto
    },
    ConfirmPhoto: {
        screen: ConfirmPhoto
    },
    DynamicMap: {
        screen: DynamicMap
    },
    StaticMap: {
        screen: StaticMap
    }
}

const Stack = createStackNavigator(screens) 

export default createAppContainer(Stack)
