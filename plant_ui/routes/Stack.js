import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../src/Home'
import Landing from '../src/Landing'
import Database from '../src/Database'
import TakePhoto from '../src/TakePhoto'
import ConfirmPhoto from '../src/ConfirmPhoto'
import PlantInfo from '../src/PlantInfo'
import Help from '../src/Help'
import Instructions from '../src/Instructions'

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
    PlantInfo: {
        screen: PlantInfo
    },
    Help: {
        screen: Help
    },
    Instructions: {
        screen: Instructions
    }
}

const Stack = createStackNavigator(screens, {initialRouteName:'Landing'}) 

export default createAppContainer(Stack)
