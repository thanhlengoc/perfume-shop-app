import { createDrawerNavigator } from 'react-navigation';
import MainTabNavigator from '../navigation/MainTabNavigator';
//import AppNavigator from '../components/MaterialTopTabNavigatior';

const MyDrawerNavigator = createDrawerNavigator ({
    Menu: { screen: MainTabNavigator },
    //Menu: { screen: AppNavigator },
});

export default MyDrawerNavigator;