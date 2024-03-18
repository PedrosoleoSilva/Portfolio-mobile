import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import MainScreen from '../screens/MainScreen';
import SkillScreen from '../screens/SkillScreen';

const {Navigator, Screen} = createDrawerNavigator();

export function DrawerRoutes(){
    return(
        <Navigator>
            <Screen
                name='mainScreen'
                component={MainScreen}
            />
            <Screen
                name='skillScreen'
                component={SkillScreen}
            />
        </Navigator>
    )
}