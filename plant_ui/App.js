// @flow
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/home';

// *** Just a static screen w/ text on it
/* class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Plant Identification Application   
                </Text>
            </View>
        );
    }
} */

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
/* export default StackNavigator({
    Home: { screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            headerBackTitle: 'Back',
        },
    },
    Detail: {screen: DetailScreen,
        navigationOptions: {
            title: 'Detail'
        },
    }
}); */

/* const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 50
    }
  }); */
