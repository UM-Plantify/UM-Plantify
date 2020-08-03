import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

const plant_images = [
    require('./images/1.jpeg'),
    require('./images/2.jpeg'),
    require('./images/3.jpeg'),
    require('./images/4.jpeg'),
    require('./images/5.jpeg'),
    require('./images/6.jpeg'),
    require('./images/7.jpeg'),
    require('./images/8.jpeg'),
    require('./images/9.jpeg'),
    require('./images/10.jpeg'),
    require('./images/11.jpeg'),
    require('./images/12.jpeg'),
    require('./images/13.jpeg'),
    require('./images/14.jpeg'),
    require('./images/15.jpeg'),
    require('./images/16.jpeg'),
    require('./images/17.jpeg'),
    require('./images/18.jpeg'),
    require('./images/19.jpeg'),
    require('./images/20.jpeg'),
];

export default plant_images;
